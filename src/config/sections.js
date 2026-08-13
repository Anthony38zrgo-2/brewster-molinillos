import { siteConfig } from "./site.config";

export const SECTION_IDS = Object.freeze([
  "header",
  "hero",
  "brewing-guide",
  "colors",
  "about",
  "trust-faq",
  "footer",
  "floating-contact",
]);

export function isSectionEnabled(id, config = siteConfig) {
  return config.enabledSections.includes(id);
}
