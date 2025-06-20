<template>
  <header class="header">
    <nav class="nav w-full max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="logo text-2xl font-bold text-gray-800">Mi Portafolio</router-link>
      <button
        class="hamburger flex flex-col justify-center w-8 h-8 bg-transparent border-none cursor-pointer z-50 md:hidden"
        @click="toggleMenu"
        aria-label="Abrir menú"
      >
        <span :class="['block h-1 w-8 bg-gray-800 rounded transition-all duration-300', menuOpen ? 'transform translate-y-2 rotate-45' : '']"></span>
        <span :class="['block h-1 w-8 bg-gray-800 rounded transition-all duration-300 my-1', menuOpen ? 'opacity-0' : '']"></span>
        <span :class="['block h-1 w-8 bg-gray-800 rounded transition-all duration-300', menuOpen ? 'transform -translate-y-2 -rotate-45' : '']"></span>
      </button>
      <div
        :class="[
          'nav-links md:flex gap-8 md:static absolute top-16 left-0 w-full bg-white flex-col md:flex-row items-center transition-all duration-300',
          menuOpen ? 'flex' : 'hidden',
          'md:bg-transparent md:w-auto md:top-auto md:left-auto md:gap-8'
        ]"
      >
        <router-link to="/" class="nav-link py-4 md:py-0 text-lg text-gray-800 hover:text-blue-500 w-full text-center md:w-auto" @click="closeMenu">Inicio</router-link>
        <router-link to="/about-me" class="nav-link py-4 md:py-0 text-lg text-gray-800 hover:text-blue-500 w-full text-center md:w-auto" @click="closeMenu">Sobre mí</router-link>
        <router-link to="/proyectos" class="nav-link py-4 md:py-0 text-lg text-gray-800 hover:text-blue-500 w-full text-center md:w-auto" @click="closeMenu">Proyectos</router-link>
        <router-link to="/contacto" class="nav-link py-4 md:py-0 text-lg text-gray-800 hover:text-blue-500 w-full text-center md:w-auto" @click="closeMenu">Contacto</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
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
.logo {
  text-decoration: none;
}
</style>
