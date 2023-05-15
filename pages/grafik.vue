<template>
  <div class="site container schedule">
    <div v-if="loading" class="lds-dual-ring" />
    <template v-else>
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
  </div>
</template>
<script>

import vSelect from 'vue-select'
import axios from 'axios'
import dayjs from 'dayjs'
import { scheduleConfig, scheduleGroupLabel, selectLabels } from '../config/schedule.js'
import 'vue-select/dist/vue-select.css'
import SectionTitle from '../components/SectionTitle.vue'

export default {
  name: 'Grafik',
  components: {
    SectionTitle,
    vSelect
  },
  data () {
    return {
      calendar: null,
      scheduleConfig,
      scheduleGroupLabel,
      selectLabels,
      filter: '',
      loading: true,
      labels: ['Akwarele', 'Ceramika', 'Kreatywne Warsztaty Plastyczne', 'Malarstwo', 'Rysunek', 'Uważność']
    }
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
    this.getCalendar()
  },
  methods: {
    dayjs,
    async getCalendar () {
      this.loading = true
      try {
        const { data } = await axios.get('https://script.google.com/macros/s/AKfycbzSPRzBIrOpA9K4w0YurNqPEjloPZKNpUdJY1W5yappOBEMU0Z5WNs-FZC203BUudgm/exec')
        this.calendar = data.GoogleSheetData
      } catch (error) {
        alert('Coś poszło nie tak. Spróbuj później')
      }
      this.loading = false
    },
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
