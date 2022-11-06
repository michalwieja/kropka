<template>
  <div id="offer" class="offer site container">
    <SectionTitle subtitle="Tutaj podtytuł oferty" title="Oferta" />
    <div class="offer__cards">
      <div
        v-for="card in offerConfig"
        :key="card.label"
        class="offer__card"
      >
        <!--        <div class="offer__card__photo" />-->
        <img alt="" src="offer/rysunek.jpg">
        <div class="offer__card__content">
          {{ card.label }}
        </div>
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
