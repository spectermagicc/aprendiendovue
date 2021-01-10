<template>
  <div class="general">
    <Slider texto="Blog" />
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>

        <div id="articles" v-if="articles">
          <article
            v-for="article in articles"
            v-bind:key="article._id"
            class="article-item"
          >
            <div class="image-wrap">
              <img
                :src="article.image"
                :alt="article.title"
                v-if="article.image"
              />

              <img
                :src="'../src/assets/logo.png'"
                :alt="article.title"
                v-if="!article.image"
              />
            </div>

            <h2>{{article.title}}</h2>

            <span class="date"> Hace 5 minutos </span>
            <a href="#">Leer más</a>

            <div class="clearfix"></div>
          </article>

          <!--AÑADIR ARTICULOS VIA JS-->
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

export default {
  name: "Blog",

  components: {
    Sidebar,
    Slider,
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