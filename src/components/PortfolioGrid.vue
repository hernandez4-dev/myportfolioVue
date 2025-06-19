<template>
  <section class="portfolio">
    <h2>Mis Proyectos</h2>
    <div class="portfolio-grid">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <img :src="project.image" :alt="project.title" class="project-image">
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioGrid',
  data() {
    return {
      projects: [
        {
          title: 'Diseño Web',
          description: 'Diseño Web Poems con React',
          image: '/img/sreenpo.png',
          tags: ['Web Design', 'UI/UX']
        },
        {
          title: 'Diseño Grafico Artistico',
          description: 'Heart creado con procreate y photoshop',
          image: '/img/heart.png',
          tags: ['Branding', 'Visual Identity']
        },
        {
          title: 'Edicion con Photoshop',
          description: 'Fotomontaje con Photoshop',
          image: '/img/edicion.jpg',
          tags: ['Fotomontaje', 'Digital Art']
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.portfolio h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #2c3e50;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 300px;
  object-fit: contain;
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.project-info p {
  color: #666;
  margin-bottom: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #666;
}
</style>
