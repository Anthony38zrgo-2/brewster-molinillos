<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { siteConfig } from "@/config/site.config";

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
  { label: "Molinillos", href: "#catalog" },
  { label: "Guía", href: "#brewing-guide" },
  { label: "Brewster", href: "#about" },
];
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-[#0d0f12]/90 backdrop-blur-md border-b border-[#c9a978]/20 shadow-2xl py-3.5'
        : 'bg-gradient-to-b from-[#0d0f12]/90 to-transparent py-5',
    ]"
  >
    <div class="page-container flex items-center justify-between">
      <!-- Logo y Marca -->
      <a href="#top" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-full overflow-hidden border border-[#c9a978]/40 shadow-inner group-hover:border-[#c9a978] transition-colors flex-shrink-0">
          <img
            :src="siteConfig.brand.logoUrl"
            :alt="siteConfig.brand.name"
            class="w-full h-full object-cover"
          />
        </div>
        <span class="font-display text-lg sm:text-xl font-bold tracking-widest text-[#f3f5f8] group-hover:text-[#c9a978] transition-colors">
          {{ siteConfig.brand.name }}
        </span>
      </a>

      <!-- Navegación Desktop Concisa -->
      <nav class="hidden md:flex items-center gap-8" aria-label="Navegación principal">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-[#9ba3b0] hover:text-[#c9a978] transition-colors tracking-wide py-1"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Botón Menú Mobile -->
      <button
        type="button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 rounded-lg text-[#f3f5f8] hover:text-[#c9a978] bg-[#1a1e24]/80 border border-[#c9a978]/20 focus:outline-none"
        aria-label="Abrir menú de navegación"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        class="md:hidden bg-[#13161b]/98 backdrop-blur-xl border-b border-[#c9a978]/30 px-6 py-5 mt-3 space-y-3"
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
      </div>
    </transition>
  </header>
</template>
