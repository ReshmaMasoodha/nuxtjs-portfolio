export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-free/css/all.min.css',	
    '@/assets/main.css'
  ],
  
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],

  // Set the base URL for GitHub Pages (This should match your repo name!)
  router: {
    base: '/nuxtjs-portfolio/'
  },

  // Tell Nuxt to output files to the docs folder
  nitro: {
    output: {
      publicDir: 'docs'
    }
  }
})
