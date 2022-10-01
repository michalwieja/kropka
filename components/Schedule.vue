<template>
  <div>
    <div v-for="el in filteredItems" :key="el.label">
      <div class="group-label">
        {{ el.label }}
      </div>
      <div v-for="child in el.children" :key="child.label" class="event-row">
        <div class="event-label">
          {{ child.label }}
        </div>
        <div class="event-content">
          <div v-for="event in child.event" :key="event.hour" class="event-content-row">
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
