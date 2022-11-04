<template>
  <section id="about" class="about-section site">
    <div class="container">
      <SectionTitle subtitle="Miejsce stworzone z pasji" title="Kr pka" />
      <div class="about-section__content">
        <div>
          <div class="about-section__photo about-section__photo--1">
            foto1
          </div>
          <div class="about-section__photo about-section__photo--2">
            foto2
          </div>
        </div>
        <div>
          <div class="about-section__title">
            Pracownia artystyczna
          </div>
          <div class="about-section__text">
            To kreatywna przestrzeń na mapie Tychów. Miejsce, które powstało by pobudzać do
            artystycznego działania małych, młodych i dorosłych.
          </div>
          <div class="about-section__text">
            Chcemy pokazać, że obcowanie ze sztuką to zabawa, ale
            też, że zajęcia kreatywne mają wpływ na na różne aspekty życia ukazując jego
            wielowymiarowość. Kształtują wrażliwośc i otwierają na świat. Pobudzają do
            doświadczania, szukania rozwiązań, odkrywania nowego. Ufamy wyobraźni i chcemy by to ona
            była przewodnikiem na naszych warsztatach.
          </div>
          <div class="about-section__title">
            Kawiarnia i kącik dla rodzica
          </div>
          <div class="about-section__text">
            Kropka to też miejsce spotkań, rozmów i chilloutu.
            Ugościmy Was w naszej kawiarnii. Przytulna i kameralna przestrzeń, pyszna włoska kawa i
            oczywiście coś słodkiego - brzmi dobrze prawda?
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'

export default {
  name: 'AboutSection',
  components: { SectionTitle }
}
</script>

<style lang="scss" scoped>
.about-section {
  min-height: 100vh;
  background-color: #D1CEC7;
  padding-bottom: 10vh;

  &__content {
    display: flex;
    padding-top: 40px;
    gap: 40px;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
      flex-direction: column;
    }

    & > div:first-child {
      flex: 2;
      position: relative;
    }

    & > div:last-child {
      flex: 3;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  &__title {
    font-size: 32px;
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
  }

  &__text {
    font-size: 24px;
  }

  &__photo {

    border-radius: 50%;
    position: absolute;

    &--1 {
      background: blue;
      opacity: .1;
      width: 100px;
      height: 100px;
      top: 0;
      left: 0;
    }

    &--2 {
      background: red;
      width: 100px;
      height: 100px;
      bottom: 0;
      right: 0;
      opacity: .1;
    }
  }
}

</style>
