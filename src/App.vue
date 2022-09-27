<template>
  <v-app>
    <v-app-bar app flat>
      <v-container>
        <v-btn @click="backToHome"> HOME </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2"><sidebar-content /> </v-col>
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
import SidebarContent from "@/components/SidebarContent.vue";
import router from "./router";

export default defineComponent({
  name: "App",
  components: { SidebarContent },
  data() {
    return {};
  },
  methods: {
    backToHome: function () {
      router.push("/");
    },
    goToAbout: function (name: string, keyword: string) {
      router.push({
        name: name,
        params: { keyword: keyword },
      });
    },
  },
});
</script>
