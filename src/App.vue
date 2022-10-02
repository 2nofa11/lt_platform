<template>
  <v-app>
    <appbar-content />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="3"><sidebar-content /> </v-col>
          <v-col cols="9">
            <v-sheet min-height="70vh" rounded="lg"> <router-view /></v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppbarContent from "@/components/AppbarContent.vue";
import SidebarContent from "@/components/SidebarContent.vue";

export default defineComponent({
  name: "App",
  components: { SidebarContent, AppbarContent },
});
</script>
