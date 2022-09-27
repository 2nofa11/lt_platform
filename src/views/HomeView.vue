<template>
  <home-content />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import HomeContent from "../components/HomeContent.vue";

export default defineComponent({
  components: {
    HomeContent,
  },
});
</script>
