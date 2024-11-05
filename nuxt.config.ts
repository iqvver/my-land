export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
      baseURL: '/',
  },

  components: [
      {
          path: '~/components',
          extensions: ['.vue'],
      },
  ],

  css: ['assets/global.css'],
  compatibilityDate: '2024-11-05',
})