<template>
  <div>
    <section class="projects-section">
      <div class="container">
        <h2 class="section-title">Projects</h2>

        <!-- Left Arrow Indicator -->
        <span class="scroll-arrow-left" @click="scrollLeft">&lt;</span>

        <div class="projects-slider d-flex flex-nowrap overflow-auto">
          <!-- Example Project 1 -->
          <div class="card mb-4 shadow-sm project-item">
            <img src="~\assets\home.jpg" class="card-img-top" alt="Project 1">
            <div class="card-body">
              <h5 class="card-title">Personal Portfolio Website</h5>
              <p class="card-text">
                A personal website to showcase skills and projects.<br>Frontend: Nuxt.js, Bootstrap, Font Awesome,<br>Languages: HTML, CSS, JavaScript
              </p>
              <nuxt-link to="/projects" class="btn btn-primary">
                Read More <i class="fas fa-arrow-right"></i>
              </nuxt-link>
            </div>
          </div>

          <!-- Example Project 2 -->
          <div class="card mb-4 shadow-sm project-item">
            <img src="~\assets\open.jpg" class="card-img-top" alt="Project 2">
            <!-- <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="Project 2"> -->
            <div class="card-body">
              <h5 class="card-title">Online Course Registration Website</h5>
              <p class="card-text">
                An online course registration website built in OpenWeaver Studio, a no-coding environment. The site includes pages such as Home, Contact, and Courses, allowing users to register for courses and receive email notifications.
              </p>
              <nuxt-link to="/projects" class="btn btn-primary">
                Read More <i class="fas fa-arrow-right"></i>
              </nuxt-link>
            </div>
          </div>

          <!-- Example Project 3 -->
          <div class="card mb-4 shadow-sm project-item">
            <img src="~\assets\tms.jpg" class="card-img-top" alt="Project 2">
            <div class="card-body">
              <h5 class="card-title">Tourism Management System</h5>
              <p class="card-text">
                A local tourism management system to manage and display various tour packages, featuring user login functionality and an admin panel for managing content and user queries..
              </p>
              <nuxt-link to="/projects" class="btn btn-primary">
                Read More <i class="fas fa-arrow-right"></i>
              </nuxt-link>
            </div>
          </div>
          <!-- Add more projects as needed -->
        </div>

        <!-- Right Arrow Indicator -->
        <span class="scroll-arrow-right" @click="scrollRight">&gt;</span>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    scrollLeft() {
      const slider = document.querySelector('.projects-slider');
      slider.scrollBy({
        left: -300, // Adjust this based on project item width
        behavior: 'smooth'
      });
    },
    scrollRight() {
      const slider = document.querySelector('.projects-slider');
      slider.scrollBy({
        left: 300, // Adjust this based on project item width
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.projects-section {
  background-color: #f8f9fa; /* Light Gray */
  padding: 60px 0;
}

.section-title {
  color: #142850; /* Dark Blue */
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
}

.projects-slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 16px;
  justify-content: center; /* Center the scroll area */
  position: relative;
}

/* Arrow indicators */
.scroll-arrow-left,
.scroll-arrow-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  cursor: pointer;
  z-index: 1;
}

.scroll-arrow-left {
  left: 10px;
}

.scroll-arrow-right {
  right: 10px;
}

.project-item {
  flex: 0 0 auto;
  width: 90%;
  margin-right: 16px;
  scroll-snap-align: start;
}

.card {
  border: none;
  border-radius: 8px;
}

.card-img-top {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-body {
  background-color: #ffffff; /* White background for card body */
}

.card-title {
  color: #142850; /* Dark Blue */
}

.btn-primary {
  background-color: #00D9FF; /* Cyan */
  color: #142850; /* Dark Blue text */
  border: none;
  display: inline-flex;
  align-items: center;
}

.btn-primary i {
  margin-left: 8px; /* Space between text and icon */
}

.btn-primary:hover {
  opacity: 0.8; /* Slightly reduce opacity on hover */
}

/* Scrollbar customization */
.projects-slider::-webkit-scrollbar {
  height: 10px;
}

.projects-slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 16px;
  justify-content: flex-start;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .projects-slider {
    padding-left: 10px; /* Adds padding to prevent the first project from being cut off */
  }
  .project-item {
    width: 100%; /* Makes the items fully visible on mobile */
    margin-right: 0;
  }
}
</style>