<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Mario Hernandez</h3>
        <p>Desarrollador Dev Junior & Diseñador Gráfico</p>
      </div>
      <div class="footer-section">
        <h3>Redes Sociales</h3>
        <div class="social-links">
          <a href="https://www.instagram.com/rapsodaz_oficial/" class="social-link" target="_blank">Instagram</a>
          <a href="https://www.linkedin.com/in/mario-hernandez-23b062123" class="social-link" target="_blank">LinkedIn</a>
        </div>
      </div>
      <div class="footer-section">
        <h3>Contacto</h3>
        <p>Email: rapsodazpoeta@gmail.com</p>
        <p>Teléfono: 75785377</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Mario Hernandez. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  padding: 4rem 2rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #42b883;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  margin: 0;
  opacity: 0.7;
}
</style>
