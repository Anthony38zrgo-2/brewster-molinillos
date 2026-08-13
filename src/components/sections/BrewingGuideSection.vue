<script setup>
import { siteConfig } from "@/config/site.config";
</script>

<template>
  <section id="brewing-guide" class="section-space bg-[#13161b] relative overflow-hidden" aria-labelledby="guide-title">
    <div class="page-container relative z-10">
      <!-- Encabezado -->
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2229] border border-[#c9a978]/30">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a978]">
            {{ siteConfig.brewingGuide.eyebrow }}
          </span>
        </div>
        <h2 id="guide-title" class="font-display text-3xl sm:text-4xl font-extrabold text-[#f3f5f8] tracking-tight">
          {{ siteConfig.brewingGuide.title }}
        </h2>
        <p class="text-xs sm:text-sm text-[#9ba3b0]">
          {{ siteConfig.brewingGuide.description }}
        </p>
      </div>

      <!-- Métodos de Molienda Compactos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div
          v-for="method in siteConfig.brewingGuide.methods"
          :key="method.name"
          class="glass-card p-5 space-y-3 flex flex-col justify-between border border-[#c9a978]/15 hover:border-[#c9a978]/40"
        >
          <div class="flex items-center justify-between gap-2">
            <span class="text-[11px] font-mono uppercase tracking-wider text-[#9ba3b0]">
              {{ method.type }}
            </span>
            <span class="px-2.5 py-1 rounded-full bg-[#c9a978]/15 border border-[#c9a978]/30 text-xs font-bold text-[#c9a978]">
              {{ method.clicks }}
            </span>
          </div>

          <h3 class="font-display text-base font-bold text-[#f3f5f8]">
            {{ method.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
