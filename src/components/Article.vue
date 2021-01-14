<template>
  <div class="general">
    <Slider texto="Blog" />
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap">
            <img
              :src="article.image"
              :alt="article.title"
              v-if="article.image"
            />
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

export default {
  name: "Article",

  components: {
    Slider,
    Sidebar,
  },

  data() {
    return {
      url: "http://localhost:3900/api/",
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
        .get(`http://localhost:3900/api/article/${articleId}`)
        .then((res) => {
          if (res.data.status == "success") {
            this.article = res.data.article;
          }
        });
    },
  },
};
</script>