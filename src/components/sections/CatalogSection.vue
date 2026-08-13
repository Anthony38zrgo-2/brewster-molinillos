<script setup>
import { ref, computed } from "vue";
import catalogData from "@/data/catalog.json";
import { siteConfig } from "@/config/site.config";

const selectedCategory = ref("all");
const activeModalProduct = ref(null);

const categories = [
  { id: "all", label: "Todos los Modelos" },
  { id: "Molinillos Manuales", label: "Molinillos B6" },
  { id: "Kits y Promociones", label: "Packs y Sets" },
];

const filteredProducts = computed(() => {
  if (selectedCategory.value === "all") return catalogData;
  return catalogData.filter((p) => p.category === selectedCategory.value);
});

const openSpecsModal = (product) => {
  activeModalProduct.value = product;
};

const closeSpecsModal = () => {
  activeModalProduct.value = null;
};

const getProductWhatsappUrl = (product) => {
  const message = `¡Hola Brewster Perú! Deseo solicitar el producto: ${product.name} (Precio oferta: S/ ${product.price.toFixed(2)}). ¿Tienen stock disponible y cuál es el tiempo de entrega?`;
  return `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
</script>

<template>
  <section id="catalog" class="section-space bg-[#0d0f12] relative" aria-labelledby="catalog-title">
    <!-- Glow decorativo -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c9a978]/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="page-container relative z-10">
      <!-- Encabezado de Sección -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e2229] border border-[#c9a978]/30">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a978]">
            {{ siteConfig.catalog.eyebrow }}
          </span>
        </div>
        <h2 id="catalog-title" class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f3f5f8] tracking-tight">
          {{ siteConfig.catalog.title }}
        </h2>
        <p class="text-base sm:text-lg text-[#9ba3b0]">
          {{ siteConfig.catalog.description }}
        </p>

        <!-- Filtro de Categorías -->
        <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="selectedCategory = cat.id"
            :class="[
              'px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none',
              selectedCategory === cat.id
                ? 'bg-[#c9a978] text-[#0d0f12] shadow-lg shadow-[#c9a978]/20'
                : 'bg-[#1a1e24] text-[#9ba3b0] hover:text-[#f3f5f8] hover:bg-[#222730] border border-[#c9a978]/15',
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Grid de Productos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <article
          v-for="product in filteredProducts"
          :key="product.id"
          class="glass-card overflow-hidden flex flex-col justify-between group"
        >
          <!-- Contenedor Visual de Producto -->
          <div class="relative aspect-[16/10] overflow-hidden bg-[#14171d]">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <!-- Badge de producto -->
            <div
              v-if="product.badge"
              class="absolute top-4 left-4 bg-[#c9a978] text-[#0d0f12] text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider"
            >
              {{ product.badge }}
            </div>
            <!-- Descuento Tag -->
            <div
              v-if="product.originalPrice > product.price"
              class="absolute top-4 right-4 bg-[#0d0f12]/80 backdrop-blur-md border border-[#c9a978]/30 text-[#dfc79b] text-xs font-bold px-2.5 py-1 rounded-full"
            >
              Ahorra S/ {{ (product.originalPrice - product.price).toFixed(0) }}
            </div>
          </div>

          <!-- Información y Precios -->
          <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-2">
                <span class="text-xs uppercase tracking-widest text-[#c9a978] font-bold">
                  {{ product.category }}
                </span>
                <span class="text-xs text-[#9ba3b0] font-mono">
                  Capacidad: {{ product.specs.capacity }}
                </span>
              </div>

              <h3 class="font-display text-xl sm:text-2xl font-bold text-[#f3f5f8] group-hover:text-[#c9a978] transition-colors">
                {{ product.name }}
              </h3>

              <p class="text-sm text-[#9ba3b0] leading-relaxed">
                {{ product.tagline }}
              </p>

              <!-- Lista de Puntos Clave -->
              <ul class="space-y-2 pt-2 text-xs sm:text-sm text-[#dce1e8]">
                <li
                  v-for="(item, idx) in product.highlights"
                  :key="idx"
                  class="flex items-start gap-2"
                >
                  <svg class="w-4 h-4 text-[#c9a978] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Precios y Acciones -->
            <div class="pt-6 border-t border-[#222730] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl sm:text-3xl font-extrabold text-[#f3f5f8] font-display">
                    S/ {{ product.price.toFixed(2) }}
                  </span>
                  <span
                    v-if="product.originalPrice"
                    class="text-sm text-[#677180] line-through font-medium"
                  >
                    S/ {{ product.originalPrice.toFixed(2) }}
                  </span>
                </div>
                <span class="text-[11px] text-emerald-400 font-medium">Stock disponible · Envío nacional</span>
              </div>

              <div class="flex items-center gap-2">
                <button
                  type="button"
                  @click="openSpecsModal(product)"
                  class="px-4 py-2.5 rounded-full text-xs font-semibold text-[#f3f5f8] bg-[#1e2229] hover:bg-[#2e3540] border border-[#c9a978]/25 transition-colors focus:outline-none"
                >
                  Ficha Técnica
                </button>
                <a
                  :href="getProductWhatsappUrl(product)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-gold !py-2.5 !px-5 text-xs sm:text-sm"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.77.822 2.796.822 3.182 0 5.768-2.586 5.768-5.766.001-3.181-2.585-5.768-5.768-5.768zm0 10.455c-.887 0-1.61-.247-2.388-.696l-.17-.098-1.784.468.476-1.737-.111-.177c-.504-.805-.77-1.492-.769-2.45.001-2.582 2.102-4.683 4.686-4.683 2.582 0 4.683 2.101 4.683 4.683 0 2.583-2.101 4.684-4.684 4.684zm6.059-4.689c.045-.075.045-.164.015-.224-.03-.06-.119-.09-.239-.149-.119-.06-.703-.347-.812-.387-.11-.04-.19-.06-.27.06-.08.119-.308.387-.378.467-.07.08-.139.09-.258.03-.119-.06-.504-.186-.96-.593-.355-.316-.594-.707-.664-.827-.07-.119-.007-.184.053-.243.054-.053.119-.139.179-.208.06-.07.08-.119.119-.199.04-.08.02-.149-.01-.208-.03-.06-.27-.648-.37-.887-.097-.233-.197-.202-.27-.205l-.23-.003c-.08 0-.209.03-.319.149-.11.119-.418.408-.418.995s.428 1.154.488 1.234c.06.08.842 1.286 2.04 1.803.285.123.508.196.682.251.287.091.548.078.755.047.23-.034.703-.287.802-.564.099-.276.099-.513.07-.563z"/>
                  </svg>
                  <span>Pedir Ahora</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Modal de Ficha Técnica Detallada -->
    <div
      v-if="activeModalProduct"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      @click.self="closeSpecsModal"
    >
      <div class="bg-[#14171d] border border-[#c9a978]/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
        <button
          type="button"
          @click="closeSpecsModal"
          class="absolute top-5 right-5 p-2 rounded-full bg-[#1e2229] text-[#9ba3b0] hover:text-[#f3f5f8] hover:bg-[#2e3540] transition-colors"
          aria-label="Cerrar modal"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl overflow-hidden border border-[#c9a978]/40">
            <img :src="activeModalProduct.image" :alt="activeModalProduct.name" class="w-full h-full object-cover" />
          </div>
          <div>
            <h3 class="font-display text-xl font-bold text-[#f3f5f8]">{{ activeModalProduct.name }}</h3>
            <p class="text-xs text-[#c9a978] uppercase tracking-widest font-bold">Ficha Técnica Oficial</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-3.5 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-xs text-[#9ba3b0]">Material y Estructura</span>
            <span class="block text-sm font-semibold text-[#f3f5f8] mt-1">{{ activeModalProduct.specs.material }}</span>
          </div>
          <div class="p-3.5 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-xs text-[#9ba3b0]">Muelas de Molienda</span>
            <span class="block text-sm font-semibold text-[#f3f5f8] mt-1">{{ activeModalProduct.specs.burrs }}</span>
          </div>
          <div class="p-3.5 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-xs text-[#9ba3b0]">Capacidad de Tolva</span>
            <span class="block text-sm font-semibold text-[#f3f5f8] mt-1">{{ activeModalProduct.specs.capacity }}</span>
          </div>
          <div class="p-3.5 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-xs text-[#9ba3b0]">Sistema de Regulación</span>
            <span class="block text-sm font-semibold text-[#f3f5f8] mt-1">{{ activeModalProduct.specs.adjustment }}</span>
          </div>
          <div class="p-3.5 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-xs text-[#9ba3b0]">Manivela y Empuñadura</span>
            <span class="block text-sm font-semibold text-[#f3f5f8] mt-1">{{ activeModalProduct.specs.handle }}</span>
          </div>
          <div class="p-3.5 rounded-xl bg-[#1e2229]/70 border border-[#c9a978]/10">
            <span class="block text-xs text-[#9ba3b0]">Peso Total</span>
            <span class="block text-sm font-semibold text-[#f3f5f8] mt-1">{{ activeModalProduct.specs.weight }}</span>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-[#0d0f12] border border-[#c9a978]/20 space-y-2">
          <span class="text-xs uppercase tracking-widest text-[#c9a978] font-bold">Contenido del Paquete:</span>
          <p class="text-sm text-[#dce1e8]">{{ activeModalProduct.specs.includes }}</p>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-[#1e2229]">
          <div>
            <span class="text-xs text-[#9ba3b0]">Precio Especial:</span>
            <div class="text-2xl font-extrabold text-[#f3f5f8] font-display">S/ {{ activeModalProduct.price.toFixed(2) }}</div>
          </div>
          <a
            :href="getProductWhatsappUrl(activeModalProduct)"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-gold"
          >
            <span>Pedir por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
