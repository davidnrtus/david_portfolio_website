// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    'nuxt-icons',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    config: {
      theme: {
        container: {
          center: true
        },
        extend: {
          colors: {
            primary: {
              cyan: "#2de2ff",
              gray: "#b8bfd3",
              text: "#f5f7ff"
            }
          }
        }
      }
    },
  }
})