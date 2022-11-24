<template>
  <div class="site container">
    <SectionTitle subtitle="Zobacz co u nas" title="Galeria" />
    <CoolLightBox
      :effect="'fade'"
      :full-screen="true"
      :index="index"
      :items="files"
      :use-zoom-bar="true"
      slideshow-color-bar="#ffffff"
      @close="index = null"
    />
    <div class="gallery">
      <div
        v-for="(el,i) in files"
        :key="i"
        :class="`gallery__img-wrapper ${i%5 ===0 && 'big'} ${i%2===0 &&'horizontal'}`"
        @click="()=>handleClick(i)"
      >
        <img :src="`offer/${el}`" class="gallery__img">
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import CoolLightBox from 'vue-cool-lightbox'
import files from '../galleryConfig.json'

export default {
  name: 'Galeria',
  components: { CoolLightBox },
  data () {
    return {
      files,
      index: null
    }
  },
  methods: {
    handleClick (i) {
      console.log(i)
    }
  }
}
</script>

<style lang="scss">

.gallery {
  padding-top: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
  grid-auto-rows: 260px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 120px;

  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 20px;
    overflow: hidden;
  }

  .horizontal {
    grid-column: span 2;
  }

  .vertical {
    grid-row: span 2;
  }

  .big {
    grid-column: span 2;
    grid-row: span 2;
  }
}

</style>
