<template>
  <div id="offer" class="offer site">
    <div class="container">
      <SectionTitle subtitle="Tutaj podtytuł oferty" title="Oferta" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'

export default {
  name: 'OfferSection',
  components: { SectionTitle }
}
</script>

<style scoped>
.offer {
  min-height: 100vh;
}

</style>
