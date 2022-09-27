<template>
  <div>
    <h1>This is an about page{{ msg }}</h1>
    <v-list-item v-for="(event, index) in userProf" :key="index">
      {{ event.event_id }}
    </v-list-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { eventListFromKeyword, SearchParam } from "@/helper/connpass";

export default defineComponent({
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      msg: this.$route.params.keyword,
      userProf: reactive({}) as any,
    };
  },
  watch: {
    $route: "fetchData",
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      // 試しにAPIを取得する
      const searchParam: SearchParam = { keyword: "LT会", count: 10 };
      eventListFromKeyword(searchParam).then((res) => {
        for (const [id, val] of Object.entries(res.events)) {
          this.userProf[id] = val;
        }
      });
      this.msg = this.$route.params.keyword;
      this.loading = false;
    },
  },
});
</script>
