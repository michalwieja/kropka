<template>
  <header :class="{'active' : scrollPos > 0}" class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>
      <nav class="nav">
        <div
          :class="{'nav-active':navActive}"
          class="nav__links"
        >
          <div
            v-for="link in menuLinks"
            :key="link.name"
            @click="navActive=false"
          >
            <NuxtLink :to="link.path" class="nav__link">
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
        <div :class="{toggle:navActive}" class="burger" @click="handleBurgerClick">
          <div class="burger__line" />
          <div class="burger__line" />
          <div class="burger__line" />
        </div>
      </nav>
    </div>
  </header>
</template>
<script>

import anime from 'animejs'
import menuLinks from '../config/menu.js'

export default {
  name: 'Header',
  components: {
    // Logo
  },
  props: {
    transparent: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menuLinks,
      scrollPos: 0,
      navActive: false
    }
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleBurgerClick () {
      this.mobileNavAnimation()
      this.navActive = !this.navActive
    },

    mobileNavAnimation () {
      anime.timeline({ easing: 'linear' })
        .add({
          targets: '.nav__links',
          translateX: this.navActive ? [0, '100%'] : ['100%', 0],
          duration: 1000
        })
        .add({
          targets: '.nav__link',
          opacity: this.navActive ? [1, 0] : [0, 1],
          delay: anime.stagger(100),
          duration: 1000
        })
    },

    handleScroll () {
      this.scrollPos = window.scrollY
    }
  }
}
</script>
