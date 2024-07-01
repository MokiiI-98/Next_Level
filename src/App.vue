<template>
  <v-app >

<AppBar   color="#757575" title ="Next Level"  :menu="items"></AppBar>
    <v-main>

      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'
//import router from './router';

// import SvgIcon from '@jamescoyle/vue-icon';
// import { mdiHome, mdiAccount, mdiArchive, mdiStar } from '@mdi/js';
import AppBar from '@/components/Myappbar.vue'
const items = [
  {
    title: 'perfil',
    path: 'mdi-account',
    link: "/profile"
  },
  {
    title: 'Home',
    path: 'mdi-home',
    link: "/"
  },

]

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false



  const navigate = (item) => {
  switch (item.title) {
    case 'Perfil':
      router.push( '/profile' );
      break;
    case 'Home':
      router.push({ name: 'Home' });
      break;
    case 'Favoritos':
    router.push({ name: '/favoritos' });
      break;
    case 'Notificacao':
    router.push({ name: '/notifica' });
    break;
    // case 'Faturamento':
    //   router.push({name : 'faturamento'})
    // Adicione outros casos conforme necessário para outros itens
    default:
      break;
  }
};
})
</script>
