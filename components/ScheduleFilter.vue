<template>
  <div class="schedule__filter">
    <CustomButton :handle-click="()=>handleFilter('')" class="button" label="Wszystko" />
    <CustomButton
      v-for="(v,k) in scheduleGroupLabel"
      :key="k"
      :handle-click="()=>handleFilter(k)"
      :label="v"
    />
  </div>
</template>

<script>
import { scheduleGroupLabel } from '../config/schedule.js'
import CustomButton from './CustomButton.vue'

export default {
  name: 'ScheduleFilter',
  components: { CustomButton },
  props: ['handleFilter'],
  data () {
    return {
      scheduleGroupLabel
    }
  }
}
</script>
