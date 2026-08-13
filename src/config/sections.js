import { siteConfig } from "./site.config";

export const SECTION_IDS = Object.freeze([
  "header",
  "hero",
  "catalog",
  "benefits",
  "brewing-guide",
  "about",
  "contact",
  "footer",
  "floating-contact",
]);

export function isSectionEnabled(id, config = siteConfig) {
  return config.enabledSections.includes(id);
}

export function isConfiguredLinkAvailable(href, config = siteConfig) {
  if (!href.startsWith("#")) return true;
  const targetId = href.slice(1);
  return targetId === "top" || isSectionEnabled(targetId, config);
}
