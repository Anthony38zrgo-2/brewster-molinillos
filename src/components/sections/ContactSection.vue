<script setup>
import { ref, computed } from "vue";
import { siteConfig } from "@/config/site.config";
import catalogData from "@/data/catalog.json";

const selectedProduct = ref(catalogData[0].name);
const customerName = ref("");
const customerCity = ref("Lima");
const customerNotes = ref("");

const customWhatsappUrl = computed(() => {
  const namePart = customerName.value ? `Mi nombre es ${customerName.value}. ` : "";
  const cityPart = customerCity.value ? `Estoy en ${customerCity.value}. ` : "";
  const notesPart = customerNotes.value ? `Consulta adicional: "${customerNotes.value}". ` : "";
  const text = `¡Hola Brewster Perú! ${namePart}${cityPart}Deseo ordenar el producto: "${selectedProduct.value}". ${notesPart}¿Cuál es el método de pago y tiempo de despacho?`;
  return `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(text)}`;
});

const faqs = [
  {
    q: "¿Hacen envíos a todo el Perú?",
    a: "Sí, realizamos envíos a todo Lima Metropolitana (entrega rápida en 24 a 48 horas) y a todas las provincias del Perú a través de Olva Courier y Shalom con número de seguimiento.",
  },
  {
    q: "¿Por qué un molinillo de muelas de acero es superior a uno de cuchillas o cerámica?",
    a: "Las muelas de acero inoxidable mecanizadas en CNC cortan el grano con precisión uniforme sin generar exceso de polvo fino ni fricción térmica, lo que previene que el café se sobreextraiga o se queme durante la molienda.",
  },
  {
    q: "¿Cómo se limpia y mantiene el Brewster B6?",
    a: "Incluye una brocha de cerdas finas para remover los residuos después de cada uso. No se debe lavar con agua corriente para proteger la lubricación de los rodamientos de acero inoxidable.",
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Transferencias bancarias (BCP, Interbank, BBVA), Yape, Plin y tarjetas de débito/crédito.",
  },
];

const openFaq = ref(0);
const toggleFaq = (idx) => {
  openFaq.value = openFaq.value === idx ? -1 : idx;
};
</script>

<template>
  <section id="contact" class="section-space bg-[#0d0f12] relative overflow-hidden" aria-labelledby="contact-title">
    <div class="page-container relative z-10">
      <!-- Encabezado -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e2229] border border-[#c9a978]/30">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a978]">
            {{ siteConfig.contact.eyebrow }}
          </span>
        </div>
        <h2 id="contact-title" class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f3f5f8] tracking-tight">
          {{ siteConfig.contact.title }}
        </h2>
        <p class="text-base sm:text-lg text-[#9ba3b0]">
          {{ siteConfig.contact.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <!-- Columna Izquierda: Generador Interactivo de Pedido WhatsApp -->
        <div class="lg:col-span-6 glass-card p-6 sm:p-8 space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-[#222730]">
            <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.77.822 2.796.822 3.182 0 5.768-2.586 5.768-5.768zm0 10.455c-.887 0-1.61-.247-2.388-.696l-.17-.098-1.784.468.476-1.737-.111-.177c-.504-.805-.77-1.492-.769-2.45.001-2.582 2.102-4.683 4.686-4.683 2.582 0 4.683 2.101 4.683 4.683 0 2.583-2.101 4.684-4.684 4.684zm6.059-4.689c.045-.075.045-.164.015-.224-.03-.06-.119-.09-.239-.149-.119-.06-.703-.347-.812-.387-.11-.04-.19-.06-.27.06-.08.119-.308.387-.378.467-.07.08-.139.09-.258.03-.119-.06-.504-.186-.96-.593-.355-.316-.594-.707-.664-.827-.07-.119-.007-.184.053-.243.054-.053.119-.139.179-.208.06-.07.08-.119.119-.199.04-.08.02-.149-.01-.208-.03-.06-.27-.648-.37-.887-.097-.233-.197-.202-.27-.205l-.23-.003c-.08 0-.209.03-.319.149-.11.119-.418.408-.418.995s.428 1.154.488 1.234c.06.08.842 1.286 2.04 1.803.285.123.508.196.682.251.287.091.548.078.755.047.23-.034.703-.287.802-.564.099-.276.099-.513.07-.563z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-display text-lg font-bold text-[#f3f5f8]">Asistente de Pedido Directo</h3>
              <p class="text-xs text-[#9ba3b0]">Configura tu consulta y te responderemos de inmediato en WhatsApp</p>
            </div>
          </div>

          <form @submit.prevent class="space-y-4">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#c9a978] mb-1.5">
                Selecciona tu Modelo / Pack:
              </label>
              <select
                v-model="selectedProduct"
                class="w-full bg-[#14171d] border border-[#c9a978]/30 rounded-xl px-4 py-3 text-sm text-[#f3f5f8] focus:outline-none focus:border-[#c9a978]"
              >
                <option v-for="prod in catalogData" :key="prod.id" :value="prod.name">
                  {{ prod.name }} — S/ {{ prod.price.toFixed(2) }}
                </option>
              </select>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#9ba3b0] mb-1.5">
                  Tu Nombre (opcional):
                </label>
                <input
                  v-model="customerName"
                  type="text"
                  placeholder="Ej. Rodrigo Quispe"
                  class="w-full bg-[#14171d] border border-[#c9a978]/20 rounded-xl px-4 py-2.5 text-sm text-[#f3f5f8] focus:outline-none focus:border-[#c9a978]"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#9ba3b0] mb-1.5">
                  Ciudad / Destino:
                </label>
                <input
                  v-model="customerCity"
                  type="text"
                  placeholder="Ej. Lima, Arequipa, Cusco..."
                  class="w-full bg-[#14171d] border border-[#c9a978]/20 rounded-xl px-4 py-2.5 text-sm text-[#f3f5f8] focus:outline-none focus:border-[#c9a978]"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-[#9ba3b0] mb-1.5">
                Mensaje o consulta adicional (opcional):
              </label>
              <textarea
                v-model="customerNotes"
                rows="2"
                placeholder="¿Tienes alguna pregunta sobre métodos de pago o calibración?"
                class="w-full bg-[#14171d] border border-[#c9a978]/20 rounded-xl px-4 py-2.5 text-sm text-[#f3f5f8] focus:outline-none focus:border-[#c9a978]"
              ></textarea>
            </div>

            <a
              :href="customWhatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-gold w-full text-center !py-3.5 mt-2"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.77.822 2.796.822 3.182 0 5.768-2.586 5.768-5.768zm0 10.455c-.887 0-1.61-.247-2.388-.696l-.17-.098-1.784.468.476-1.737-.111-.177c-.504-.805-.77-1.492-.769-2.45.001-2.582 2.102-4.683 4.686-4.683 2.582 0 4.683 2.101 4.683 4.683 0 2.583-2.101 4.684-4.684 4.684zm6.059-4.689c.045-.075.045-.164.015-.224-.03-.06-.119-.09-.239-.149-.119-.06-.703-.347-.812-.387-.11-.04-.19-.06-.27.06-.08.119-.308.387-.378.467-.07.08-.139.09-.258.03-.119-.06-.504-.186-.96-.593-.355-.316-.594-.707-.664-.827-.07-.119-.007-.184.053-.243.054-.053.119-.139.179-.208.06-.07.08-.119.119-.199.04-.08.02-.149-.01-.208-.03-.06-.27-.648-.37-.887-.097-.233-.197-.202-.27-.205l-.23-.003c-.08 0-.209.03-.319.149-.11.119-.418.408-.418.995s.428 1.154.488 1.234c.06.08.842 1.286 2.04 1.803.285.123.508.196.682.251.287.091.548.078.755.047.23-.034.703-.287.802-.564.099-.276.099-.513.07-.563z"/>
              </svg>
              <span>Enviar Pedido por WhatsApp</span>
            </a>
          </form>
        </div>

        <!-- Columna Derecha: Preguntas Frecuentes y Garantía -->
        <div class="lg:col-span-6 space-y-6">
          <h3 class="font-display text-xl font-bold text-[#f3f5f8]">Preguntas Frecuentes</h3>
          
          <div class="space-y-3">
            <div
              v-for="(faq, idx) in faqs"
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
              <div v-show="openFaq === idx" class="px-4 pb-4 text-xs sm:text-sm text-[#9ba3b0] leading-relaxed border-t border-[#222730] pt-3">
                {{ faq.a }}
              </div>
            </div>
          </div>

          <!-- Canales Directos -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <a
              :href="siteConfig.brand.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 rounded-2xl bg-[#1a1e24] border border-[#c9a978]/20 hover:border-[#c9a978] transition-colors flex items-center gap-3"
            >
              <div class="w-10 h-10 rounded-xl bg-[#c9a978]/15 text-[#c9a978] flex items-center justify-center">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </div>
              <div>
                <span class="block text-xs text-[#9ba3b0]">Instagram Oficial</span>
                <span class="block text-sm font-bold text-[#f3f5f8]">{{ siteConfig.brand.instagramHandle }}</span>
              </div>
            </a>

            <div class="p-4 rounded-2xl bg-[#1a1e24] border border-[#c9a978]/20 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#c9a978]/15 text-[#c9a978] flex items-center justify-center">
                <svg class="w-5 h-5 fill-none stroke-current" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <span class="block text-xs text-[#9ba3b0]">Correo Electrónico</span>
                <span class="block text-sm font-bold text-[#f3f5f8]">{{ siteConfig.brand.email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
