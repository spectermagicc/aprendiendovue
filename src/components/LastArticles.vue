<template>
  <div class="general">
    <Slider texto="Curso de Vue.js" :home="true"/>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->
        <div id="articles">
          <Articles v-bind:articles="articles"></Articles>

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
import axios from 'axios';
import Articles from './Articles.vue'


export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Articles
  },

  mounted(){
    this.getLastArticles()
  },

  data(){
    return {
      articles: []
    }
  },

  methods: {
    getLastArticles (){
      axios.get("http://localhost:3900/api/articles/true")
        .then( res => {
          if(res.data.status == 'success'){
            this.articles = res.data.articles
          }
        })
    }
  } //fin de methods


};
</script>

<style scoped>
</style>