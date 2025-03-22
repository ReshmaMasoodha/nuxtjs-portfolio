export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    '@/assets/main.css'
  ],

  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxtjs-portfolio/' : '/', // ✅ Matches your repo name
    buildAssetsDir: '_nuxt' // 🔹 Default is fine
  },

  nitro: {
    output: {
      publicDir: 'docs', // ✅ Output folder for GitHub Pages
    },
    static: true, // ✅ Ensure static assets are copied to the output folder
  },

  routeRules: {
    '/**': { prerender: true } // ✅ Ensures all pages are pre-rendered
  }
});