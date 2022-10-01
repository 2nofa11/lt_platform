<template>
  <div class="pa-5">
    <h1>Searching for 「{{ msg }}」</h1>
    <v-container>
      <v-row dense>
        <v-col v-for="(event, i) in events" :key="i">
          <event-card
            :title="event.title"
            :address="event.address"
            :started_at="event.started_at"
            :subtitle="event.catch"
          ></event-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { eventListFromKeyword, SearchParam } from "@/helper/connpass";
import EventCard from "@/components/EventCard.vue";

export default defineComponent({
  components: { EventCard },
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      events: reactive({}) as any,
    };
  },
  computed: {
    msg: function () {
      return this.$route.params.keyword as string;
    },
  },
  watch: {
    msg: function (oldKey: string, newKey: string) {
      this.fetchData(oldKey);
    },
  },
  mounted() {
    this.fetchData(this.msg);
  },
  methods: {
    fetchData(keyword: string) {
      console.log(keyword);
      this.error = this.post = null;
      this.loading = true;
      // 試しにAPIを取得する
      const searchParam: SearchParam = { keyword: keyword, count: 10 };
      eventListFromKeyword(searchParam).then((res) => {
        for (const [id, val] of Object.entries(res.events)) {
          this.events[id] = val;
        }
      });
      this.loading = false;
    },
  },
});
</script>
