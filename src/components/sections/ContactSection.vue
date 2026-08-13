<script setup>
import { ref } from "vue";
import { siteConfig } from "@/config/site.config";

const openFaq = ref(0);
const toggleFaq = (idx) => {
  openFaq.value = openFaq.value === idx ? -1 : idx;
};
</script>

<template>
  <section id="trust-faq" class="section-space bg-[#13161b] relative overflow-hidden" aria-labelledby="trust-title">
    <div class="page-container relative z-10 max-w-4xl mx-auto space-y-12">
      <!-- Encabezado -->
      <div class="text-center space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2229] border border-[#c9a978]/30">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a978]">
            {{ siteConfig.trustFaq.eyebrow }}
          </span>
        </div>
        <h2 id="trust-title" class="font-display text-3xl sm:text-4xl font-extrabold text-[#f3f5f8] tracking-tight">
          {{ siteConfig.trustFaq.title }}
        </h2>
      </div>

      <!-- 3 Pilares de Confianza -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(pillar, idx) in siteConfig.trustFaq.trustPillars"
          :key="idx"
          class="p-5 rounded-2xl bg-[#1a1e24] border border-[#c9a978]/20 space-y-1.5 text-center"
        >
          <h3 class="font-display text-sm font-bold text-[#c9a978]">
            {{ pillar.title }}
          </h3>
          <p class="text-xs text-[#9ba3b0] leading-relaxed">
            {{ pillar.desc }}
          </p>
        </div>
      </div>

      <!-- Máximo 3 Preguntas Frecuentes -->
      <div class="space-y-3 pt-2">
        <div
          v-for="(faq, idx) in siteConfig.trustFaq.faqs"
          :key="idx"
          class="rounded-2xl bg-[#14171d] border border-[#c9a978]/20 overflow-hidden transition-colors"
        >
          <button
            type="button"
            @click="toggleFaq(idx)"
            class="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#f3f5f8] hover:text-[#c9a978] focus:outline-none"
          >
            <span>{{ faq.q }}</span>
            <svg
              :class="['w-4 h-4 text-[#c9a978] transition-transform duration-200 flex-shrink-0', openFaq === idx ? 'rotate-180' : '']"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            v-show="openFaq === idx"
            class="px-4 pb-4 text-xs sm:text-sm text-[#9ba3b0] leading-relaxed border-t border-[#222730] pt-3"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
