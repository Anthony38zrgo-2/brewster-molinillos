<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { siteConfig } from "@/config/site.config";
import { isSectionEnabled } from "@/config/sections";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const navItems = [
  { label: "Catálogo", href: "#catalog", sectionId: "catalog" },
  { label: "Beneficios", href: "#benefits", sectionId: "benefits" },
  { label: "Guía de Molienda", href: "#brewing-guide", sectionId: "brewing-guide" },
  { label: "Origen & Historia", href: "#about", sectionId: "about" },
  { label: "Contacto", href: "#contact", sectionId: "contact" },
].filter((item) => isSectionEnabled(item.sectionId));

const getWhatsappUrl = () => {
  const text = encodeURIComponent(siteConfig.brand.whatsappMessage);
  return `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${text}`;
};
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-[#0d0f12]/90 backdrop-blur-md border-b border-[#c9a978]/20 shadow-2xl py-3'
        : 'bg-gradient-to-b from-[#0d0f12]/90 to-transparent py-5',
    ]"
  >
    <div class="page-container flex items-center justify-between">
      <!-- Logo y Nombre de Marca -->
      <a href="#top" class="flex items-center gap-3 group">
        <div class="relative w-10 h-10 rounded-full overflow-hidden border border-[#c9a978]/40 shadow-inner group-hover:border-[#c9a978] transition-colors">
          <img
            :src="siteConfig.brand.logoUrl"
            :alt="siteConfig.brand.name"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col">
          <span class="font-display text-xl font-bold tracking-widest text-[#f3f5f8] group-hover:text-[#c9a978] transition-colors">
            {{ siteConfig.brand.name }}
          </span>
          <span class="text-[10px] tracking-[0.2em] uppercase text-[#c9a978]/80 font-medium">
            Línea Profesional
          </span>
        </div>
      </a>

      <!-- Navegación Desktop -->
      <nav class="hidden md:flex items-center gap-8" aria-label="Navegación principal">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-[#9ba3b0] hover:text-[#c9a978] transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c9a978] hover:after:w-full after:transition-all"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Botón de Acción Directa WhatsApp -->
      <div class="hidden lg:flex items-center gap-4">
        <a
          :href="getWhatsappUrl()"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-gold !py-2.5 !px-5 text-sm"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.77.822 2.796.822 3.182 0 5.768-2.586 5.768-5.766.001-3.181-2.585-5.768-5.768-5.768zm0 10.455c-.887 0-1.61-.247-2.388-.696l-.17-.098-1.784.468.476-1.737-.111-.177c-.504-.805-.77-1.492-.769-2.45.001-2.582 2.102-4.683 4.686-4.683 2.582 0 4.683 2.101 4.683 4.683 0 2.583-2.101 4.684-4.684 4.684zm6.059-4.689c.045-.075.045-.164.015-.224-.03-.06-.119-.09-.239-.149-.119-.06-.703-.347-.812-.387-.11-.04-.19-.06-.27.06-.08.119-.308.387-.378.467-.07.08-.139.09-.258.03-.119-.06-.504-.186-.96-.593-.355-.316-.594-.707-.664-.827-.07-.119-.007-.184.053-.243.054-.053.119-.139.179-.208.06-.07.08-.119.119-.199.04-.08.02-.149-.01-.208-.03-.06-.27-.648-.37-.887-.097-.233-.197-.202-.27-.205l-.23-.003c-.08 0-.209.03-.319.149-.11.119-.418.408-.418.995s.428 1.154.488 1.234c.06.08.842 1.286 2.04 1.803.285.123.508.196.682.251.287.091.548.078.755.047.23-.034.703-.287.802-.564.099-.276.099-.513.07-.563z"/>
          </svg>
          <span>Comprar / Consultar</span>
        </a>
      </div>

      <!-- Botón Menú Mobile -->
      <button
        type="button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 rounded-lg text-[#f3f5f8] hover:text-[#c9a978] bg-[#1a1e24]/80 border border-[#c9a978]/20 focus:outline-none"
        aria-label="Abrir menú de navegación"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Menú Desplegable Mobile -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-[#13161b]/95 backdrop-blur-xl border-b border-[#c9a978]/30 px-5 py-6 space-y-4 mt-3"
      >
        <nav class="flex flex-col space-y-3">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="closeMobileMenu"
            class="text-base font-medium text-[#f3f5f8] hover:text-[#c9a978] py-2 border-b border-[#222730] transition-colors"
          >
            {{ item.label }}
          </a>
        </nav>
        <div class="pt-2">
          <a
            :href="getWhatsappUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-gold w-full text-center"
          >
            <span>Pedir por WhatsApp</span>
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>
