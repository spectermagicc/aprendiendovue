<template>
  <div class="general">
    <Slider texto="Blog" />
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>

        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
        </div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";
import axios from "axios";
import Articles from './Articles.vue';

export default {
  name: "Blog",

  components: {
    Sidebar,
    Slider,
    Articles
  },

  mounted() {
    this.getArticles();
  },

  data() {
    return {
      articles: [],
    };
  },

  methods: {
    getArticles() {
      axios.get("http://localhost:3900/api/articles").then((res) => {
        if (res.data.status == "success") {
          (this.articles = res.data.articles), console.log(this.articles);
        }
      });
    },
  },
};
</script>

<style scoped>
</style>