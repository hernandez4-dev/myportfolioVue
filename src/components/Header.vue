<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="logo">Mi Portafolio</router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/about-me" class="nav-link">Sobre mí</router-link>
        <router-link to="/proyectos" class="nav-link">Proyectos</router-link>
        <router-link to="/contacto" class="nav-link">Contacto</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #3498db;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
