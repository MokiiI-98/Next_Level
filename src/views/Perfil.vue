<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-img
            src="https://via.placeholder.com/1200x300"
            height="200px"
            class="white--text"
          >
            <v-container fill-height>
              <v-row justify="center" align="center">
                <v-avatar size="100">
                  <img src="https://via.placeholder.com/100" alt="User Avatar">
                </v-avatar>
              </v-row>
              <v-row justify="center">
                <v-col cols="auto">
                  <h2 class="text-center white--text">Nome do Usuário</h2>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
          <v-card-text>
            <v-tabs
              v-model="tab"
              background-color="primary"
              dark
            >
              <v-tab>Pedidos</v-tab>
              <v-tab>Avaliações</v-tab>
              <v-tab>Favoritos</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card flat>
                  <v-card-text>Conteúdo dos Pedidos</v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>Conteúdo das Avaliações</v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>Conteúdo dos Favoritos</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const tab = ref(0);

    return {
      tab,
    };
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
