<template>
  <v-card class="mx-auto">
    <v-list>
      <v-subheader>{{ title }}</v-subheader>
      <v-list-item>
        <!-- 日時 -->
        <v-list-item-icon>
          <v-icon>{{ icons.clock }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ started_at }}</v-list-item-title>
        </v-list-item-content>
        <!-- 会場 -->
        <v-list-item-icon>
          <v-icon>{{ icons.address }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ address }}</v-list-item-title>
        </v-list-item-content>
        <!-- リンクへ遷移 -->
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    icons: { clock: "mdi-clock", address: "mdi-map-marker" },
  }),
  props: {
    title: { type: String, required: true },
    started_at: { type: String, required: true },
    address: { type: String, required: true },
  },
});
</script>
