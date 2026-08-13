import { siteConfig } from "@/config/site.config";

export function getWhatsAppUrl() {
  const text = encodeURIComponent(siteConfig.brand.whatsappMessage);
  return `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${text}`;
}
