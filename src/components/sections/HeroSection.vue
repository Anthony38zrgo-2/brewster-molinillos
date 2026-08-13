<script setup>
import { ref } from "vue";
import { siteConfig } from "@/config/site.config";

const activePreview = ref("/images/trio-grinders-wood.jpg");

const previewList = [
  { label: "Trío de Molinillos B6", src: "/images/trio-grinders-wood.jpg" },
  { label: "Champagne Gold", src: "/images/grinder-champagne-espresso.jpg" },
  { label: "Matte Black", src: "/images/grinder-black-loading-beans.jpg" },
  { label: "Pack & Estuche", src: "/images/unboxing-b6-black.jpg" },
];
</script>

<template>
  <section id="top" class="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#0d0f12] via-[#13161b] to-[#0d0f12]">
    <!-- Luces sutiles de fondo -->
    <div class="absolute -top-40 right-1/4 w-96 h-96 bg-[#c9a978]/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 -left-40 w-96 h-96 bg-[#6e4327]/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="page-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <!-- Columna Izquierda: Información Principal -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <!-- Eyebrow -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2229]/80 border border-[#c9a978]/30">
            <span class="w-1.5 h-1.5 rounded-full bg-[#c9a978]"></span>
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a978]">
              {{ siteConfig.hero.eyebrow }}
            </span>
          </div>

          <!-- Título Principal -->
          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f3f5f8] leading-[1.1]">
            Molienda de Precisión para <br class="hidden sm:inline" />
            <span class="text-gold-gradient">Café de Especialidad</span>
          </h1>

          <!-- Descripción Corta y Concreta -->
          <p class="text-base sm:text-lg text-[#9ba3b0] max-w-xl leading-relaxed">
            {{ siteConfig.hero.description }}
          </p>

          <!-- Acción Principal Única -->
          <div class="pt-2">
            <a :href="siteConfig.hero.primaryAction.href" class="btn-gold">
              <span>{{ siteConfig.hero.primaryAction.label }}</span>
              <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Columna Derecha: Galería Visual -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl overflow-hidden border border-[#c9a978]/30 bg-[#1a1e24] shadow-2xl group">
            <div class="aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#0d0f12]">
              <img
                :src="activePreview"
                alt="Molinillo Brewster B6"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            <!-- Miniaturas -->
            <div class="p-3.5 bg-[#14171d]/90 backdrop-blur-md border-t border-[#c9a978]/20 flex items-center gap-3 overflow-x-auto">
              <button
                v-for="item in previewList"
                :key="item.src"
                @click="activePreview = item.src"
                :class="[
                  'relative w-12 h-12 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 focus:outline-none',
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
