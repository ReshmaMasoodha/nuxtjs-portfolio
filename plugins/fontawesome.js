import Vue from 'vue';
  import { library, config } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { fab } from '@fortawesome/free-brands-svg-icons';

  // This is important, we are telling FontAwesome to use svg with javascript.
  // In order to avoid conflicts with css.
  config.autoAddCss = false;

  library.add(fas, fab);

  Vue.component('font-awesome-icon', FontAwesomeIcon);