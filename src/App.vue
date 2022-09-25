<template>
  <v-app>
    <v-app-bar app flat>
      <v-container>
        <v-btn> connpass </v-btn>
      </v-container>
    </v-app-bar>
    <v-spacer></v-spacer>
    <v-main color="">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title>List Item {{ n }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list></v-sheet
            ></v-col
          >
          <v-col>
            <v-sheet min-height="70vh" rounded="lg"> <router-view /></v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
});
</script>
