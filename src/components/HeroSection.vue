<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Hola, soy Mario</h1>
      <h2>Diseñador Gráfico</h2>
      <p>Creatividad, diseño y pasión por la visualización</p>
      <div class="hero-buttons">
        <!-- <router-link to="/about-me" class="btn primary">Sobre mí</router-link> -->
        <router-link to="/proyectos" class="btn primary">Ver Proyectos</router-link>
        <router-link to="/contacto" class="btn secondary">Contactame</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(30, 183, 158, 0.7), rgba(0, 0, 0, 0.7)), url('');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
}

.hero-content {
  max-width: 800px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.btn:hover {
  transform: translateY(-3px);
}

.primary {
  background-color: #42b883;
  color: white;
}

.secondary {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}
</style>
