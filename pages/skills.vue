<template>
  <section class="skills-section py-5">
    <br>
    <div class="container">
      <h2 class="section-title text-center mb-4">Skills</h2>

      <!-- Frontend Skills -->
      <div class="row mb-5">
        <div class="col-12">
          <h3 class="text-center mb-3">Frontend Skills</h3>
        </div>
        <div class="col-md-3 text-center">
          <i class="fab fa-html5 skill-icon"></i>
          <p>HTML5</p>
        </div>
        <div class="col-md-3 text-center">
          <i class="fab fa-css3-alt skill-icon"></i>
          <p>CSS3</p>
        </div>
        <div class="col-md-3 text-center">
          <i class="fab fa-js skill-icon"></i>
          <p>JavaScript</p>
        </div>
        <div class="col-md-3 text-center">
          <i class="fab fa-vuejs skill-icon"></i>
          <p>Nuxt.js</p>
        </div>
      </div>

      <!-- Backend Skills -->
      <div class="row mb-5">
        <div class="col-12">
          <h3 class="text-center mb-3">Backend Skills</h3>
        </div>
        <div class="col-md-3 text-center">
          <i class="fas fa-database skill-icon"></i>
          <p>Database Management</p>
        </div>
        <div class="col-md-3 text-center">
          <i class="fab fa-java skill-icon"></i>
          <p>Java</p>
        </div>
        <div class="col-md-3 text-center">
          <i class="fab fa-python skill-icon"></i>
          <p>Python</p>
        </div>
        <div class="col-md-3 text-center">
          <i class="fas fa-server skill-icon"></i>
          <p>ASP.NET</p>
        </div>
      </div>

      <!-- Tools -->
      <div class="row mb-5">
        <div class="col-12">
          <h3 class="text-center mb-3">Tools</h3>
        </div>
        <div class="col-md-3 text-center">
          <i class="fab fa-bootstrap skill-icon"></i>
          <p>Bootstrap</p>
        </div>
        <div class="col-md-3 text-center">
    <i class="fas fa-laptop-code skill-icon"></i>
    <p>Microsoft Office</p>
  </div>
        <div class="col-md-3 text-center">
          <i class="fab fa-java skill-icon"></i> <!-- Placeholder for Spring Boot -->
          <p>Spring Boot</p>
        </div>
        <div class="col-md-3 text-center">
    <i class="fab fa-git-alt skill-icon"></i>
    <p>Git</p>
        </div>
      </div>

      <!-- Soft Skills -->
      <div class="row mb-5">
        <div class="col-12">
          <h3 class="text-center mb-3">Soft Skills</h3>
        </div>
        <div class="col-md-6 text-center">
          <i class="fas fa-users skill-icon"></i>
          <p>Teamwork</p>
        </div>
        <div class="col-md-6 text-center">
          <i class="fas fa-comments skill-icon"></i>
          <p>Communication</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
}
</script>

<style scoped>
.skills-section {
  background-color: #f8f9fa; /* Light Gray */
  padding: 60px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #142850; /* Dark Blue */
}

.skill-icon {
  font-size: 3rem;
  color: #00D9FF; /* Cyan */
  margin-bottom: 10px;
}

p {
  font-size: 1.1rem;
  color: #343a40;
}

/* Responsive design for tablets and below */
@media (max-width: 992px) {
  .skill-icon {
    font-size: 2.5rem; /* Slightly smaller icons */
  }
}

@media (max-width: 1024px) {
  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .col-md-3 {
    flex: 0 0 50%; /* Two items per row on tablets */
    max-width: 50%;
  }
}

/* Responsive design for mobile view */
@media (max-width: 767.98px) {
  .col-md-3 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>
