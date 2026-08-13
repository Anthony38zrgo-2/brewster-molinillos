<script setup>
import { siteConfig } from "@/config/site.config";

const currentYear = new Date().getFullYear();

const getWhatsappUrl = () => {
  const text = encodeURIComponent(siteConfig.brand.whatsappMessage);
  return `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${text}`;
};
</script>

<template>
  <footer class="bg-[#090b0e] border-t border-[#c9a978]/20 py-10 text-[#9ba3b0]">
    <div class="page-container flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Marca y Tagline -->
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full overflow-hidden border border-[#c9a978]/40">
          <img
            :src="siteConfig.brand.logoUrl"
            :alt="siteConfig.brand.name"
            class="w-full h-full object-cover"
          />
        </div>
        <div>
          <span class="font-display text-base font-bold tracking-widest text-[#f3f5f8]">
            {{ siteConfig.brand.name }}
          </span>
          <p class="text-xs text-[#677180]">{{ siteConfig.brand.tagline }}</p>
        </div>
      </div>

      <!-- Enlaces Rápidos -->
      <nav class="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
        <a href="#catalog" class="hover:text-[#c9a978] transition-colors">Molinillos</a>
        <a href="#brewing-guide" class="hover:text-[#c9a978] transition-colors">Guía</a>
        <a href="#about" class="hover:text-[#c9a978] transition-colors">Brewster</a>
        <a
          :href="siteConfig.brand.instagram"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-[#c9a978] transition-colors"
        >
          Instagram
        </a>
        <a
          :href="getWhatsappUrl()"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-[#c9a978] transition-colors"
        >
          WhatsApp
        </a>
      </nav>

      <!-- Copyright -->
      <div class="text-xs text-[#677180] text-center md:text-right">
        © {{ currentYear }} {{ siteConfig.brand.legalName }}
      </div>
    </div>
  </footer>
</template>
