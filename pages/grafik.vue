<template>
  <div class="site container schedule">
    <SectionTitle subtitle="Kiedy do nas zajrzysz?" title="Grafik" />
    <div class="select-wrapper">
      <v-select
        v-model="filter"
        :options="selectLabels"
        :searchable="false"
        class="style-chooser"
        placeholder="Wybierz grupę"
      />
    </div>
    <!--    <ScheduleFilter :handle-filter="handleFilter" />-->
    <Schedule :filtered-items="filteredItems" />
  </div>
</template>

<script>

import vSelect from 'vue-select'
import { scheduleConfig, scheduleGroupLabel, selectLabels } from '../config/schedule.js'
import Schedule from '../components/Schedule.vue'
import 'vue-select/dist/vue-select.css'
import SectionTitle from '../components/SectionTitle.vue'

export default {
  name: 'Grafik',
  components: {
    SectionTitle,
    Schedule,
    // ScheduleFilter,
    vSelect

  },
  data () {
    return {
      scheduleConfig,
      scheduleGroupLabel,
      selectLabels,
      filter: ''
    }
  },
  computed: {
    filteredItems () {
      if (this.filter) {
        return this.scheduleConfig.filter(el => el.label === scheduleGroupLabel[this.filter.key])
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

<style lang="scss">
.select-wrapper {
  max-width: 300px;

  @media (max-width: 1200px) {
    max-width: 100%
  }
}

</style>
