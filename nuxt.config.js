export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: '0.0.0.0',
    port: 8000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kropka - Pracownia artystyczna i kawiarnia',
    htmlAttrs: {
      lang: 'pl'
    },
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-06R5K8E3DT',
        async: true
      },
      {
        src: 'https://kropka.art/ga.js'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'To kreatywna przestrzeń na mapie Tychów. Miejsce, które powstało by pobudzać do artystycznego działania małych, młodych i dorosłych.'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Kropka. Pracownia artystyczna'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'To kreatywna przestrzeń na mapie Tychów. Miejsce, które powstało by pobudzać do artystycznego działania małych, młodych i dorosłych.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/image1200x630.jpg'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue2-google-maps.js',
      ssr: true
    },
    {
      src: '~/plugins/aos',
      ssr: false
    },
    {
      src: '~/plugins/graphcms'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    'nuxt-animejs',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dayjs'
  ],
  dayjs: {
    locales: ['pl'],
    defaultLocale: 'pl',
    plugins: ['relativeTime', 'advancedFormat']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  }
}
