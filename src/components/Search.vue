<template>
  <div class="general">
    <Slider texto="Búsqueda" />
    <div class="center">
      <section id="content">
        <h1 class="subheader">Artículos encontrados</h1>

        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
        </div>

        <div v-else>
            <h2>No hay artículos que coincidan con tu búsqueda</h2>
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
  name: "Search",

  components: {
    Sidebar,
    Slider,
    Articles
  },

  mounted() {
    const searchString = this.$route.params.searchString;
    this.getArticlesBySearch(searchString);
  },

  data() {
    return {
      articles: [],
    };
  },

  methods: {
    getArticlesBySearch(searchString) {
      axios.get("http://localhost:3900/api/search/" + searchString).then((res) => {
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