<template>
  <div id="offer" class="offer site">
    <div class="container">
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
          <span class="label">
            {{ card.label }}
          </span>
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
          <span class="label">
            {{ card.label }}
          </span>
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
          <img :src="`offer/${card.photo}`" alt="" class="top-img">
          <img :src="`offer/${card.photo}`" alt="" class="bg-img">
          <span class="label">
            {{ card.label }}
          </span>
        </div>
      </div>
      <SectionTitle
        subtitle="Zajęcia dla wszystkich"
      />
      <div class="offer__cards">
        <div
          v-for="card in allOfferConfig"
          :key="card.label"
          class="offer__card"
          @click="()=>handleClick(card)"
        >
          <img :alt="card.label" :src="`offer/${card.photo}`" class="top-img">
          <img :alt="card.label" :src="`offer/${card.photo}`" class="bg-img">
          <span class="label">
            {{ card.label }}
          </span>
        </div>
      </div>

      <ModalComponent v-if="activeCard" @close-modal="activeCard=null">
        <div class="photo" style="border-radius: 20px; overflow: hidden">
          <img
            :src="`offer/${activeCard.photo}`"
            alt="tło"
            class="offer__modal-img"
          >
        </div>
        <h2>{{ activeCard.label }}</h2>
        <h3>{{ activeCard.desc }}</h3>
      </ModalComponent>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'
import ModalComponent from '../../components/ModalComponent.vue'
import {
  allOfferConfig,
  olderOfferConfig,
  youngerOfferConfig,
  youngestOfferConfig
} from '../../config/offer-config.js'

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
      allOfferConfig,
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
