<script setup>
import { siteConfig } from "@/config/site.config";
</script>

<template>
  <section id="colors" class="section-space bg-surface-dark relative overflow-hidden" aria-labelledby="colors-title">
    <div class="page-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
        <!-- Información de colores -->
        <div class="lg:col-span-6 space-y-5 text-left lg:order-1">
          <h2 id="colors-title" class="font-display text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight leading-tight">
            {{ siteConfig.colorOptions.title }}
          </h2>
          <p class="text-sm sm:text-base text-text-muted leading-relaxed">
            {{ siteConfig.colorOptions.description }}
          </p>

          <ul class="space-y-4 pt-1">
            <li
              v-for="color in siteConfig.colorOptions.colors"
              :key="color.name"
              class="flex items-start gap-3.5"
            >
              <span
                class="w-5 h-5 rounded-md border border-gold-champagne/40 flex-shrink-0 mt-0.5"
                :style="{ backgroundColor: color.swatch }"
                :aria-label="`Color ${color.name}`"
              ></span>
              <div>
                <h3 class="font-display text-sm font-bold text-text-main">{{ color.name }}</h3>
                <p class="text-xs text-text-muted leading-relaxed">{{ color.desc }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Imagen de los molinillos -->
        <div class="lg:col-span-6 lg:order-2">
          <div class="rounded-3xl overflow-hidden border border-gold-champagne/30 shadow-2xl bg-surface-dark">
            <img
              :src="siteConfig.colorOptions.image"
              alt="Colores disponibles de molinillos Brewster B6"
              class="w-full aspect-[4/3] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
