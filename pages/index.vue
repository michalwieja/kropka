<template>
  <div>
    <HeroSection />
    <AboutSection />
    <OfferSection />
  </div>
</template>

<script>

import HeroSection from '../sections/home/HeroSection.vue'
import AboutSection from '../sections/home/AboutSection.vue'
import OfferSection from '../sections/home/OfferSection.vue'

export default {
  name: 'IndexPage',
  components: {
    OfferSection,
    AboutSection,
    HeroSection
  }
}
</script>
