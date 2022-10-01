<template>
  <div>
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
export default {
  name: 'Schedule',
  props: ['filteredItems']
}
</script>
