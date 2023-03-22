<template>
  <div class="site container contact">
    <section-title subtitle="zobacz gdzie nas znaleźć" title="Kontakt" />

    <div class="contact__wrapper">
      <div class="contact__box contact__box--map">
        <GmapMap
          :center="{ lat: 50.13107051042874,
                     lng: 18.978761442401552 }"
          :options="mapStyle"
          :zoom="15"
          style="width:100%;  height: 100%;"
        >
          <GmapMarker
            v-for="(m, index) in markers"
            :key="index"
            :clickable="true"
            :draggable="true"
            :position="getPosition(m)"
            @click="center=m.position"
          />
        </GmapMap>
      </div>
      <div class="contact__box contact__box--info">
        <h2>Dane kontaktowe</h2>
        <div class="contact__row">
          <HomeIcon height="32" />
          <h3>Damrota 53, Tychy, 43-100</h3>
        </div>
        <div class="contact__row">
          <EmailIcon height="32" />
          <h3>
            <a href="mailto:kontakt@kropka.art">
              kontakt@kropka.art
            </a>
          </h3>
        </div>
        <div class="contact__row">
          <PhoneIcon height="32" />
          <h3>
            <a href="tel:690 398 893">690 398 893</a>
          </h3>
        </div>
        <h2>Godziny otwarcia</h2>
        <h3>Wtorek 16:00-20:00</h3>
        <h3>Piątek 16:00-20:00</h3>
        <h3>Sobota i Niedziela 10:00-19:00</h3>
      </div>
    </div>
  </div>
</template>

<script>
import HomeIcon from '../components/icons/HomeIcon.vue'
import EmailIcon from '../components/icons/EmailIcon.vue'
import PhoneIcon from '../components/icons/PhoneIcon.vue'
import SectionTitle from '../components/SectionTitle.vue'
import mapComponentConfig from '../config/mapComponentConfig.js'

export default {
  name: 'Kontakt',
  components: {
    SectionTitle,
    PhoneIcon,
    EmailIcon,
    HomeIcon

  },
  data () {
    return {
      mapStyle: mapComponentConfig,
      markers: {
        0: {
          full_name: 'KROPKA Pracownia Artystyczna. Kawiarnia.',
          lat: 50.13107051042874,
          lng: 18.978761442401552
        }
      }
    }
  },
  methods: {
    getPosition (marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      }
    }
  }
}
</script>
