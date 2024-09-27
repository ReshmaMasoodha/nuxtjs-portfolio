// plugins/bootstrap.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
})
