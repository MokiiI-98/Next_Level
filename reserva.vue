<template>
    <v-app>
      <v-app-bar flat class="border-b">
        <v-app-bar-title> Ta funfando</v-app-bar-title>
      </v-app-bar>
      <v-main>
        <v-container>
         <template>
          <v-avatar>
            <v-img src="https://x.com/GatoTeteia/status/1523118394932875267"></v-img>
          </v-avatar>
         </template>
          <v-row>
            <v-col cols="12" md="4" lg="3">
              <v-card>
                <v-img class="align-end text-white" :width="300" aspect-ratio="16/9" cover
                  src="https://images.pexels.com/photos/995300/pexels-photo-995300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                  <v-card-title> barbearia </v-card-title>
                </v-img>
                <v-card-text>
                  <v-card-sub-title>Cortes</v-card-sub-title>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </v-card-text>
                <v-card-action>
                  <v-btn color="orange">
                    Ver mais
                  </v-btn>
                </v-card-action>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        :menu="items" icon="mdi-theme-light-dark"
      </v-main>

      <AppFooter />
    </v-app>
  </template>

  <script setup>
  //
  </script>
