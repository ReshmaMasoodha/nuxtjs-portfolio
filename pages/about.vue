<template>
  <section class="about-me py-5" id="about">
    <br>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h2 class="section-title mb-4">About Me</h2>
          <p class="about-description">
            Hi there! I'm <strong>{{ name }}</strong>, a dedicated web developer with a flair for crafting modern, user-centric websites. 
            With hands-on experience in HTML, CSS, JavaScript, and Python, I've cultivated a strong foundation in both frontend and backend development. 
            My journey in tech has been driven by a passion for creating seamless digital experiences.
          </p>
          <p class="about-details">
            From collaborating on dynamic projects during internships to diving into frontend frameworks like Bootstrap and Nuxt.js, my career has been a blend of constant learning and innovation. 
            I thrive in environments that challenge me to push the boundaries of web development and design.
          </p>
          <p class="about-goal">
            I'm on the lookout for opportunities where I can contribute my skills and knowledge while continuing to grow as a developer. My goal is to work with a team that values creativity, problem-solving, and a collaborative spirit. 
            Whether it's building sleek, responsive websites or tackling complex technical challenges, I'm excited about the possibilities that lie ahead.
          </p>
          <p class="about-contact">
            Feel free to explore my portfolio to see how I bring ideas to life and don't hesitate to reach out if you'd like to connect!
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="skills-section py-5 text-center">
     <div class="container">
        <h3 class="section-title mb-4">Skills</h3>
        <div class="row">
        <div class="col-md-6">
          <h4>Frontend</h4>
         <ul class="list-unstyled">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Vue.js</li>
          </ul>
        </div>
         <div class="col-md-6">
          <h4>Backend</h4>
          <ul class="list-unstyled">
             <li>Python</li>
             <li>Java</li>
             <li>Spring Boot</li>
           </ul>
         </div>
       </div>
     </div>
  </section>
  <section class="achievements-section py-5 text-center">
    <div class="container">
      <h3 class="section-title mb-4">Achievements</h3>
      <ul class="list-unstyled">
        <li>Acedemic Excellence - St. Antony's College of Arts and Scienes for Women</li>
        <li>Certified in Cyber Security and Digital Safety Essentials by Naan Mudhalvan with Microsoft</li>
        <li>Runner of Pencil Drawing - Indepenence Day Competition - St. Antony's College of Arts and Scienes for Women</li>
      </ul>
    </div>
  </section>
  <section class="interests-section py-5 text-center">
    <div class="container">
      <h3 class="section-title mb-4">Interests</h3>
      <p class="text-center">I enjoy solving rubik's cube, gaming, and atching flims or shows. I believe in a balanced life where I can pursue my passions and continue growing both personally and professionally.</p>
    </div>
  </section>
  <section class="cta-section py-5 text-center">
    <div class="container">
      <h3 class="section-title mb-4">Let's Connect!</h3>
      <p>If you're interested in collaborating or just want to say hi, feel free to reach out to me.</p>
      <a href="/contact" class="btn btn-primary">Contact Me</a>
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
  background: linear-gradient(to bottom right, #f8f9fa, #e0e0e0); /* Gradient background */
  padding: 60px 0;
}

.section-title {
  color: #142850; /* Dark Blue */
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  position: relative;
}

.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background: #00D9FF; /* Cyan underline */
  margin: 10px auto 0;
  border-radius: 2px;
}

.about-description, .about-details, .about-goal, .about-contact {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #343a40; /* Dark Gray */
  margin-bottom: 20px;
}

.about-description strong {
  color: #142850; /* Dark Blue */
}

.about-description, .about-details, .about-goal {
  background-color: #ffffff; /* White background for text blocks */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-contact a {
  color: #00D9FF; /* Cyan link color */
  text-decoration: none;
  font-weight: bold;
}

.about-contact a:hover {
  text-decoration: underline;
}
</style>
