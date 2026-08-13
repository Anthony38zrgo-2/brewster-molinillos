<script setup>
import { siteConfig } from "@/config/site.config";
</script>

<template>
  <section id="about" class="section-space bg-surface relative overflow-hidden" aria-labelledby="about-title">
    <div class="page-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
        <!-- Fotografía de Origen Única -->
        <div class="lg:col-span-5">
          <div class="rounded-3xl overflow-hidden border border-gold-champagne/30 shadow-2xl group">
            <img
              :src="siteConfig.about.image"
              alt="Caficultor en el origen del café peruano"
              class="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <!-- Manifiesto Conciso -->
        <div class="lg:col-span-7 space-y-5 text-left">
          <h2 id="about-title" class="font-display text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight leading-tight">
            {{ siteConfig.about.title }}
          </h2>

          <p class="text-base sm:text-lg text-text-muted leading-relaxed">
            {{ siteConfig.about.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
