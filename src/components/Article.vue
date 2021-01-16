<template>
  <div class="general">
    <Slider texto="Blog" />
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">

          <div class="image-wrap" v-if="article.image">
            <img
              :src="`${url}get-image/${article.image}`"

              :alt="article.title"
              v-if="article.image"/>
          </div>

          <h1 class="subheader">{{ article.title }}</h1>
          <span class="date">{{ article.date | moment("from", "now") }}</span>
          <p>
            {{ article.content }}
          </p>

          <div class="clearfix"></div>
        </article>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import axios from "axios";
import Global from '../Global';
import swal from 'sweetalert';

export default {
  name: "Article",

  components: {
    Slider,
    Sidebar,
  },

  data() {
    return {
      url: Global.url,
      article: null,
    };
  },

  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },

  methods: {

    getArticle(articleId) {
      axios
        .get(`${this.url}article/${articleId}`).then((res) => {

          if (res.data.status == "success") {
            this.article = res.data.article;

          }
        });
    },

    deleteArticle (articleId){

      swal({
        title: `¿Deseas borrar este artículo?`,
        icon: 'warning',
        buttons: true,
        dangerMode: true

      }).then(willDelete => {
        if(willDelete){
          axios.delete(`${this.url}article/${articleId}`).then(() => {

            swal(
              'Artículo borrado',
              'El artículo ha sido borrado correctamente',
              'success'
            );
              this.$route.push('/blog');

          });
        } else {
          swal('No has borrado nada')
        }
      });
    }
  }
}
</script>