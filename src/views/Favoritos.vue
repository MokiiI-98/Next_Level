<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h2>Favoritos</h2>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="item in favorites" :key="item.id" cols="12" sm="6" md="4">
                <v-card>
                  <v-img :src="item.image" height="200px"></v-img>
                  <v-card-title>{{ item.name }}</v-card-title>
                  <v-card-subtitle>{{ item.category }}</v-card-subtitle>
                  <v-card-text>Preço: {{ item.price }}</v-card-text>
                  <v-card-actions>
                <v-btn color="orange">
                  Adicionar ao carrinho
                </v-btn>
                <v-btn color="green">
                  Comprar
                </v-btn>
              </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Dados reativos para os favoritos
const favorites = ref([]);

// Função para buscar dados da API
const fetchFavorites = async () => {
  try {
    const response = await fetch('https://run.mocky.io/v3/f4b090a6-e851-4057-9473-1d4a86522a16');
    const data = await response.json();
    favorites.value = data.favorites;
  } catch (error) {
    console.error('Erro:', error);
  }
};

// Chamada da função ao montar o componente
onMounted(() => {
  fetchFavorites();
});
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
