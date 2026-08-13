<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import CatalogSection from "@/components/sections/CatalogSection.vue";
import BenefitsSection from "@/components/sections/BenefitsSection.vue";
import BrewingGuideSection from "@/components/sections/BrewingGuideSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import FloatingContact from "@/components/ui/FloatingContact.vue";
import { isSectionEnabled } from "@/config/sections";
</script>

<template>
  <div class="min-h-screen bg-[#0d0f12] text-[#f3f5f8] flex flex-col selection:bg-[#c9a978]/30 selection:text-white">
    <!-- Header -->
    <AppHeader v-if="isSectionEnabled('header')" />

    <!-- Main Content -->
    <main class="flex-1">
      <HeroSection v-if="isSectionEnabled('hero')" />
      <CatalogSection v-if="isSectionEnabled('catalog')" />
      <BenefitsSection v-if="isSectionEnabled('benefits')" />
      <BrewingGuideSection v-if="isSectionEnabled('brewing-guide')" />
      <AboutSection v-if="isSectionEnabled('about')" />
      <ContactSection v-if="isSectionEnabled('contact')" />
    </main>

    <!-- Footer -->
    <AppFooter v-if="isSectionEnabled('footer')" />

    <!-- Floating Contact Button -->
    <FloatingContact v-if="isSectionEnabled('floating-contact')" />
  </div>
</template>
