<template>
  <v-card min-width="200px">
    <v-list :lines="false" density="compact" nav>
      <v-list-item prepend-icon="mdi-account" to="/profile">
        <v-list-item-title>Perfil</v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-star" to="/favoritos">
        <v-list-item-title>Favoritos</v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-theme-light-dark">
        <v-list-item-title>Alterar tema</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { useVuetify } from 'vuetify';

// Utilizando Vuetify para alternar temas
// const vuetify = useVuetify();
// const currentTheme = ref('Light Theme');

// const toggleTheme = () => {
//   vuetify.theme.global.name.value = vuetify.theme.global.name.value === 'light' ? 'dark' : 'light';
//   currentTheme.value = vuetify.theme.global.name.value === 'light' ? 'Light Theme' : 'Dark Theme';
// };
 </script>

<!-- // <style scoped>
// .v-card {
//   margin-bottom: 20px;
// }
// </style> -->
