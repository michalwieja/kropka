<template>
  <div class="site container">
    <section>
      <div class="text-wrapper">
        1
      </div>
      <div class="image-wrapper" />
    </section>
    <section>
      <div class="text-wrapper">
        s2
      </div>
      <div class="image-wrapper " />
    </section>
    <section>
      <div>s3</div>
      <div class="image-wrapper" />
    </section>
    <section>
      <div>s4</div>
      <div class="image-wrapper" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data () {
    return { active: false }
  },
  mounted () {
    this.observe()
  },
  methods: {
    handleClick () {
      console.log('klik')
      this.active = !this.active
    },
    observe () {
      const images = document.querySelectorAll('.image-wrapper')

      const callback = (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      }

      const imageObserver = new IntersectionObserver(callback, { threshold: 0.2 })

      images.forEach(image => imageObserver.observe(image))
    }
  }
}
</script>

<style scoped>
section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-wrapper {
  flex: 1;
  background-color: #ddd;
}

.image-wrapper {
  position: relative;
  height: 40%;
  width: 1px;
  overflow: hidden;
  opacity: 0;

}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 40vw;
  height: 100%;
  background-color: black;
  background-size: cover;
  background-position: center;
  transform: scale(1.6);
  filter: grayscale(100%);
}

.image-wrapper.active {
  width: 40vw;
  opacity: 1;
  transition: opacity 0s, width 2s;
}

.image-wrapper.active > .image {
  transform: scale(1);
  transition: 1s ease-out;
}

</style>
