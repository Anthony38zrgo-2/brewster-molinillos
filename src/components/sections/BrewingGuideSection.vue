<script setup>
import { siteConfig } from "@/config/site.config";
</script>

<template>
  <section id="brewing-guide" class="section-space bg-surface relative overflow-hidden" aria-labelledby="guide-title">
    <div class="page-container relative z-10">
      <!-- Encabezado -->
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <h2 id="guide-title" class="font-display text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
          {{ siteConfig.brewingGuide.title }}
        </h2>
        <p class="text-sm sm:text-base text-text-muted">
          {{ siteConfig.brewingGuide.description }}
        </p>
      </div>

      <!-- Imagen y Métodos de Molienda -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
        <!-- Imagen de los molinillos -->
        <div class="lg:col-span-5">
          <div class="rounded-3xl overflow-hidden border border-gold-champagne/30 shadow-2xl">
            <img
              :src="siteConfig.brewingGuide.image"
              alt="Molienda de café en acción"
              class="w-full aspect-[3/4] object-cover"
            />
          </div>
        </div>

        <!-- Métodos de Molienda Compactos -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="method in siteConfig.brewingGuide.methods"
            :key="method.name"
            class="glass-card p-5 space-y-3 flex flex-col justify-between"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                {{ method.type }}
              </span>
              <span class="px-2.5 py-1 rounded-full bg-gold-champagne/15 border border-gold-champagne/30 text-xs font-bold text-gold-champagne">
                {{ method.clicks }}
              </span>
            </div>

            <h3 class="font-display text-base font-bold text-text-main">
              {{ method.name }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
