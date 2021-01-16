<template>
  <section id="articles-component">
    <div id="articlesList" v-if="articles && articles.length >= 1">
      <article
        v-for="article in articles"
        :key="article._id"
        class="article-item"
      >
        <div class="image-wrap">
            <img
              :src="`${url}get-image/${article.image}`"
              :alt="article.title"
              v-if="article.image"
            />

          <img
            :src="'../src/assets/logo.png'"
            :alt="article.title"
            v-if="!article.image"
          />
        </div>

        <router-link :to="{ name: 'article', params: { id: article._id } }">
          <h2>{{ article.title }}</h2>
        </router-link>

        <span class="date">
          {{ article.date | moment("dddd DDD, MMMM, YYYY - hh:mm") }}
        </span>
        
        <router-link :to="{name: 'article', params: {id: article._id}}">Leer más</router-link>

        <div class="clearfix"></div>
      </article>
    </div>

    <div v-else-if="articles.length < 1">No hay artículos para mostrar</div>

    <div v-else>Cargando...</div>
  </section>
</template>

<script>
import Global from '../Global';

export default {
  name: "Articles",
  props: ["articles"],

  data(){
    return {
      url: Global.url
    }
  }
};
</script>