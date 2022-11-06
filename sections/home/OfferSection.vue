<template>
  <div id="offer" class="offer site container">
    <SectionTitle subtitle="Co u nas znajdziesz" title="Oferta" />
    <div class="offer__cards">
      <div
        v-for="card in offerConfig"
        :key="card.label"
        class="offer__card"
      >
        <img alt="" class="top-img" src="offer/rysunek.jpg">
        <img alt="" class="bg-img" src="offer/rysunek.jpg">
        <span class="label">{{ card.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'
import { offerConfig } from '../../config/offer-config.js'

export default {
  name: 'OfferSection',
  components: { SectionTitle },
  data () {
    return {
      offerConfig
    }
  }

}
</script>

<style scoped>
.offer {
  min-height: 100vh;
}

</style>
