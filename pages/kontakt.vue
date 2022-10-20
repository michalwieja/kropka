<template>
  <div class="site container contact">
    <h1>
      zobacz gdzie nas znaleźć
    </h1>
    <div class="contact__wrapper">
      <div class="contact__box contact__box--map">
        <GmapMap
          :center="{lat:10, lng:10}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
        />
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
            kaart.kontakt@gmail.com
          </h3>
        </div>
        <div class="contact__row">
          <PhoneIcon height="32" />
          <h3>690 398 893</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeIcon from '../components/icons/HomeIcon.vue'
import EmailIcon from '../components/icons/EmailIcon.vue'
import PhoneIcon from '../components/icons/PhoneIcon.vue'

export default {
  name: 'Kontakt',
  components: {
    PhoneIcon,
    EmailIcon,
    HomeIcon
  }
}
</script>
