<template>
  <div :class="{secondary}" class="button" @click="handleClick">
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['label', 'handleClick', 'secondary']
}
</script>
