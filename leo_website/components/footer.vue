<template>
  <footer class="bg-gray-800 text-white p-6">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold">Leo</h1>
        <p class="text-sm">Software Engineer</p>
      </div>
      <div>
        <a href="https://github.com/leo" target="_blank" class="text-white hover:text-gray-300 mr-4">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/leo" target="_blank" class="text-white hover:text-gray-300 mr-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:leo@example.com" class="text-white hover:text-gray-300">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
.footer {
  background-color: #1F2937;
  color: #FFFFFF;
}
.footer a {
  color: #FFFFFF;
  transition: color 0.3s ease;
}
.footer a:hover {
  color: #D1D5DB;
}
</style>