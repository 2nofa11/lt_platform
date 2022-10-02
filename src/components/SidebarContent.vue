<template>
  <v-sheet rounded="lg">
    <v-list color="transparent">
      <v-list-item v-for="item in listItems" :key="item" link>
        <div @click="changeRoute('about', item.keys)">
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </div>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

export default defineComponent({
  data() {
    return {
      listItems: [
        { title: "とにほめLT会", keys: "とにほめLT会" },
        { title: "オンライン", keys: "オンライン,LT会" },
        { title: "東京都", keys: "東京都,LT会" },
      ],
    };
  },
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
