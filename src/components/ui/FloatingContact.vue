<script setup>
import { siteConfig } from "@/config/site.config";

const getWhatsappUrl = () => {
  const text = encodeURIComponent(siteConfig.brand.whatsappMessage);
  return `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${text}`;
};
</script>

<template>
  <aside
    class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group"
    aria-label="Contacto flotante WhatsApp"
  >
    <!-- Tooltip / Badge de ayuda -->
    <div
      class="hidden sm:flex items-center gap-2 bg-[#1a1e24] border border-[#c9a978]/30 px-3 py-1.5 rounded-full shadow-2xl opacity-90 group-hover:opacity-100 transition-all text-xs font-medium text-[#f3f5f8]"
    >
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      <span class="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
      <span>¿Consultas? ¡Escríbenos!</span>
    </div>

    <!-- Botón flotante WhatsApp -->
    <a
      :href="getWhatsappUrl()"
      target="_blank"
      rel="noopener noreferrer"
      class="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-900/50 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
      aria-label="Chatear por WhatsApp con Brewster Perú"
    >
      <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path
          d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.77.822 2.796.822 3.182 0 5.768-2.586 5.768-5.766.001-3.181-2.585-5.768-5.768-5.768zm0 10.455c-.887 0-1.61-.247-2.388-.696l-.17-.098-1.784.468.476-1.737-.111-.177c-.504-.805-.77-1.492-.769-2.45.001-2.582 2.102-4.683 4.686-4.683 2.582 0 4.683 2.101 4.683 4.683 0 2.583-2.101 4.684-4.684 4.684zm6.059-4.689c.045-.075.045-.164.015-.224-.03-.06-.119-.09-.239-.149-.119-.06-.703-.347-.812-.387-.11-.04-.19-.06-.27.06-.08.119-.308.387-.378.467-.07.08-.139.09-.258.03-.119-.06-.504-.186-.96-.593-.355-.316-.594-.707-.664-.827-.07-.119-.007-.184.053-.243.054-.053.119-.139.179-.208.06-.07.08-.119.119-.199.04-.08.02-.149-.01-.208-.03-.06-.27-.648-.37-.887-.097-.233-.197-.202-.27-.205l-.23-.003c-.08 0-.209.03-.319.149-.11.119-.418.408-.418.995s.428 1.154.488 1.234c.06.08.842 1.286 2.04 1.803.285.123.508.196.682.251.287.091.548.078.755.047.23-.034.703-.287.802-.564.099-.276.099-.513.07-.563z"
        />
      </svg>
    </a>
  </aside>
</template>
