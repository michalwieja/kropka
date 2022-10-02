<template>
  <div class="app">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Hero',
  components: {
    Header
  }
}
</script>
