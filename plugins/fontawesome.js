import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export default defineNuxtPlugin((nuxtApp) => {
  // This is important, we are telling FontAwesome to use svg with javascript.
  // In order to avoid conflicts with css.
  config.autoAddCss = false;

  // Add icons to the library
  library.add(fas, fab);

  // Register the FontAwesomeIcon component globally
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
