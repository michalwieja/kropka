<template>
  <div class="site container">
    <SectionTitle subtitle="Zobacz co u nas" title="Galeria" />
    <CoolLightBox
      :effect="'fade'"
      :full-screen="true"
      :index="index"
      :items="parsed"
      :use-zoom-bar="true"
      slideshow-color-bar="#ffffff"
      @close="index = null"
    />
    <div class="gallery">
      <div
        v-for="(el,i) in parsed"
        :key="i"
        :class="`gallery__img-wrapper ${i%5 ===0 && 'big'} ${i%2===0 &&'horizontal'}`"
        data-aos="fade-in"
        data-aos-duration="1000"
        @click="index =i"
      >
        <img :src="`${el}`" class="gallery__img" loading="lazy" @load="handleLoad">
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
      index: null,
      parsed: null
    }
  },
  mounted () {
    this.parsed = this.files.map(file => `/gallery/${file}`)
  },
  methods: {
    handleLoad () {
      console.log('load')
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

  &__img-wrapper {
    background: #000;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: .3s;

    &:hover {
      transform: scale(1.05);
    }
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
