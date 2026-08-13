<script setup>
import { ref } from "vue";
import catalogData from "@/data/catalog.json";
import { siteConfig } from "@/config/site.config";

const activeModalProduct = ref(null);

const openSpecsModal = (product) => {
  activeModalProduct.value = product;
};

const closeSpecsModal = () => {
  activeModalProduct.value = null;
};

const getProductWhatsappUrl = (product) => {
  const message = `¡Hola Brewster Perú! Deseo comprar el producto: "${product.name}" (S/ ${product.price.toFixed(2)}). ¿Tienen stock disponible para envío?`;
  return `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
</script>

<template>
  <section id="catalog" class="section-space bg-[#0d0f12] relative" aria-labelledby="catalog-title">
    <!-- Glow sutil -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#c9a978]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="page-container relative z-10">
      <!-- Encabezado de Sección -->
      <div class="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2229] border border-[#c9a978]/30">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a978]">
            {{ siteConfig.catalog.eyebrow }}
          </span>
        </div>
        <h2 id="catalog-title" class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f3f5f8] tracking-tight">
          {{ siteConfig.catalog.title }}
        </h2>
        <p class="text-sm sm:text-base text-[#9ba3b0]">
          {{ siteConfig.catalog.description }}
        </p>
      </div>

      <!-- Grid de Tarjetas de Producto Simplificadas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <article
          v-for="product in catalogData"
          :key="product.id"
          class="glass-card overflow-hidden flex flex-col justify-between group"
        >
          <!-- Imagen de Producto -->
          <div class="relative aspect-[16/10] overflow-hidden bg-[#14171d]">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <!-- Badge con significado real -->
            <div
              v-if="product.badge"
              class="absolute top-3.5 left-3.5 bg-[#c9a978] text-[#0d0f12] text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider"
            >
              {{ product.badge }}
            </div>
          </div>

          <!-- Contenido de la Tarjeta -->
          <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
            <div class="space-y-2">
              <h3 class="font-display text-xl sm:text-2xl font-bold text-[#f3f5f8] group-hover:text-[#c9a978] transition-colors">
                {{ product.name }}
              </h3>
              <p class="text-xs sm:text-sm text-[#9ba3b0] line-clamp-1">
                {{ product.tagline }}
              </p>

              <!-- 3 Highlights Máximo -->
              <ul class="pt-3 space-y-1.5 text-xs text-[#dce1e8]">
                <li
                  v-for="(item, idx) in product.highlights"
                  :key="idx"
                  class="flex items-center gap-2"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-[#c9a978]"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Precio y Botones de Acción -->
            <div class="pt-4 border-t border-[#222730] flex items-center justify-between gap-3">
              <div class="flex items-baseline gap-2">
                <span class="text-2xl sm:text-3xl font-extrabold text-[#f3f5f8] font-display">
                  S/ {{ product.price.toFixed(2) }}
                </span>
                <span
                  v-if="product.originalPrice && product.originalPrice > product.price"
                  class="text-xs text-[#677180] line-through font-medium"
                >
                  S/ {{ product.originalPrice.toFixed(0) }}
                </span>
              </div>

              <div class="flex items-center gap-2">
                <button
                  type="button"
                  @click="openSpecsModal(product)"
                  class="px-3.5 py-2 rounded-full text-xs font-semibold text-[#dce1e8] bg-[#1e2229] hover:bg-[#2e3540] border border-[#c9a978]/25 transition-colors focus:outline-none"
                >
                  Ver detalles
                </button>
                <a
                  :href="getProductWhatsappUrl(product)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-gold !py-2 !px-4 text-xs font-bold"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Modal de Ficha Técnica Completa (Progressive Disclosure) -->
    <div
      v-if="activeModalProduct"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      @click.self="closeSpecsModal"
    >
      <div class="bg-[#14171d] border border-[#c9a978]/40 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-5 shadow-2xl relative">
        <button
          type="button"
          @click="closeSpecsModal"
          class="absolute top-5 right-5 p-2 rounded-full bg-[#1e2229] text-[#9ba3b0] hover:text-[#f3f5f8] transition-colors"
          aria-label="Cerrar ficha técnica"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Cabecera Modal -->
        <div>
          <span class="text-[11px] text-[#c9a978] uppercase tracking-widest font-bold">Ficha Técnica</span>
          <h3 class="font-display text-xl font-bold text-[#f3f5f8] mt-0.5">{{ activeModalProduct.name }}</h3>
        </div>

        <!-- Especificaciones en Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-[#9ba3b0]">Material</span>
            <span class="block font-semibold text-[#f3f5f8] mt-0.5">{{ activeModalProduct.specs.material }}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-[#9ba3b0]">Muelas</span>
            <span class="block font-semibold text-[#f3f5f8] mt-0.5">{{ activeModalProduct.specs.burrs }}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-[#9ba3b0]">Capacidad</span>
            <span class="block font-semibold text-[#f3f5f8] mt-0.5">{{ activeModalProduct.specs.capacity }}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-[#9ba3b0]">Ajuste</span>
            <span class="block font-semibold text-[#f3f5f8] mt-0.5">{{ activeModalProduct.specs.adjustment }}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-[#9ba3b0]">Manivela</span>
            <span class="block font-semibold text-[#f3f5f8] mt-0.5">{{ activeModalProduct.specs.handle }}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-[#9ba3b0]">Peso</span>
            <span class="block font-semibold text-[#f3f5f8] mt-0.5">{{ activeModalProduct.specs.weight }}</span>
          </div>
        </div>

        <div class="p-3.5 rounded-xl bg-[#0d0f12] border border-[#c9a978]/20 space-y-1 text-xs">
          <span class="font-bold text-[#c9a978] uppercase tracking-wider">Incluye en caja:</span>
          <p class="text-[#dce1e8]">{{ activeModalProduct.specs.includes }}</p>
        </div>

        <!-- Acción directa desde el modal -->
        <div class="pt-3 border-t border-[#1e2229] flex items-center justify-between">
          <div class="text-xl font-bold font-display text-[#f3f5f8]">
            S/ {{ activeModalProduct.price.toFixed(2) }}
          </div>
          <a
            :href="getProductWhatsappUrl(activeModalProduct)"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-gold !py-2.5 !px-5 text-xs font-bold"
          >
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
