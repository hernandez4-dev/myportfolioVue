<template>
  <section class="contact">
    <div class="contact-container">
      <h2>Contactame</h2>
      <form name="contact" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
        <input type="hidden" name="form-name" value="contact" />
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" id="name" name="name" v-model="formData.name" required>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" v-model="formData.email" required>
        </div>

        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" name="message" v-model="formData.message" required></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
        </button>
      </form>
      <div v-if="successMessage" class="message success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="message error">{{ errorMessage }}</div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: '',
      errorMessage: '',
      isSubmitting: false
    }
  },
  methods: {
    async handleSubmit() {
      this.successMessage = ''
      this.errorMessage = ''
      
      this.isSubmitting = true
      
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/contact', {
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message
        })
        
        if (response.status === 200 || response.status === 201) {
          this.successMessage = '¡Gracias por tu mensaje! Te responderé pronto.'
          this.formData = { name: '', email: '', message: '' }
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error)
        this.errorMessage = 'Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.'
      } finally {
        this.isSubmitting = false
      }
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

/* CAMBIO 10: Estilos para el botón deshabilitado */
.submit-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
  opacity: 0.7;
}

.submit-btn:disabled:hover {
  background: #6c757d;
}

/* CAMBIO 11: Estilos para los mensajes de éxito y error */
.message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
}

.message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
