<template>
  <div class="hero">
    <div class="hero__text">
      <div class="hero__title">
        Pracownia artystyczna
      </div>
      <div class="hero__subtitle">
        miejsce dla dzieci i&nbsp;dorosłych
      </div>
      <div class="hero__buttons">
        <CustomButton label="grafik" secondary />
        <CustomButton label="zapisz się" />
      </div>
    </div>
    <div class="hero__photo" />
  </div>
</template>

<script>

import CustomButton from '../components/CustomButton.vue'

export default {
  name: 'IndexPage',
  components: { CustomButton },
  layout: 'hero'

}
</script>
