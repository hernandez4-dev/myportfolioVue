
import { createRouter, createWebHistory } from 'vue-router'; 

import HomeView from '../views/Home.vue';
import ProyectosView from '../views/Proyectos.vue';
import ContactoView from '../views/Contacto.vue';
import AboutMeView from '../views/AboutMeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: ProyectosView
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: ContactoView
  },
  {
    path: '/about-me',
    name: 'AboutMeView',
    component: AboutMeView
  }
];


const router = createRouter({
 
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;