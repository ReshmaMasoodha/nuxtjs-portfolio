<template>
    <div>
      <Navbar />
      <NuxtPage />
      <Footer />

    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import NuxtPage from '@/pages/index.vue';

  export default {
    components: {
      Navbar,
      NuxtPage,
      Footer
    }
  }
  </script>
  