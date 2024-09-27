<template>
  <section class="hero">
    <div class="container">
        <h1 class="text-light">Reshma Masoodha M</h1>
        <h2>Aspiring  Web Developer</h2>
      <p>Passionate about creating user-centric experiences.</p>
      <nuxt-link to="/projects" class="btn btn-primary">View My Work</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  height: 100vh;
  background: url('C:\Users\laura\PersonalPortfolio\assets\codesnippet2.jpg') no-repeat center center/cover;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>