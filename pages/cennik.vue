<template>
  <div class="site container price-list">
    <h2>Cennik</h2>
    <div>
      <div class="price-list__header">
        <div>Zajęcia</div>
        <div>Czas trwania</div>
        <div
          class="tooltip"
          data-tooltip="Zniżka dla rodzeństwa i przyjaciół - przyjdź z siostrą, bratem, przyjacielem, a oboje otrzymacie zniżkę na
pojedyncze zajęcia -10 zł/os."
        >
          Pojedyncze zajęcia<sup> ?</sup>
        </div>
        <div
          class="tooltip"
          data-tooltip="karnet ważny 30 dni, istnieje możliwość odrobienia zajęć w przypadku nieobecności"
        >
          Karnet (4 wejścia)<sup> ?</sup>
        </div>
      </div>
      <div v-for="(events,key) in priceListConfig" :key="key">
        <div class="price-list__group">
          {{ key }}
        </div>
        <div v-for="(event,index) in events" :key="index" class="price-list__event">
          <div>{{ event.label }}</div>
          <div>{{ event.time }} godz</div>
          <div>
            {{ event.singlePrice }} <span v-if="typeof event.singlePrice === 'number'">zł</span>
          </div>
          <div v-if="event.passPrice">
            {{ event.passPrice }} zł
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { priceListConfig } from '../config/price-list.js'

export default {
  name: 'Cennik',
  data () {
    return { priceListConfig }
  }
}
</script>
