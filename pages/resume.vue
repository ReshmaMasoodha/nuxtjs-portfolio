<template>
  <section class="resume-section py-5" id="resume">
    <br>
    <div class="container">
      <!-- Introduction -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="section-title mb-4">Resume</h2>
          <p class="lead">
            Motivated web developer with a focus on front-end technologies. Eager to create engaging and user-friendly websites and exploring new opportunities in the tech industry.
          </p>
        </div>
      </div>
      <AboutMe />
      <Skills />	
      <!-- Skills -->
      <!-- (Already included) -->

      <!-- Experience -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto">
          <h3 class="mb-4">Experience</h3>
          <ul class="list-unstyled">
            <li>
              <h5>Web Developer Intern</h5>
              <p><strong>Aug 2023 - Sep 2023</strong></p>
              <p>Participating in a 4-week project-based internship focused on web development, including live bootcamps and hands-on coding projects. Gained practical experience in creating dynamic and user-friendly web applications using HTML, CSS, and JavaScript. Successfully completed a capstone project showcasing industry-ready skills and earned badges and a verified certificate upon completion. </p>
            </li>
            <li>
              <h5>Python Intern</h5>
              <p><strong>Mar 2023 - Mar 2023</strong></p>
              <p>Participated in an internship focusing on foundational programming and technology concepts. Gained hands-on experience with HTML, including essential tags and CSS for styling. Learned C programming, including syntax, functions, and basic input/output operations. Explored databases and their organization, as well as Python for data manipulation and automation. Acquired knowledge of cloud computing principles and PHP for server-side scripting. Developed problem-solving skills through practical coding exercises and contributed to understanding of web application development and database management.</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Education -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto">
          <h3 class="mb-4">Education</h3>
          <ul class="list-unstyled">
            <li>
              <h5>Bachelor of Computer Application - St.Antony's College of Arts and Sciences for Women, Thamaraipadi.</h5>
              <p><strong>Graduated: May 2024</strong></p>
            </li>
            <li>
              <h5>Higher Secondary Certificate - Our Lady of Lourdes Girls Higher Secondary School, Dindigul.</h5>
              <p><strong>Graduated: May 2021</strong></p>
            </li>
            <li>
              <h5>Secondary School Leaving Certficate - Our Lady of Lourdes Girls Higher Secondary School, Dindigul.</h5>
              <p><strong>Graduated: March 2019</strong></p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Certifications -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto">
          <h3 class="mb-4">Certifications</h3>
          <ul class="list-unstyled">
            <li>
              <p>Java Programming - MSME-TC EC-Madurai(TN) (November 2023)</p>
            </li>
            <li>
              <p>Fundamentals of Compter Systems - IGNOU (February 2023)</p>
            </li>
            <li>
              <p>Basics of Compter - Bharat Institute of Technology (December 2021)</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Resume -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center">
          <h3 class="mb-4">Resume</h3>
          <p>You can see a copy of my resume in PDF format by clicking the button below.</p>
          <a href="https://reshmamasoodha.github.io/PP/redirect.html" class="btn btn-primary">Resume</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutMe from '~/components/AboutMe.vue';
import Skills from '~/components/Skills.vue';

export default {
  components: {
    AboutMe,
    Skills
  },
  data() {
    return {
      email: 'your-email@example.com',
      phone: '+1234567890',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/yourprofile',
        github: 'https://github.com/yourusername'
      }
    }
  }
}
</script>

<style scoped>
.resume-section {
  background-color: #f8f9fa;
}
.section-title {
  font-size: 2.5rem;
  font-weight: bold;
}
</style>