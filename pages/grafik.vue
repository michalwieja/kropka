<template>
  <div class="site container schedule">
    <h2>Harmonogram</h2>
    <ScheduleFilter :handle-filter="handleFilter" />
    <Schedule :filtered-items="filteredItems" />
  </div>
</template>

<script>

import { scheduleConfig, scheduleGroupLabel } from '../config/schedule.js'
import ScheduleFilter from '../components/ScheduleFilter.vue'
import Schedule from '../components/Schedule.vue'

export default {
  name: 'Grafik',
  components: {
    Schedule,
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
        return this.scheduleConfig.filter(el => el.label === scheduleGroupLabel[this.filter])
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
