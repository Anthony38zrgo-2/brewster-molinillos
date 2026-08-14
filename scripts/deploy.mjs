import { spawnSync } from "node:child_process";

const run = (command, args, options = {}) => {
  const executable = process.platform === "win32" && command === "npm" ? "npm.cmd" : command;
  const result = spawnSync(executable, args, {
    encoding: "utf8",
    stdio: options.capture ? "pipe" : "inherit",
  });

  if (result.status !== 0) {
    if (options.capture && result.stderr) {
      console.error(result.stderr.trim());
    }
    process.exit(result.status ?? 1);
  }

  return options.capture ? result.stdout.trim() : "";
};

const branch = run("git", ["branch", "--show-current"], { capture: true });

if (branch !== "main") {
  console.error(`El deploy solo puede ejecutarse desde main (rama actual: ${branch || "desconocida"}).`);
  process.exit(1);
}

const changes = run("git", ["status", "--porcelain"], { capture: true });

if (changes) {
  console.error("Hay cambios sin commit. Confirma o descarta esos cambios antes de desplegar.");
  process.exit(1);
}

console.log("Validando el build de producción...");
run("npm", ["run", "build"]);

console.log("Creando el evento de despliegue...");
run("git", ["commit", "--allow-empty", "-m", "chore: deploy GitHub Pages"]);
run("git", ["push", "origin", "main"]);

console.log("Deploy solicitado. GitHub Actions publicará el sitio cuando termine el workflow.");
