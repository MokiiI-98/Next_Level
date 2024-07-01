<template>
<v-menu>
      <template #activator="{ props }">

  <!-- colocar botão para ir para notificações e mostrar -->
              <v-btn icon clas="mr-4" v-bind="props" >
              <!-- <NotifiCard></NotifiCard> -->

                <!-- <v-item-title> Ver notificação</v-item-title> -->
                <v-badge  content="2" color="info">

                <v-icon icon="mdi-bell-outline" >

                </v-icon>

              </v-badge>

              </v-btn>

<v-menu>

  <template #activator='{props}'>
    <v-avatar size="44" v-bind:="props" >
        <v-img
        cover
        alt="N o c"
        src="https://64.media.tumblr.com/15ddd396deaad9859eb7655a638e3a51/88d0da9d1866e56a-39/s1280x1920/34ad37681ff571af5bf51f2a8a9a80570c798906.pnj">
      </v-img>
              </v-avatar>
  </template>
  <Editperfil></Editperfil>

</v-menu>

            </template>

            <v-list>
              <NotiCard></NotiCard>
              <v-list-item
                v-for="item in menu" @click="item.thema" :title="item.title"
              >

              </v-list-item>

            </v-list>
          </v-menu>
</template>
<script  setup >
 defineProps({
    icon: { type: String, default: "mdi-dots-vertical" },
    menu: { type: Array, default: [] },
  });

</script>
