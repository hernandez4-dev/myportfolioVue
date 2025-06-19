<template>
    <section class="about-me">
      <div class="about-me-image">
        
      </div>
      
        <div class="about-me-content">  
          <img src="/img/aboutme.jpg" alt="About Me" class="rounded-full mx-auto h-40 w-40">
            <h2>Sobre mí</h2>
            <p>Soy un diseñador gráfico con una pasión por la creatividad y el diseño. Me gusta crear diseños que sean únicos y que transmitan una idea o mensaje.</p>
        </div>
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
</style>