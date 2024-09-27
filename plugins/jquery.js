// plugins/jquery.js
import { defineNuxtPlugin } from '#app';
import $ from 'jquery';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('jquery', $);
});
