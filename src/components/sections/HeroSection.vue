<script setup>
import { ref } from "vue";
import { siteConfig } from "@/config/site.config";

const activePreview = ref("/images/trio-grinders-wood.jpg");

const previewList = [
  { label: "Trío de Molinillos B6", src: "/images/trio-grinders-wood.jpg" },
  { label: "Champagne Gold en Acción", src: "/images/grinder-champagne-espresso.jpg" },
  { label: "Matte Black & Granos", src: "/images/grinder-black-loading-beans.jpg" },
  { label: "Unboxing & Empaque", src: "/images/unboxing-b6-black.jpg" },
];

const getWhatsappUrl = () => {
  const text = encodeURIComponent(siteConfig.brand.whatsappMessage);
  return `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${text}`;
};
</script>

<template>
  <section id="top" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#0d0f12] via-[#13161b] to-[#0d0f12]">
    <!-- Elementos decorativos de fondo / Luces metálicas suaves -->
    <div class="absolute -top-40 right-1/4 w-96 h-96 bg-[#c9a978]/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 -left-40 w-96 h-96 bg-[#6e4327]/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="page-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Columna Izquierda: Información Principal -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <!-- Badge Superior -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e2229]/80 border border-[#c9a978]/30 backdrop-blur-sm">
            <span class="w-2 h-2 rounded-full bg-[#c9a978]"></span>
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a978]">
              {{ siteConfig.hero.eyebrow }}
            </span>
          </div>

          <!-- Título Principal -->
          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f3f5f8] leading-[1.08]">
            Molienda de Precisión para el <br class="hidden sm:inline" />
            <span class="text-gold-gradient">Verdadero Café de Especialidad</span>
          </h1>

          <!-- Descripción -->
          <p class="text-base sm:text-lg text-[#9ba3b0] max-w-2xl leading-relaxed">
            {{ siteConfig.hero.description }}
          </p>

          <!-- Botones de Acción -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a :href="siteConfig.hero.primaryAction.href" class="btn-gold">
              <span>{{ siteConfig.hero.primaryAction.label }}</span>
              <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              :href="getWhatsappUrl()"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary-metal"
            >
              <svg class="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.77.822 2.796.822 3.182 0 5.768-2.586 5.768-5.768zm0 10.455c-.887 0-1.61-.247-2.388-.696l-.17-.098-1.784.468.476-1.737-.111-.177c-.504-.805-.77-1.492-.769-2.45.001-2.582 2.102-4.683 4.686-4.683 2.582 0 4.683 2.101 4.683 4.683 0 2.583-2.101 4.684-4.684 4.684zm6.059-4.689c.045-.075.045-.164.015-.224-.03-.06-.119-.09-.239-.149-.119-.06-.703-.347-.812-.387-.11-.04-.19-.06-.27.06-.08.119-.308.387-.378.467-.07.08-.139.09-.258.03-.119-.06-.504-.186-.96-.593-.355-.316-.594-.707-.664-.827-.07-.119-.007-.184.053-.243.054-.053.119-.139.179-.208.06-.07.08-.119.119-.199.04-.08.02-.149-.01-.208-.03-.06-.27-.648-.37-.887-.097-.233-.197-.202-.27-.205l-.23-.003c-.08 0-.209.03-.319.149-.11.119-.418.408-.418.995s.428 1.154.488 1.234c.06.08.842 1.286 2.04 1.803.285.123.508.196.682.251.287.091.548.078.755.047.23-.034.703-.287.802-.564.099-.276.099-.513.07-.563z"/>
              </svg>
              <span>{{ siteConfig.hero.secondaryAction.label }}</span>
            </a>
          </div>

          <!-- Métricas de Ingeniería -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1e2229]">
            <div
              v-for="stat in siteConfig.hero.stats"
              :key="stat.label"
              class="p-3 rounded-xl bg-[#14171d]/60 border border-[#c9a978]/10"
            >
              <span class="block font-display text-lg sm:text-xl font-bold text-[#c9a978]">
                {{ stat.value }}
              </span>
              <span class="block text-xs text-[#9ba3b0] mt-0.5">
                {{ stat.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Showcase Visual Interactivo -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl overflow-hidden border border-[#c9a978]/30 bg-[#1a1e24] shadow-2xl group">
            <!-- Imagen Principal Activa -->
            <div class="aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#0d0f12]">
              <img
                :src="activePreview"
                alt="Molinillo Brewster B6"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            <!-- Badge Flotante en la Imagen -->
            <div class="absolute top-4 right-4 bg-[#0d0f12]/80 backdrop-blur-md border border-[#c9a978]/40 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-amber-400"></span>
              <span class="text-xs font-semibold text-[#f3f5f8]">100% Acero Inox + Nogal</span>
            </div>

            <!-- Selector de Miniaturas Interactivas -->
            <div class="p-4 bg-[#14171d]/90 backdrop-blur-md border-t border-[#c9a978]/20 flex items-center gap-3 overflow-x-auto">
              <button
                v-for="item in previewList"
                :key="item.src"
                @click="activePreview = item.src"
                :class="[
                  'relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 focus:outline-none',
                  activePreview === item.src
                    ? 'border-[#c9a978] ring-2 ring-[#c9a978]/30 scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100',
                ]"
                :title="item.label"
              >
                <img :src="item.src" :alt="item.label" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
