<script setup>
import { siteConfig } from "@/config/site.config";
</script>

<template>
  <section id="about" class="section-space bg-[#13161b] relative overflow-hidden" aria-labelledby="about-title">
    <div class="page-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Columna Izquierda: Galería Visual de Origen -->
        <div class="lg:col-span-6 grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <div class="rounded-3xl overflow-hidden border border-[#c9a978]/30 shadow-xl group">
              <img
                src="/images/farmer-origin-basket.jpg"
                alt="Caficultor peruano en el origen del café"
                class="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="rounded-2xl overflow-hidden border border-[#c9a978]/20 bg-[#1a1e24] p-4 text-center">
              <span class="block text-2xl font-bold font-display text-[#c9a978]">1,800+</span>
              <span class="text-xs text-[#9ba3b0]">m.s.n.m. Altitud de Origen</span>
            </div>
          </div>

          <div class="space-y-4 pt-8">
            <div class="rounded-2xl overflow-hidden border border-[#c9a978]/20 bg-[#1a1e24] p-4 text-center">
              <span class="block text-2xl font-bold font-display text-[#dfc79b]">100%</span>
              <span class="text-xs text-[#9ba3b0]">Arábica de Especialidad</span>
            </div>
            <div class="rounded-3xl overflow-hidden border border-[#c9a978]/30 shadow-xl group">
              <img
                src="/images/farmer-field-passion.jpg"
                alt="Cultivo de café con pasión en Perú"
                class="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Contenido y Manifiesto -->
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e2229] border border-[#c9a978]/30">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a978]">
              {{ siteConfig.about.eyebrow }}
            </span>
          </div>

          <h2 id="about-title" class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f3f5f8] tracking-tight leading-tight">
            {{ siteConfig.about.title }}
          </h2>

          <blockquote class="p-4 rounded-2xl bg-[#1e2229]/60 border-l-4 border-[#c9a978] italic text-sm sm:text-base text-[#dfc79b]">
            "{{ siteConfig.about.quote }}"
          </blockquote>

          <p class="text-base text-[#9ba3b0] leading-relaxed">
            {{ siteConfig.about.description }}
          </p>

          <ul class="space-y-3 pt-2">
            <li
              v-for="(point, idx) in siteConfig.about.points"
              :key="idx"
              class="flex items-start gap-3 text-sm text-[#dce1e8]"
            >
              <div class="w-5 h-5 rounded-full bg-[#c9a978]/20 border border-[#c9a978]/40 flex items-center justify-center text-[#c9a978] flex-shrink-0 mt-0.5">
                <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span>{{ point }}</span>
            </li>
          </ul>

          <div class="pt-4 flex items-center gap-4">
            <a href="#catalog" class="btn-gold">
              <span>Ver Modelos Brewster B6</span>
            </a>
            <a
              :href="siteConfig.brand.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary-metal"
            >
              <span>Seguir en Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
