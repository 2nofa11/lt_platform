<template>
  <v-card>
    <v-card color="primary" min-width="400" max-width="1200">
      <div>
        <v-card-title class="text-h5" v-text="title"></v-card-title>
        <v-card-subtitle class="mb-1" v-text="subtitle"></v-card-subtitle>
        <v-divider class="mx-2"></v-divider>
        <v-col>
          <v-row class="mb-4 mt-1">
            <v-icon class="ml-5">{{ icons.clock }} </v-icon>
            <span class="subheading ml-2">{{ started_at }}</span>
          </v-row>
          <v-row>
            <v-icon class="ml-5">{{ icons.address }} </v-icon>
            <span class="subheading ml-2">{{ address }}</span>
          </v-row>
        </v-col>
        <v-card-actions>
          <v-btn flat color="orange" @click="goToEventPage(event_url)">
            PAGE
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    icons: { clock: "mdi-clock", address: "mdi-map-marker", link: "mdi-link" },
  }),
  props: {
    title: { type: String, required: true },
    started_at: { type: String, required: true },
    address: { type: String, required: true },
    subtitle: { type: String, required: true },
    event_url: { type: String, required: true },
  },
  methods: {
    goToEventPage: function (event_url: string) {
      window.open(event_url);
    },
  },
});
</script>
