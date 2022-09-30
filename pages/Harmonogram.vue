<template>
  <div class="site container" style="padding-top: 12vh; min-height: 100vh; ">
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
      <button @click="handleFilter('wtorek')">
        wtorek
      </button>
    </div>
    <div style="display: flex">
      <div style="flex:2">
        zajecia
      </div>
      <div style="flex: 1">
        dzien
      </div>
      <div style="flex: 1">
        godziny
      </div>
      <div style="flex: 1">
        czas trwania
      </div>
    </div>
    <div v-for="el in filteredItems" :key="el.label">
      <h1 style="flex:2; background: red">
        {{ el.label }}
      </h1>
      <div v-for="child in el.children" :key="child.label" style="display: flex;">
        <div style="flex:2; background: coral">
          {{ child.label }}
        </div>
        <div style="flex: 3">
          <div v-for="event in child.event" :key="event.hour" style="display: flex">
            <div style="flex: 1">
              {{ event.day }}
            </div>
            <div style="flex: 1">
              {{ event.hour }}
            </div>
            <div style="flex: 1">
              {{ event.time }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const config = [{
  label: 'dla mlodszych',
  children: [{
    label: 'malarstwo',
    event: [{
      day: 'wtorek',
      hour: '16:30-17:30',
      time: '1.0 godz'
    }]
  },
  {
    label: 'szkola rysunku',
    event: [{
      day: 'wtorek',
      hour: '17:45-18:45',
      time: '1.0 godz'
    }, {
      day: 'sroda',
      hour: '09:00-10:00',
      time: '1.0 godz'
    }]
  }]
},
{
  label: 'dla starszych',
  children: [{
    label: 'malarstwo',
    event: [{
      day: 'wtorek',
      hour: '17:45-18:45',
      time: '1.5 godz'
    }]
  }
  ]
}]

const config2 = [
  {
    label: 'dla mlodszych',
    id: 1
  },
  {
    label: 'dla starszych',
    id: 2
  },
  {
    label: 'dla wszystkich',
    id: 3
  },
  {
    label: 'muzyka',
    id: 4
  },
  {
    label: 'malarstwo',
    hour: '16:30-17:30',
    time: '1,0h',
    day: 'wtorek',
    id: 5,
    parent: 1
  },
  {
    label: 'rysunek',
    hour: '17:45-18:45',
    time: '1,0h',
    day: 'wtorek',
    id: 6,
    parent: 1
  },
  {
    label: 'rysunek',
    hour: '09:00-10:00',
    time: '1,0h',
    day: 'sroda',
    id: 7,
    parent: 1
  },
  {
    label: 'malarstwo',
    hour: '17:45-19:15',
    time: '1,5h',
    day: 'wtorek',
    id: 8,
    parent: 2
  }
]

const tree = config2.filter(el => !el.parent)
  .map(parent => ({
    ...parent,
    children: config2.filter(el => el.parent === parent.id)
  }))

const grouped = tree.map(el => ({
  ...el,
  children: el.children.reduce((el, product) => {
    const { day } = product
    el[day] = el[day] ?? []
    el[day].push(product)
    return el
  }, {})
}))

console.log(grouped)
export default {
  name: 'Harmonogram',
  data () {
    return {
      config,
      filter: ''
    }
  },
  computed: {
    filteredItems () {
      if (this.filter) {
        return this.config.filter(el => el.children.event.map(event => event.day === this.filter))
      }
      return config
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
