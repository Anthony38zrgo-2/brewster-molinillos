<script setup>
import { siteConfig } from "@/config/site.config";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[#090b0e] border-t border-[#c9a978]/20 pt-16 pb-12 text-[#9ba3b0]">
    <div class="page-container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1e2229]">
        <!-- Marca y Propósito -->
        <div class="space-y-4 lg:col-span-1">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full overflow-hidden border border-[#c9a978]/40">
              <img
                :src="siteConfig.brand.logoUrl"
                :alt="siteConfig.brand.name"
                class="w-full h-full object-cover"
              />
            </div>
            <span class="font-display text-xl font-bold tracking-widest text-[#f3f5f8]">
              {{ siteConfig.brand.name }}
            </span>
          </div>
          <p class="text-sm leading-relaxed text-[#9ba3b0]">
            {{ siteConfig.brand.tagline }}. {{ siteConfig.brand.description }}
          </p>
          <div class="pt-2 flex items-center gap-3">
            <a
              :href="siteConfig.brand.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full bg-[#1a1e24] border border-[#c9a978]/30 flex items-center justify-center text-[#c9a978] hover:bg-[#c9a978] hover:text-[#0d0f12] transition-colors"
              aria-label="Instagram Brewster"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <span class="text-xs text-[#c9a978] font-mono">{{ siteConfig.brand.instagramHandle }}</span>
          </div>
        </div>

        <!-- Enlaces Rápidos -->
        <div>
          <h4 class="text-xs uppercase tracking-widest text-[#f3f5f8] font-bold mb-4">Navegación</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#top" class="hover:text-[#c9a978] transition-colors">Inicio</a></li>
            <li><a href="#catalog" class="hover:text-[#c9a978] transition-colors">Molinillos Brewster B6</a></li>
            <li><a href="#benefits" class="hover:text-[#c9a978] transition-colors">Ingeniería & Beneficios</a></li>
            <li><a href="#brewing-guide" class="hover:text-[#c9a978] transition-colors">Guía de Clics de Molienda</a></li>
            <li><a href="#about" class="hover:text-[#c9a978] transition-colors">Origen Cafetalero del Perú</a></li>
            <li><a href="#contact" class="hover:text-[#c9a978] transition-colors">Atención & Pedidos</a></li>
          </ul>
        </div>

        <!-- Métodos & Compatibilidad -->
        <div>
          <h4 class="text-xs uppercase tracking-widest text-[#f3f5f8] font-bold mb-4">Métodos de Extracción</h4>
          <ul class="space-y-2 text-sm text-[#9ba3b0]">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#c9a978]"></span>
              <span>Espresso & Cafetera Italiana (Moka)</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#c9a978]"></span>
              <span>V60, Chemex & Kalita Wave</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#c9a978]"></span>
              <span>Aeropress & Dripper</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-[#c9a978]"></span>
              <span>Prensa Francesa & Cold Brew</span>
            </li>
          </ul>
        </div>

        <!-- Garantía y Confianza -->
        <div class="space-y-3">
          <h4 class="text-xs uppercase tracking-widest text-[#f3f5f8] font-bold mb-4">Garantía Brewster</h4>
          <div class="p-4 rounded-xl bg-[#14171d] border border-[#c9a978]/20 space-y-2">
            <div class="flex items-center gap-2 text-[#c9a978] font-bold text-sm">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 1l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.874-6.172-3.245-6.172 3.245 1.179-6.874-4.993-4.867 6.9-1.002z"/>
              </svg>
              <span>100% Satisfacción</span>
            </div>
            <p class="text-xs leading-relaxed text-[#9ba3b0]">
              Muelas de acero inoxidable mecanizadas por CNC diseñadas para máxima durabilidad y molienda sin esfuerzo.
            </p>
          </div>
        </div>
      </div>

      <!-- Copyright y pie de página -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#677180]">
        <p>© {{ currentYear }} {{ siteConfig.brand.legalName }}. Todos los derechos reservados.</p>
        <p class="text-[#c9a978]/70">Pasión por el Café de Origen Peruano</p>
      </div>
    </div>
  </footer>
</template>
