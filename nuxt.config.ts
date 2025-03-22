export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/main.css'
  ],

  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/fontawesome.js' // Add the Font Awesome plugin
  ],

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxtjs-portfolio/' : '/', // Matches your repo name
    buildAssetsDir: '_nuxt'
  },

  nitro: {
    output: {
      publicDir: 'docs',
    },
    static: true,
  },

  routeRules: {
    '/**': { prerender: true }
  }
});