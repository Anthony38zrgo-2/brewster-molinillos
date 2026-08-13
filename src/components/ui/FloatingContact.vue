<script setup>
import ChatIcon from "@/components/ui/icons/ChatIcon.vue";
import InstagramIcon from "@/components/ui/icons/InstagramIcon.vue";
import { siteConfig } from "@/config/site.config";
import { getWhatsAppUrl } from "@/utils/whatsapp";
</script>

<template>
  <aside class="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3" aria-label="Redes de contacto">
    <a
      :href="siteConfig.brand.instagram"
      target="_blank"
      rel="noopener noreferrer"
      class="w-14 h-14 rounded-full bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] text-white flex items-center justify-center shadow-2xl shadow-black/40 hover:scale-110 hover:opacity-90 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-pink-500/30"
      aria-label="Seguir a Brewster Perú en Instagram"
    >
      <InstagramIcon :size="26" />
    </a>
    <a
      :href="getWhatsAppUrl()"
      target="_blank"
      rel="noopener noreferrer"
      class="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 hover:scale-110 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-emerald-500/30"
      aria-label="Chatear por WhatsApp con Brewster Perú"
    >
      <ChatIcon :size="26" />
    </a>
  </aside>
</template>
