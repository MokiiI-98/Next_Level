<template>
    <v-app-bar :color="color">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <MenuD :menu="items" icon="mdi-theme-light-dark">
      </MenuD>
    </v-app-bar>

    <v-navigation-drawer :mobile="true" v-model="drawer">
      <v-list nav>
        <v-list-item
          v-for="item in menu"
          :to="item.link"
          :color="color"
          :prepend-icon="item.path"
          :title="item.title"
        />

<!-- <v-list-item prepend-icon="mdi-account">Usuários</v-list-item> -->
<v-list-group value="Usuarios">
  <template #activator="{ props }">
    <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle">Usuarios</v-list-item>
        </template>
<v-list-item prepend-icon="mdi-chart-bar">Faturamento</v-list-item>
<v-list-item prepend-icon="mdi-chart-pie ">Relatório</v-list-item>
</v-list-group>
</v-list>
    </v-navigation-drawer>

  </template>

  <script setup>
  import { ref } from "vue";
  const drawer = ref(true);
  defineProps({
    title: { type: String, default: "Teste 1 2 3" },
    color: { type: String, default: "blue" },
    menu: { type: Array, default: [] },

  });

  // const items = [

  //   {
  //     title:"dark",thema:()=> alert(
  //       "Darjj"
  //     )
  //   },
  //   {
  //     title:"light",thema:()=> alert(
  //       "NOC"
  //   )
  //   }
  // ]
  </script>

  <style scoped></style>
