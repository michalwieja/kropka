<template>
  <div id="offer" class="offer site container">
    <SectionTitle
      subtitle="Zajęcia dla maluszków i przedszkolaków"
      title="Oferta"
    />
    <div class="offer__cards">
      <div
        v-for="card in youngestOfferConfig"
        :key="card.label"
        class="offer__card"
        @click="()=>handleClick(card)"
      >
        <img :src="`offer/${card.photo}`" alt="" class="top-img">
        <img :src="`offer/${card.photo}`" alt="" class="bg-img">
        <span class="label">{{ card.label }}</span>
      </div>
    </div>
    <SectionTitle
      subtitle="Zajęcia dla młodszych"
    />
    <div class="offer__cards">
      <div
        v-for="card in youngerOfferConfig"
        :key="card.label"
        class="offer__card"
        @click="()=>handleClick(card)"
      >
        <img :src="`offer/${card.photo}`" alt="" class="top-img">
        <img :src="`offer/${card.photo}`" alt="" class="bg-img">
        <span class="label">{{ card.label }}</span>
      </div>
    </div>
    <SectionTitle
      subtitle="Zajęcia dla starszych"
    />
    <div class="offer__cards">
      <div
        v-for="card in olderOfferConfig"
        :key="card.label"
        class="offer__card"
        @click="()=>handleClick(card)"
      >
        <img alt="" class="top-img" src="offer/rysunek.jpg">
        <img alt="" class="bg-img" src="offer/rysunek.jpg">
        <span class="label">{{ card.label }}</span>
      </div>
    </div>

    <ModalComponent v-if="activeCard" @close-modal="activeCard=null">
      <div>{{ activeCard.desc }}</div>
    </ModalComponent>
  </div>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'
import {
  olderOfferConfig,
  youngerOfferConfig,
  youngestOfferConfig
} from '../../config/offer-config.js'
import ModalComponent from '../../components/ModalComponent.vue'

export default {
  name: 'OfferSection',
  components: {
    ModalComponent,
    SectionTitle
  },
  data () {
    return {
      youngestOfferConfig,
      youngerOfferConfig,
      olderOfferConfig,
      activeCard: null
    }
  },
  methods: {
    handleClick (el) {
      this.activeCard = el
    }
  }
}
</script>
