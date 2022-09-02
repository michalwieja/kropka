<template>
  <div class="site">
    <div id="s1" ref="s1" class="section">
      <div class="hero">
        <div class="text">
          <h1 class="h1">
            KROPKA
          </h1>
          <h2 class="h2">
            Pracownia artystyczna
          </h2>
        </div>
        <div class="dot" />
      </div>
    </div>
    <div id="s2" ref="s2" class="section">
      <h1>
        section 2
      </h1>
    </div>
    <div id="s3" ref="s3" class="section">
      <h1>
        section 3
      </h1>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

const bgColors = {
  s1: '#ddd',
  s2: 'rgba(95,118,108,0.6)',
  s3: 'rgba(95,118,108,0.9)'
}

export default {
  name: 'IndexPage',
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
    }
  }
}
</script>
