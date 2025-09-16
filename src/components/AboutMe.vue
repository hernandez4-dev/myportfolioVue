<template>
    <section class="about-me">
      <div class="about-me-image">
        
      </div>
      
        <div class="about-me-content">  
          <img src="/img/aboutme.jpg" alt="About Me" class="rounded-full mx-auto h-40 w-40">
            <h2>Web Developer Jr</h2>
            <p>Aprendiendo cada dia, diferentes tecnologias para crear soluciones a problemas reales.</p>
            <h2>Ilustrador Gráfico</h2>
            <p>Ilustrador por pasión y diversión, me gusta crear diseños que sean únicos y que transmitan una idea o mensaje.</p>
        </div>

      <!--  <div class="newsletter-section">
          <h2>¡Suscríbete a mi Newsletter!</h2>
          <p>Recibe las últimas noticias sobre mis proyectos y tutoriales de desarrollo.</p>
          <div class="newsletter-form">
            <iframe 
              src="http://eepurl.com/iRopO-/"
              width="100%" 
              height="700" 
              frameborder="0"
              scrolling="no"
              title="Newsletter Subscription Form"
              class="newsletter-iframe">
            </iframe>
          </div>
        </div>-->
    </section>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style scoped>
.about-me {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.about-me-content {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  padding: 2rem;
  text-align: center;
}

.about-me-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.about-me-content p {
  font-size: 1.2rem;
  color: #555;
}

/* CAMBIO: Estilos para la sección del newsletter */
.newsletter-section {
  margin-top: 3rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  padding: 2rem;
  text-align: center;
}

.newsletter-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.newsletter-section p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
}

.newsletter-form {
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-iframe {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background: #f8f9fa;
}

/* Responsive design para el iframe */
@media (max-width: 768px) {
  .newsletter-iframe {
    height: 350px;
  }
  
  .newsletter-section {
    padding: 1.5rem;
  }
}
</style>