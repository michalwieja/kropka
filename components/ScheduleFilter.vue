<template>
  <div>
    <button @click="handleFilter('')">
      all
    </button>
    <button @click="handleFilter('dla mlodszych')">
      mlodszych
    </button>
    <button @click="handleFilter('dla starszych')">
      starsi
    </button>
  </div>
</template>

<script>
export default {
  name: 'ScheduleFilter',
  props: ['handleFilter']
}
</script>

<style scoped>

</style>
