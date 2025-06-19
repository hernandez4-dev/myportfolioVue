<template>
  <section class="contact">
    <div class="contact-container">
      <h2>Contactame</h2>
      <form @submit.prevent="handleSubmit" name="contact" netlify>
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Enviar Mensaje</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Aquí puedes agregar la lógica para enviar el formulario
      console.log('Formulario enviado:', this.formData)
      alert('Gracias por tu mensaje. Te responderé pronto.')
      this.formData = { name: '', email: '', message: '' }
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.contact-container {
  max-width: 600px;
  margin: 0 auto;
}

.contact h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #2c3e50;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
  color: #2c3e50;
}

input, textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-btn {
  background: #42b883;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #34a07c;
}
</style>
