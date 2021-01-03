<template>
  <div id="mi-componente">
    <h1>{{titulo}}</h1>
    <h2>{{ subtitulo }}</h2>
    <hr>
  </div>
</template>

<script>
export default {
  //nombre del componente
  name: "MiComponente",
  data() {
    return {
      titulo : 'Mi primer componente',
      subtitulo: 'Soy el subtítulo de Mi Componente'
    };
  },
};
</script>

<style scoped>
</style>