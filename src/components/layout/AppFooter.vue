<script setup>
import { siteConfig } from "@/config/site.config";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon.vue";
import { getWhatsAppUrl } from "@/utils/whatsapp";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-surface-deep border-t border-gold-champagne/20 py-10 text-text-muted">
    <div class="page-container flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Marca y Tagline -->
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full overflow-hidden border border-gold-champagne/40">
          <img
            :src="siteConfig.brand.logoUrl"
            :alt="siteConfig.brand.name"
            class="w-full h-full object-cover"
          />
        </div>
        <div>
          <span class="font-display text-base font-bold tracking-widest text-text-main">
            {{ siteConfig.brand.name }}
          </span>
          <p class="text-xs text-text-muted">{{ siteConfig.brand.tagline }}</p>
        </div>
      </div>

      <!-- Enlaces Rápidos -->
      <nav class="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
        <a
          :href="siteConfig.brand.instagram"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-gold-champagne transition-colors"
        >
          Instagram
        </a>
        <a
          :href="getWhatsAppUrl()"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 hover:text-gold-champagne transition-colors"
        >
          <WhatsAppIcon :size="14" />
          WhatsApp
        </a>
      </nav>

      <!-- Copyright -->
      <div class="text-xs text-text-muted text-center md:text-right">
        © {{ currentYear }} {{ siteConfig.brand.legalName }}
      </div>
    </div>
  </footer>
</template>
