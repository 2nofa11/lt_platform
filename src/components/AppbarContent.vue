<template>
  <v-app-bar app flat>
    <v-container>
      <v-btn @click="backToHome"> HOME </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

export default defineComponent({
  methods: {
    backToHome: function () {
      router.push("/");
    },
  },
});
</script>
