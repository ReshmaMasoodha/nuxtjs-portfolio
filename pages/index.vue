<template>
  <div>
    <br>
    <HeroSection />
    <AboutMe />
    <Skills />
    <Project />
  </div>
</template>

<script>
import AboutMe from '~/components/AboutMe.vue';
import HeroSection from '~/components/HeroSection.vue';
import Skills from '~/components/Skills.vue';
import Project from '~/components/Project.vue';

export default{
  components:{
    HeroSection,
    AboutMe,
    Skills,
    Project,
  }
}
</script>

<style scoped>

</style>