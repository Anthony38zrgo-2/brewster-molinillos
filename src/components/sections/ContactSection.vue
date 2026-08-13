<script setup>
import { siteConfig } from "@/config/site.config";
import ShippingIcon from "@/components/ui/icons/ShippingIcon.vue";
import PaymentIcon from "@/components/ui/icons/PaymentIcon.vue";
import CleaningIcon from "@/components/ui/icons/CleaningIcon.vue";

const iconMap = {
  shipping: ShippingIcon,
  payment: PaymentIcon,
  cleaning: CleaningIcon,
};
</script>

<template>
  <section id="trust-faq" class="section-space bg-surface-dark relative overflow-hidden" aria-labelledby="trust-title">
    <div class="page-container relative z-10 max-w-4xl mx-auto space-y-12">
      <!-- Encabezado -->
      <div class="text-center space-y-3">
        <h2 id="trust-title" class="font-display text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
          {{ siteConfig.trustFaq.title }}
        </h2>
        <p class="text-sm sm:text-base text-text-muted">
          {{ siteConfig.trustFaq.description }}
        </p>
      </div>

      <!-- Preguntas Frecuentes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(faq, idx) in siteConfig.trustFaq.faqs"
          :key="idx"
          class="rounded-2xl bg-surface-raised border border-gold-champagne/20 p-5 space-y-2"
        >
          <component
            :is="iconMap[faq.icon]"
            class="w-6 h-6 text-gold-champagne/70"
          />
          <h3 class="font-display text-sm font-bold text-text-main">{{ faq.q }}</h3>
          <p class="text-sm text-text-muted leading-relaxed">{{ faq.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
