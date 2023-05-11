<template>
  <div id="offer" class="offer site">
    <div class="container">
      <SectionTitle
        subtitle="Zajęcia dla Szkół"
        title="Oferta"
      />
      <div class="offer__cards">
        <div
          v-for="(card,i) in activities"
          :key="card.label"
          :data-aos-delay="`${i*100}`"
          class="offer__card"
          data-aos="fade-left"
          @click="()=>handleClick(card)"
        >
          <img :src="`offer/${card.photo}`" alt="" class="top-img">
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
        <h3>{{ activeCard.price }} / {{ activeCard.duration }}</h3>
        <h4>{{ activeCard.priceNote }}</h4>
      </ModalComponent>
    </div>
  </div>
</template>

<script>
import { activities } from '@/config/offer-config.js'
import SectionTitle from '@/components/SectionTitle.vue'
import ModalComponent from '@/components/ModalComponent.vue'

export default {
  name: 'OfferSection',
  components: {
    ModalComponent,
    SectionTitle

  },
  data () {
    return {
      activities,
      activeCard: null
    }
  },
  methods: {
    handleClick (el) {
      if (!el.disabled) { this.activeCard = el }
    }
  }
}

</script>
