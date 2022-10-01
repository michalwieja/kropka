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
        <Button label="Harmonogram" />
        <Button label="Zapisz się" />
      </div>
    </div>
    <div class="hero__photo" />
  </div>
</template>

<script>

import Button from '../components/Button.vue'

export default {
  name: 'IndexPage',
  components: { Button }
}
</script>
