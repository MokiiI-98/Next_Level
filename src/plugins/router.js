import { createRouter, createWebHistory } from 'vue-router';
// import Avaliacao from '@/Home.vue';
import Home from '@/views/Home.vue';
import Profile from '@/views/Perfil.vue';
import Favoritos from '@/views/Favoritos.vue';
import Notificacao from '@/views/Notifica.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: Favoritos
  },
  {
    path: '/notifica',
    name: 'Notificacao',
    component: Notificacao
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
