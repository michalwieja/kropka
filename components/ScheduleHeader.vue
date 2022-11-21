<template>
  <div class="schedule__header">
    <div style="flex:3">
      Zajęcia
    </div>
    <div style="flex: 1">
      Dzień
    </div>
    <div style="flex: 1">
      Godziny
    </div>
    <div style="flex: 1">
      Czas trwania
    </div>
    <div style="flex: 2; display:flex; gap: 16px; position:relative;">
      <div
        class="tooltip"
        data-tooltip="Zniżka dla rodzeństwa i przyjaciół - przyjdź z siostrą, bratem, przyjacielem, a oboje otrzymacie zniżkę na
pojedyncze zajęcia -10 zł/os."
      >
        Pojedyncze zajęcia<sup>?</sup>
      </div>
      <div
        class="tooltip"
        data-tooltip="karnet ważny 30 dni, istnieje możliwość odrobienia zajęć w przypadku nieobecności"
      >
        Karnet (4&nbsp;wejścia)<sup>?</sup>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleHeader'
}
</script>
