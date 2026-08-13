<script setup>
import { siteConfig } from "@/config/site.config";
</script>

<template>
  <section id="benefits" class="section-space bg-[#13161b] relative overflow-hidden" aria-labelledby="benefits-title">
    <!-- Glow decorativo -->
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a978]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="page-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Columna Izquierda: Introducción y Foto en Acción -->
        <div class="lg:col-span-5 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e2229] border border-[#c9a978]/30">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a978]">
              {{ siteConfig.benefits.eyebrow }}
            </span>
          </div>

          <h2 id="benefits-title" class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f3f5f8] tracking-tight leading-tight">
            {{ siteConfig.benefits.title }}
          </h2>

          <p class="text-base sm:text-lg text-[#9ba3b0] leading-relaxed">
            {{ siteConfig.benefits.description }}
          </p>

          <!-- Imagen de Demostración de Molienda -->
          <div class="rounded-3xl overflow-hidden border border-[#c9a978]/30 shadow-2xl relative group">
            <img
              src="/images/pouring-ground-coffee.jpg"
              alt="Vertiendo café molido fresco con Brewster"
              class="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/90 via-transparent to-transparent flex items-end p-6">
              <p class="text-xs sm:text-sm font-semibold text-[#f3f5f8]">
                "La molienda al momento conserva hasta un 98% más de aceites aromáticos volátiles frente al café comercial pre-molido."
              </p>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Grid de 6 Tarjetas de Beneficios -->
        <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="benefit in siteConfig.benefits.items"
            :key="benefit.id"
            class="glass-card p-6 space-y-3 relative group"
          >
            <div class="w-10 h-10 rounded-2xl bg-[#c9a978]/10 border border-[#c9a978]/30 flex items-center justify-center text-[#c9a978] group-hover:bg-[#c9a978] group-hover:text-[#0d0f12] transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 class="font-display text-lg font-bold text-[#f3f5f8] group-hover:text-[#c9a978] transition-colors">
              {{ benefit.title }}
            </h3>

            <p class="text-xs sm:text-sm text-[#9ba3b0] leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
