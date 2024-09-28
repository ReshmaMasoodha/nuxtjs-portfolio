<template>
  <footer class="footer">
    <div class="container">
      <div class="row d-flex justify-content-between align-items-center">
        <!-- Social Media Links -->
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <div class="footer-social d-flex justify-content-center justify-content-md-start">
            <a href="mailto:reshmamasoodhadgl@gmail.com" class="social-icon">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/ReshmaMasoodha" target="_blank" class="social-icon">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://in.linkedin.com/in/reshma-masoodha-9154142b6" target="_blank" class="social-icon">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.naukri.com" target="_blank" class="social-icon">
              <i class="fas fa-briefcase"></i>
            </a>
            <a href="https://www.instagram.com/laurarabinson/" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <!-- Copyright -->
        <div class="col-md-6 text-center text-md-end">
          <p class="footer-copyright">
            &copy; {{ new Date().getFullYear() }} Reshma Masoodha M. All rights reserved.
          </p>
        </div>
      </div>
      <!-- Back to Top Button -->
      <button class="back-to-top" @click="scrollToTop">
        <i class="fas fa-chevron-up"></i>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #142850; /* Dark Blue */
  color: #ffffff; /* White text */
  padding: 20px 0;
  position: relative;
}

.footer-social {
  margin-bottom: 10px;
}

.social-icon {
  color: #ffffff;
  font-size: 1.5rem;
  margin: 0 10px;
  text-decoration: none;
}

.social-icon:hover {
  color: #00D9FF; /* Cyan on hover */
}

.footer-copyright {
  margin: 0;
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #00D9FF; /* Cyan */
  color: #142850; /* Dark Blue */
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.back-to-top:hover {
  background-color: #00a5d8; /* Darker Cyan on hover */
}

/* Center social icons in mobile view */
@media (max-width: 767.98px) {
  .footer-social {
    justify-content: center;
  }

  .footer-copyright {
    text-align: center;
  }
}
</style>
