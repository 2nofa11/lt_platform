<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="250"
        />
      </v-col>

      <v-col class="mb-2">
        <h1 class="display-2 font-weight-bold">L-Talker</h1>
        <p class="subheading font-weight-regular">
          ライトニングトークを手軽に！
        </p>
      </v-col>
      <v-col class="mb-2" cols="12">
        <h2 class="headline font-weight-bold mb-5">What you can do</h2>
        <v-row justify="center">
          <router-link
            v-for="(link, i) in importantLinks"
            :to="link.page"
            :key="i"
            v-slot="{ navigate }"
          >
            <span @click="navigate" role="link" keyword="hoge">{{
              link.text
            }}</span>
          </router-link>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">What's next?</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",

  data() {
    return {
      importantLinks: [
        {
          text: "ConnpasのLT会一覧",
          page: "/about/LT",
        },
      ],
      whatsNext: [
        {
          text: "LT計画",
          href: "https://vuetifyjs.com",
        },
        {
          text: "ユーザー管理機能",
          href: "https://vuetifyjs.com/en/introduction/roadmap/",
        },
        {
          text: "発表の振り返り",
          href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
        },
      ],
    };
  },
});
</script>
