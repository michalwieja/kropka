<template>
  <div class="site container schedule">
    <SectionTitle subtitle="Kiedy do nas zajrzysz?" title="Grafik" />
    <div class="select-wrapper">
      <v-select
        v-model="filter"
        :options="labels"
        :searchable="false"
        class="style-chooser"
        placeholder="Wybierz grupę"
      />
    </div>
    <div v-for="(date, key) in groupByDate(filteredItems)" :key="date.key">
      <div class="schedule__group-label">
        {{ $dayjs(key).format('DD MMMM YYYY') }}, {{ date[0].dayOfWeek }}
      </div>
      <div v-for="event in date" :key="event.id" class="schedule__event-row">
        <div style="flex: 1">
          <span class="schedule__event-label">
            {{ event.summary }}
          </span>
          <span>{{ event.desc }}</span>
        </div>
        <div>
          {{ `${event.startHour} - ${event.endHour}` }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import vSelect from 'vue-select'
import { scheduleConfig, scheduleGroupLabel, selectLabels } from '../config/schedule.js'
import 'vue-select/dist/vue-select.css'
import SectionTitle from '../components/SectionTitle.vue'
import calendar from '../calendar.json'
import parsed from '../parsed.json'

export default {
  name: 'Grafik',
  components: {
    SectionTitle,
    vSelect
  },
  data () {
    return {
      calendar,
      parsed,
      scheduleConfig,
      scheduleGroupLabel,
      selectLabels,
      filter: '',
      labels: ['Akwarele', 'Ceramika', 'Kreatywne Warsztaty Plastyczne', 'Malarstwo', 'Rysunek', 'Uważność']
    }
  },
  computed: {
    filteredItems () {
      if (this.filter) {
        return this.parsed.filter(el => el.summary.includes(this.filter))
      }
      return this.parsed
    }
  },
  methods: {
    groupByDate (events) {
      return events.reduce((result, event) => {
        const date = event.date
        if (!result[date]) {
          result[date] = []
        }
        result[date].push(event)
        return result
      }, {})
    }
  }
}
</script>

<style lang="scss">
.select-wrapper {
  max-width: 333px;

  @media (max-width: 1200px) {
    max-width: 100%
  }
}

</style>
