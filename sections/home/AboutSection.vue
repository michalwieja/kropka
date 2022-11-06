<template>
  <section id="about" class="about-section site">
    <div class="container">
      <SectionTitle subtitle="Miejsce stworzone z pasji" title="Kr pka" />
      <div class="about-section__content">
        <div>
          <div class="about-section__photo about-section__photo--1">
            <img alt="rysunek" src="/offer/rysunek.jpg">
          </div>

          <div class="about-section__photo about-section__photo--2">
            <img alt="rysunek" src="/offer/rysunek.jpg">
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
