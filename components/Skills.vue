<template>
  <section class="skills-section py-5" id="skills">
    <div class="container">
      <h2 class="section-title text-center mb-5">Skills</h2>
      <div class="row">
        <div class="col-6 col-md-4 text-center mb-4" v-for="skill in skills" :key="skill.name">
          <i :class="skill.icon + ' skill-icon'"></i>
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
        { name: 'Nuxt.js', icon: 'fas fa-cogs' } // Using a generic icon for Nuxt.js
      ]
    }
  }
}
</script>

<style scoped>
.skills-section {
  background-color: #f8f9fa;
}
.section-title {
  font-size: 2.5rem;
  font-weight: bold;
}
.skill-icon {
  font-size: 3rem;
  color: #007bff;
}
</style>
