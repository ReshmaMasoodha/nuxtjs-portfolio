<template>
  <div>
    <br>	
    <section class="projects-page py-5">

      <div class="container">

        <h2 class="section-title text-center mb-5">My Projects</h2>

        <div class="row justify-content-center">

          <div v-for="(project, index) in projects" :key="project.id" class="col-md-8 mb-4">

            <div class="project-item text-center">

              <h3>{{ project.title }}</h3>

              <img :src="project.image" class="card-img-top" :alt="project.title + ' image'">
              <p>{{ project.description }}</p>

              <a :href="project.moreInfoUrl" class="more-info-link">

                Read More <i class="fas fa-arrow-right"></i>

              </a>

              <!-- Use index to conditionally render the hr tag -->

              <hr v-if="index !== projects.length - 1" class="my-4">

            </div>

          </div>

        </div>

      </div>

      <!-- Scrollable report section for Project One -->
      <section id="more-info-one" class="report-section">
        <h2 align="center">{{ projects[0].title }}</h2></br>
        <p>Technologies Used:</p>
        <ul>
          <li>Frontend: Nuxt.js, Bootstrap, Font Awesome</li>
          <li>Languages: HTML, CSS, JavaScript</li>
          <li>Version Control: Git</li>
        </ul>
        <p>
          This personal portfolio website was built to showcase my professional skills, projects, and experience. The website features a clean, modern design, a responsive layout, and a focus on user experience across all devices, including iPad Pro.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li><strong>Navbar:</strong> Mobile-responsive, toggles open/closed, closes when clicking outside or selecting a link. Color scheme: Dark Blue (#142850), Cyan (#00D9FF), and White (#FFFFFF).</li>
          <li><strong>Hero Section:</strong> Professional introduction with clean typography and color contrast for readability.</li>
          <li><strong>Projects Section:</strong> Carousel for mobile users, with each project displayed in a slider (title, image, description, and right-aligned 'Read More' link).</li>
          <li><strong>Skills Section:</strong> Icons displayed in 2 rows for mobile, 3 for desktop, using Font Awesome icons.</li>
          <li><strong>About Me Page:</strong> Light gray (#f8f9fa) background, dynamic text, and no profile picture for a cleaner look.</li>
          <li><strong>Contact Me Section:</strong> Form to collect name, email, subject, and message. Contact details: email and social media links (LinkedIn, GitHub). Light gray background (#f8f9fa) with vertically centered content on smaller screens.</li>
          <li><strong>Resume Section:</strong> Includes a PDF download feature for the resume.</li>
        </ul>
        <h3>Challenges and Solutions:</h3>
        <p>
          <strong>Navbar Issues:</strong> Initially, the navbar stayed open on page load, but updates fixed it to stay closed until toggled.
          <br>
          <strong>Carousel View:</strong> CSS adjustments fixed the issue of the first project being half-visible on mobile devices.
        </p>
        <h3>Future Enhancements:</h3>
        <ul>
          <li>Adding detailed project descriptions with dynamic 'Read More' links.</li>
          <li>SEO optimization and an admin panel for content updates.</li>
        </ul>
      </section>

      <!-- Placeholder reports for Project Two and Project Three -->
      <!-- Scrollable report section for Online Course Registration Website -->
<section id="more-info-two" class="report-section">
 <h2 align="center">{{ projects[1].title }}</h2></br>
  <p>Technologies Used:</p>
  <ul>
    <li>No coding environment: OpenWeaver Studio</li>
    <li>Pages: Home, Contact, Courses</li>
    <li>Functionality: Course registration and email notifications</li>
  </ul>
  <p>
    This online course registration website was developed using OpenWeaver Studio, a no-coding platform. The website features a user-friendly interface and allows users to easily register for courses and receive email notifications upon registration.
  </p>
  <h3>Key Features:</h3>
  <ul>
    <li><strong>Home Page:</strong> Welcome message and an overview of available courses.</li>
    <li><strong>Contact Page:</strong> Form for user inquiries and feedback, with functionality to send emails directly.</li>
    <li><strong>Courses Page:</strong> List of courses with registration options.</li>
    <li><strong>Registration:</strong> Users can register for courses through a straightforward form, and receive email confirmation upon successful registration.</li>
  </ul>
  <h3>Challenges and Solutions:</h3>
  <p>
    <strong>User Interface Design:</strong> Ensured the design was intuitive and user-friendly for a seamless registration process.
    <br>
    <strong>Email Notifications:</strong> Implemented reliable email notification systems to confirm user registrations.
  </p>
  <h3>Future Enhancements:</h3>
  <ul>
    <li>Adding more interactive features for user engagement.</li>
    <li>Integrating additional course management functionalities.</li>
  </ul>
</section>

      <section id="more-info-three" class="report-section"> <h2 align="center">{{ projects[2].title }}</h2></br> <p>Technologies Used:</p> <ul> <li>Frontend: HTML, AJAX, jQuery, JavaScript</li> <li>Backend: PHP</li> <li>Local Hosting: XAMPP</li> </ul> <p> This tourism management system website was designed to manage and showcase various tour packages. While the website was tested and hosted locally on my laptop, it was not deployed for public access. The site features user login functionality, allowing guests to view the website but restricting them from booking packages. </p> <h3>Key Features:</h3> <ul> <li><strong>Tour Packages:</strong> Multiple tour packages are provided for users to explore.</li> <li><strong>Pages:</strong> Includes Home, About, Tour Packages, Privacy Policy, Terms of Use, Contact Us, and Inquiry pages.</li> <li><strong>Admin Site:</strong> Accessible by modifying the web address, enabling management of tour packages, website pages, user queries, and refunds.</li> <li><strong>User Interaction:</strong> Guest users can view the site, while registered users can access booking features (not available in the local version).</li> </ul> <h3>Challenges and Solutions:</h3> <p> <strong>Local Hosting:</strong> Hosted and tested the website on a local XAMPP server, ensuring all functionalities work in a controlled environment. <br> <strong>Limited Development:</strong> The project was primarily uploaded and tested rather than developed from scratch, simplifying the implementation process. </p> <h3>Future Enhancements:</h3> <ul> <li>Deploying the website to a live server for public access.</li> <li>Enhancing user experience with additional features such as online booking and payment processing.</li> </ul> </section>
    </section>
  </div>
</template>

<script>

import homeImage from '@/assets/home.jpg';

import openImage from '@/assets/open.jpg';

import tmsImage from '@/assets/tms.jpg';

export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Personal Portfolio Website',
          description: 'A personal website to showcase skills and projects.',
          image: homeImage, // Use require() for the image path
          moreInfoUrl: '#more-info-one'
        },
        {
          id: 2,
          title: 'Online Course Registration Website',
          description: 'An online course registration website built in OpenWeaver Studio, a no-coding environment. The site includes pages such as Home, Contact, and Courses, allowing users to register for courses and receive email notifications.',
          image: openImage, // Use require() for the image path
          moreInfoUrl: '#more-info-two'
        },
        {


          id: 3,
          title: 'Tourism Management System',
          description: 'A local tourism management system to manage and display various tour packages, featuring user login functionality and an admin panel for managing content and user queries.',
          image: tmsImage, // Use require() for the image path
          moreInfoUrl: '#more-info-three'
        }
      ]
    };
  }
}
</script>


<style scoped>
html {
  scroll-behavior: smooth;
}

.projects-page {
  background-color: #f8f9fa;
}

.section-title {
  color: #142850;
  font-size: 2.5rem;
  font-weight: bold;
}

.project-item {
  padding: 20px;
  border-bottom: 1px solid #e1e1e1;
  background-color: #ffffff;
}

.project-item h3 {
  color: #142850;
  font-size: 1.75rem;
  margin-bottom: 15px;
}

.project-item img {
  object-fit: cover;
  width: 100%;
  height: auto;
  border-radius: 8px;
}


.project-item p {
  text-align: center;
}

.more-info-link {
  color: #00D9FF;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
}

.more-info-link i {
  margin-left: 8px;
}

.more-info-link:hover {
  text-decoration: underline;
}

.report-section {
  padding: 40px;
  background-color: #ffffff;
  border: 1px solid #e1e1e1;
  margin-top: 20px;
}

@media (max-width: 576px) {
  .project-item {
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .col-md-8 {
    width: 100%;
  }
}
</style>
