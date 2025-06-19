<template>
  <div class="thanks-view">
    <h2>¡Gracias por tu mensaje!</h2>
    <p>Tu mensaje ha sido enviado correctamente. Te responderé pronto.</p>
  </div>
</template>

<script>
export default {
  name: 'ThanksView'
}
</script>

<style scoped>
.thanks-view {
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  text-align: center;
}
.thanks-view h2 {
  color: #42b883;
  margin-bottom: 1rem;
}
</style> 