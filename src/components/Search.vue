<template>
  <div class="general">
    <Slider :texto="`Búsqueda: ${searchString}`" />
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
import Global from '../Global';

export default {
  name: "Search",

  components: {
    Sidebar,
    Slider,
    Articles
  },

  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },

  data() {
    return {
      url: Global.url,
      articles: [],
      searchString: null //lo declaro dentro de data para poder usarlo como una variable dentro del programa
    };
  },

  methods: {
    getArticlesBySearch(searchString) {

      axios.get(`${this.url}search/${searchString}`).then((res) => {

        if (res.data.status == "success") {
          (this.articles = res.data.articles);
          
        }

      });
    },
  },
};
</script>

<style scoped>
</style>