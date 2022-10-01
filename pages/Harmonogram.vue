<template>
  <div class="site container schedule" style="padding-top: 12vh; min-height: 100vh; ">
    <ScheduleFilter :handle-filter="handleFilter" />
    <ScheduleHeader />
    <Schedule :filtered-items="filteredItems" />
  </div>
</template>

<script>

import { scheduleConfig } from '../config/schedule.js'
import ScheduleFilter from '../components/ScheduleFilter.vue'
import ScheduleHeader from '../components/ScheduleHeader.vue'
import Schedule from '../components/Schedule.vue'

export default {
  name: 'Harmonogram',
  components: {
    Schedule,
    ScheduleHeader,
    ScheduleFilter
  },
  data () {
    return {
      scheduleConfig,
      filter: ''
    }
  },
  computed: {
    filteredItems () {
      if (this.filter) {
        return this.scheduleConfig.filter(el => el.label === this.filter)
      }
      return scheduleConfig
    }
  },
  methods: {
    handleFilter (filter) {
      this.filter = filter
    }
  }
}
</script>

<style scoped>

</style>
