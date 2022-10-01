<template>
  <button class="button" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['label', 'handleClick']
}
</script>

<style lang="scss" scoped>

</style>
