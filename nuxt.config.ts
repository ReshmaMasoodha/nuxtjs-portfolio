// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css:[
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-free/css/all.min.css',	
    '@/assets/main.css'
  ],
  
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
    
  ],
})
