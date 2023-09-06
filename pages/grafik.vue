<template>
  <div class="site container schedule">
    <no-ssr>
      <div v-if="$fetchState.pending" class="lds-dual-ring" />
      <p v-else-if="$fetchState.error">
        Coś poszło nie tak - spróbuj później
      </p>
      <template v-else>
        <SectionTitle subtitle="Kiedy do nas zajrzysz?" title="Grafik" />
        <div v-for="(date, key) in groupByDate(filteredItems)" :key="date.key">
          <div class="schedule__group-label">
            {{ $dayjs(key).format('DD MMMM YYYY') }}, {{ dayjs(date[0].date).format('dddd') }}
          </div>
          <div v-for="event in date" :key="event.id" class="schedule__event-row">
            <div style="flex: 1">
              <span class="schedule__event-label">
                {{ event.title }}
              </span>
              <span>{{ event.desc }}</span>
            </div>
            <div>
              {{ `${dayjs(event.start).format('HH:mm')} - ${dayjs(event.end).format('HH:mm')}` }}
            </div>
          </div>
        </div>
      </template>
    </no-ssr>
  </div>
</template>
<script>

import dayjs from 'dayjs'
import { scheduleConfig, scheduleGroupLabel, selectLabels } from '../config/schedule.js'
import 'vue-select/dist/vue-select.css'
import SectionTitle from '../components/SectionTitle.vue'

export default {
  name: 'Grafik',
  components: {
    SectionTitle
  },
  data () {
    return {
      calendar: null,
      scheduleConfig,
      scheduleGroupLabel,
      selectLabels,
      filter: '',
      labels: ['Akwarele', 'Ceramika', 'Kreatywne Warsztaty Plastyczne', 'Malarstwo', 'Rysunek', 'Uważność']
    }
  },
  async fetch () {
    const { GoogleSheetData } = await fetch('https://script.google.com/macros/s/AKfycbzSPRzBIrOpA9K4w0YurNqPEjloPZKNpUdJY1W5yappOBEMU0Z5WNs-FZC203BUudgm/exec').then(res => res.json())
    this.calendar = GoogleSheetData
  },
  computed: {
    filteredItems () {
      const currentItems = this.calendar?.filter(el => dayjs(el.date).isAfter(dayjs().subtract(1, 'days')))
      if (this.filter) {
        return currentItems?.filter(el => el.title.includes(this.filter))
      }
      return currentItems?.filter(el => dayjs(el.date).isAfter(dayjs().subtract(1, 'days')))
    }
  },
  created () {
    this.$fetch()
  },
  methods: {
    dayjs,
    groupByDate (events) {
      return events?.reduce((result, event) => {
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
