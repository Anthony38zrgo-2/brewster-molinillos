<script setup>
import { siteConfig } from "@/config/site.config";
</script>

<template>
  <section id="brewing-guide" class="section-space bg-[#0d0f12] relative overflow-hidden" aria-labelledby="guide-title">
    <div class="page-container relative z-10">
      <!-- Encabezado -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e2229] border border-[#c9a978]/30">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a978]">
            {{ siteConfig.brewingGuide.eyebrow }}
          </span>
        </div>
        <h2 id="guide-title" class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f3f5f8] tracking-tight">
          {{ siteConfig.brewingGuide.title }}
        </h2>
        <p class="text-base sm:text-lg text-[#9ba3b0]">
          {{ siteConfig.brewingGuide.description }}
        </p>
      </div>

      <!-- Tarjetas de Métodos de Extracción -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="method in siteConfig.brewingGuide.methods"
          :key="method.name"
          class="glass-card p-6 flex flex-col justify-between space-y-6 relative overflow-hidden group"
        >
          <div class="space-y-4">
            <!-- Clics Badge -->
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full bg-[#c9a978]/15 border border-[#c9a978]/30 text-xs font-extrabold text-[#c9a978]">
                {{ method.clicks }}
              </span>
              <span class="text-xs font-mono text-[#9ba3b0]">
                {{ method.type }}
              </span>
            </div>

            <h3 class="font-display text-xl font-bold text-[#f3f5f8] group-hover:text-[#c9a978] transition-colors">
              {{ method.name }}
            </h3>

            <p class="text-xs sm:text-sm text-[#9ba3b0] leading-relaxed">
              {{ method.notes }}
            </p>
          </div>

          <!-- Ratio y Tiempo -->
          <div class="pt-4 border-t border-[#222730] grid grid-cols-2 gap-2 text-xs">
            <div>
              <span class="block text-[#677180]">Ratio Café/Agua:</span>
              <span class="block font-semibold text-[#dce1e8] mt-0.5">{{ method.ratio }}</span>
            </div>
            <div>
              <span class="block text-[#677180]">Tiempo:</span>
              <span class="block font-semibold text-[#dce1e8] mt-0.5">{{ method.time }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Banner de Consejo Barista -->
      <div class="mt-12 rounded-3xl bg-gradient-to-r from-[#1a1e24] via-[#20140e] to-[#1a1e24] border border-[#c9a978]/30 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl overflow-hidden border border-[#c9a978]/40 flex-shrink-0 hidden sm:block">
            <img src="/images/espresso-crema-cup.webp" alt="Espresso crema Brewster" class="w-full h-full object-cover" />
          </div>
          <div>
            <h4 class="font-display text-lg font-bold text-[#f3f5f8]">Consejo del Barista Brewster</h4>
            <p class="text-xs sm:text-sm text-[#9ba3b0] mt-1 max-w-xl">
              Ajusta 1 clic más fino si tu café sabe ácido o hueco, o 1 clic más grueso si el flujo es lento y se siente amargo.
            </p>
          </div>
        </div>
        <a href="#catalog" class="btn-gold whitespace-nowrap !py-2.5 !px-6 text-xs sm:text-sm flex-shrink-0">
          Elegir Mi Molinillo
        </a>
      </div>
    </div>
  </section>
</template>
