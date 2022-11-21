<template>
  <div>
    <ScheduleHeader />
    <div v-for="el in filteredItems" :key="el.label">
      <div class="schedule__group-label">
        {{ el.label }}
      </div>
      <div v-for="child in el.children" :key="child.label" class="schedule__event-row">
        <div class="schedule__event-label">
          {{ child.label }}
        </div>
        <div class="schedule__event-content">
          <div v-for="event in child.event" :key="event.hour" class="schedule__event-content-row">
            <div class="schedule__event-content-column">
              {{ event.day }}
            </div>
            <div class="schedule__event-content-column">
              {{ event.hour }}
            </div>
            <div class="schedule__event-content-column">
              {{ event.time }}
            </div>
          </div>
        </div>
        <div class="schedule__price-content">
          <div>
            <div
              class="display-900-down tooltip"
              data-tooltip="Zniżka dla rodzeństwa i przyjaciół - przyjdź z siostrą, bratem, przyjacielem, a oboje otrzymacie zniżkę na
pojedyncze zajęcia -10 zł/os."
            >
              Pojedyncze zajęcia<sup>?</sup>
            </div>
            <div>{{ `${child.singlePrice}zł` || 'ustal. indyw.' }}</div>
          </div>
          <div>
            <div
              class="display-900-down tooltip"
              data-tooltip="karnet ważny 30 dni, istnieje możliwość odrobienia zajęć w przypadku nieobecności"
            >
              Karnet (4 wejścia)<sup>?</sup>
            </div>
            <div>{{ `${child.multiPrice}zł` || 'ustal. indyw.' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  props: ['filteredItems']

}
</script>
