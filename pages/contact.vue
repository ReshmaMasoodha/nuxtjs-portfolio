<template>
  <section class="contact-section py-5" id="contact">
    <br>
    <div class="container">
      <!-- Contact Form -->
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-8 col-md-10">
          <h2 class="section-title text-center mb-5">Contact Me</h2>
          <!-- Contact Form -->
          <form action="https://formspree.io/f/xyzgrzoj" method="POST">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" class="form-control" required />
            </div>
            <div class="form-group mb-4">
              <label for="message">Message</label>
              <textarea id="message" name="message" class="form-control" rows="5" required></textarea>
            </div>
            <!-- Button centered -->
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="row mt-5 justify-content-center">
        <div class="col-md-6 text-center mb-4">
          <h5>Email</h5>
          <p><a :href="'mailto:' + email">{{ email }}</a></p>
        </div>
        <div class="col-md-6 text-center mb-4">
          <h5>Social Media</h5>
          <a :href="socialLinks.linkedin" class="mx-2" target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a :href="socialLinks.github" class="mx-2" target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: 'reshmamasoodhadgl@gmail.com',
      socialLinks: {
        linkedin: 'https://in.linkedin.com/in/reshma-masoodha-9154142b6',
        github: 'https://github.com/ReshmaMasoodha'
      }
    }
  }
}
</script>

<style scoped>
.contact-section {
  background-color: #f8f9fa;
  min-height: 100vh; /* Ensure it fills the viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically on smaller screens */
  padding: 2rem 1rem; /* Add padding for better spacing on mobile */
}

.section-title {
  font-size: 2rem; /* Adjusted for better readability on mobile */
  font-weight: bold;
}

form {
  background: white; /* Ensure form stands out */
  padding: 2rem; /* Add padding inside the form */
  border-radius: 8px; /* Rounded corners for the form */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for better focus */
  max-width: 100%; /* Ensure the form doesn't overflow */
}

@media (max-width: 768px) {
  .contact-section {
    padding: 1rem; /* Reduce padding for smaller screens */
  }

  .section-title {
    font-size: 1.5rem; /* Smaller font size for mobile */
  }

  form {
    padding: 1.5rem; /* Adjust padding inside the form */
    width: 90%; /* Increase width of the form on tablets */
    margin: 0 auto; /* Center the form */
  }
}

@media (max-width: 576px) {
  .form-group {
    margin-bottom: 1rem; /* Reduce space between form elements */
  }

  .btn {
    width: 100%; /* Full-width button on very small screens */
  }
}

/* Center the button */
.text-center {
  text-align: center;
}
</style>
