<template>
  <div class="site">
    <div id="s1" ref="s1" class="section">
      <div class="hero">
        <div class="buuble">
          <p>Pracownia artystyczna</p>
          <p>
            Miejsce dla dzieci<br> i dorosłych
          </p>
        </div>
      </div>
    </div>
    <div id="s2" ref="s2" class="section container column">
      <ContentWithImage filename="rysunek.jpg" style="padding-top: 5vh" title="Grafika">
        <div class="text">
          <p>
            GRAFIKA - to interdyscyplinarne zajęcia dla wszystkich, którzy lubią wielość i&nbsp;różnorodność.
            Uczestnicy poznają różne techniki graficzne, mieszane, wzornicze oraz
            sztukę kompozycji.
          </p>
          <p>
            Wielość metod i&nbsp;technik takich jak linoryt, ryt w&nbsp;tekturze, w&nbsp;tworzywach
            miękkich,
            odbijanie, cyjanotypia, płaskorzeźba w połączeniu z&nbsp;warsztatem pracy różnych
            artystów-prowadzących to obietnica artystycznej przygody i&nbsp;wspaniałych efektów
            twórczej
            pracy.
          </p>
        </div>
      </ContentWithImage>
      <ContentWithImage filename="rysunek.jpg" reverse style="padding-top: 5vh" title="Grafika">
        <div class="text">
          <p>
            GRAFIKA - to interdyscyplinarne zajęcia dla wszystkich, którzy lubią wielość i&nbsp;różnorodność.
            Uczestnicy poznają różne techniki graficzne, mieszane, wzornicze oraz
            sztukę kompozycji.
          </p>
          <p>
            Wielość metod i&nbsp;technik takich jak linoryt, ryt w&nbsp;tekturze, w&nbsp;tworzywach
            miękkich,
            odbijanie, cyjanotypia, płaskorzeźba w połączeniu z&nbsp;warsztatem pracy różnych
            artystów-prowadzących to obietnica artystycznej przygody i&nbsp;wspaniałych efektów
            twórczej
            pracy.
          </p>
        </div>
      </ContentWithImage>
    </div>
    <div id="s3" ref="s3" class="section">
      <h1>
        section 3
      </h1>
      <div />
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import ContentWithImage from '../components/ContentWithImage.vue'

const bgColors = {
  s1: '#ddd',
  s2: 'rgba(95,118,108,0.6)',
  s3: 'rgba(95,118,108,0.9)'
}

export default {
  name: 'IndexPage',
  components: { ContentWithImage },
  data () {
    return {
      activeId: ''
    }
  },
  destroyed () {
  },
  mounted () {
    this.onElementObserved()
    this.heroAnimation()
    console.log(Object.keys(this.$refs))
    console.log(this.$refs.s1)
  },
  methods: {
    heroAnimation () {
      anime.timeline({
        autoplay: true,
        direction: 'alternate',
        loop: false
      })
        .add({
          targets: '.h1',
          translateX: ['100%', 0],
          opacity: [0, 1],
          duration: 1000
        })
        .add({
          targets: '.h2',
          translateX: ['100%', 0],
          opacity: [0, 1],
          duration: 1000
        })
        .add({
          targets: '.dot',
          translateX: ['100%', 0],
          opacity: [0, 1],
          duration: 1000
        })
    },
    onElementObserved () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeId = entry.target.id
            window.document.body.style.backgroundColor = bgColors[this.activeId]
          }
        })
      }, { threshold: 0.8 })
      observer.observe(this.$refs.s1)
      observer.observe(this.$refs.s2)
      observer.observe(this.$refs.s3)
    },
    imageObserver () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeId = entry.target.id
            window.document.body.style.backgroundColor = bgColors[this.activeId]
          }
        })
      }, { threshold: 0.8 })
      observer.observe(this.$refs.s1)
      observer.observe(this.$refs.s2)
      observer.observe(this.$refs.s3)
    }
  }
}
</script>
