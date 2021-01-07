<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="pelicula.image" />
    </div>

    <h2>{{ pelicula.title }}</h2>
    <span
      class="date"
      :class="{
        mensajeRed: pelicula.year >= 2016,
        mensajeGreen: pelicula.year < 2016,
      }"
    >
      {{ pelicula.year }}
    </span>
    <a href="#">Leer más</a>

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Pelicula",
  props: ['pelicula']
};
</script>