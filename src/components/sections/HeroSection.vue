<script setup>
import { ref } from "vue";
import { siteConfig } from "@/config/site.config";

const activePreview = ref("/images/grinder-champagne-espresso.jpg");

const previewList = [
  { label: "Champagne Gold", src: "/images/grinder-champagne-espresso.jpg" },
  { label: "Matte Black", src: "/images/grinder-black-loading-beans.jpg" },
  { label: "Pack & Estuche", src: "/images/unboxing-b6-black.jpg" },
];
</script>

<template>
  <section id="top" class="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-surface-dark via-surface to-surface-dark">
    <!-- Luces sutiles de fondo -->
    <div class="absolute -top-40 right-1/4 w-96 h-96 bg-gold-champagne/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 -left-40 w-96 h-96 bg-wood-walnut/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="page-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <!-- Columna Izquierda: Información Principal -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <!-- Título Principal -->
          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-main leading-[1.1]">
            {{ siteConfig.hero.titleBase }}<span class="text-gold-gradient">{{ siteConfig.hero.titleAccent }}</span>
          </h1>

          <!-- Descripción Corta y Concreta -->
          <p class="text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
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
          <div class="relative rounded-3xl overflow-hidden border border-gold-champagne/30 bg-surface-card shadow-2xl group">
            <div class="aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-surface-dark">
              <img
                :src="activePreview"
                alt="Molinillo Brewster B6"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            <!-- Miniaturas -->
            <div class="p-3.5 bg-surface-raised/90 backdrop-blur-md border-t border-gold-champagne/20 flex items-center gap-3 overflow-x-auto">
              <button
                v-for="item in previewList"
                :key="item.src"
                @click="activePreview = item.src"
                :class="[
                  'relative w-12 h-12 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0',
                  activePreview === item.src
                    ? 'border-gold-champagne ring-2 ring-gold-champagne/30 scale-105'
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
