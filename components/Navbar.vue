<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-light-blue fixed-top">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">Reshma Masoodha</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNavbar"
        aria-controls="navbarNav"
        aria-expanded="isOpen"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse', 'navbar-collapse', { show: isOpen }]" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" @click="hideNavbar">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item" @click="hideNavbar">
            <NuxtLink class="nav-link" to="/about">About Me</NuxtLink>
          </li>
          <li class="nav-item" @click="hideNavbar">
            <NuxtLink class="nav-link" to="/skills">Skills</NuxtLink>
          </li>
          <li class="nav-item" @click="hideNavbar">
            <NuxtLink class="nav-link" to="/projects">Projects</NuxtLink>
          </li>
          <li class="nav-item" @click="hideNavbar">
            <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
          </li>
          <li class="nav-item" @click="hideNavbar">
            <NuxtLink class="nav-link" to="/resume">Resume</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;

      // Manage the click outside event
      if (this.isOpen) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
    hideNavbar() {
      this.isOpen = false;
      document.removeEventListener('click', this.handleClickOutside);
    },
    handleClickOutside(event) {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse && !navbarCollapse.contains(event.target) && !event.target.closest('.navbar-toggler')) {
        this.isOpen = false;
        document.removeEventListener('click', this.handleClickOutside);
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>


<style scoped>
/* Navbar Background and Text Color */
.navbar {
  background-color: #1E3A5F; /* Lighter Dark Blue */
}

.navbar-light .navbar-brand,
.navbar-light .nav-link {
  color: #FFFFFF; /* White */
}

.navbar-light .nav-link:hover {
  color: #00D9FF; /* Cyan on hover */
}

.navbar-toggler-icon {
  background-color: #00D9FF; /* Cyan */
}

/* Optional: Customize toggle button background */
.navbar-toggler {
  border-color: #00D9FF; /* Cyan */
}

</style>