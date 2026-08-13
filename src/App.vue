<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import BrewingGuideSection from "@/components/sections/BrewingGuideSection.vue";
import ColorOptionsSection from "@/components/sections/ColorOptionsSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import FloatingContact from "@/components/ui/FloatingContact.vue";
import { isSectionEnabled } from "@/config/sections";
</script>

<template>
  <div class="min-h-screen bg-surface-dark text-text-main flex flex-col selection:bg-gold-champagne/30 selection:text-white">
    <!-- Header -->
    <AppHeader v-if="isSectionEnabled('header')" />

    <!-- Main Content -->
    <main class="flex-1">
      <HeroSection v-if="isSectionEnabled('hero')" />
      <BrewingGuideSection v-if="isSectionEnabled('brewing-guide')" />
      <ColorOptionsSection v-if="isSectionEnabled('colors')" />
      <AboutSection v-if="isSectionEnabled('about')" />
      <ContactSection v-if="isSectionEnabled('trust-faq')" />
    </main>

    <!-- Footer -->
    <AppFooter v-if="isSectionEnabled('footer')" />

    <!-- Floating Contact Button -->
    <FloatingContact v-if="isSectionEnabled('floating-contact')" />
  </div>
</template>
