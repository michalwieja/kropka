<template>
  <div class="schedule__filter">
    <Button :handle-click="()=>handleFilter('')" class="button" label="wszystko" />
    <Button
      v-for="(v,k) in scheduleGroupLabel"
      :key="k"
      :handle-click="()=>handleFilter(k)"
      :label="v"
    />
  </div>
</template>

<script>
import { scheduleGroupLabel } from '../config/schedule.js'

export default {
  name: 'ScheduleFilter',
  props: ['handleFilter'],
  data () {
    return {
      scheduleGroupLabel
    }
  }
}
</script>
