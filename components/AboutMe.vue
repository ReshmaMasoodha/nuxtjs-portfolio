<template>
  <section class="about-me py-5" id="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h2 class="section-title mb-4">About Me</h2>
          <p class="about-description">
            Hi, I'm <strong>{{ name }}</strong>, a passionate web developer with experience in HTML, CSS, JavaScript, and Python. 
            I have a deep interest in frontend technologies like Bootstrap and Nuxt.js, and I am constantly expanding my skills in full-stack development. 
            I love building user-friendly and interactive websites. Currently, I am looking for opportunities to apply my knowledge and grow as a professional.
          </p>
          <p class="about-details">
            During my internships, I gained valuable experience working on real-world projects, collaborating with teams, and building modern web applications. 
            I am eager to leverage my skills in a challenging and dynamic environment.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "Reshma Masoodha M",
    }
  }
}
</script>

<style scoped>
.about-me {
  background-color: #f8f9fa; /* Light Gray */
  color: #142850; /* Dark Blue */
}

.section-title {
  color: #142850; /* Dark Blue */
  font-size: 2.5rem;
  font-weight: bold;
}

.about-description, .about-details {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #343a40; /* Darker Gray */
}
</style>
