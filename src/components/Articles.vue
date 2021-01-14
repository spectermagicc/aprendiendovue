<template>
  <section id="articles-component">
    <div id="articlesList" v-if="articles && articles.length >= 1">
      <article
        v-for="article in articles"
        v-bind:key="article._id"
        class="article-item"
      >
        <div class="image-wrap">
          
          <router-link :to="{ name: 'article', params: { id: article._id } }">
            <img
              :src="article.image"
              :alt="article.title"
              v-if="article.image"
            />
          </router-link>
          <img
            :src="'../src/assets/logo.png'"
            :alt="article.title"
            v-if="!article.image"
          />
        </div>

        <router-link :to="{ name: 'article', params: { id: article._id } }">
          <h2>{{ article.title }}</h2>
        </router-link>

        <span class="date">{{
          article.date | moment("dddd DDD, MMMM, YYYY - hh:mm")
        }}</span>
        <a href="#">Leer más</a>

        <div class="clearfix"></div>
      </article>
    </div>

    <div v-else-if="articles.length < 1">No hay artículos para mostrar</div>

    <div v-else>Cargando...</div>
  </section>
</template>

<script>
export default {
  name: "Articles",
  props: ["articles"],
};
</script>