<template>
  <v-sheet rounded="lg">
    <v-list color="transparent">
      <v-list-item v-for="n in 5" :key="n" link>
        <v-list-item-content @click="changeRoute('about', n)">
          <v-list-item-title>List Item {{ n }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

export default defineComponent({
  methods: {
    changeRoute: function (name: string, keyword: string) {
      router.push({
        name: name,
        params: { keyword: keyword },
      });
    },
  },
});
</script>
