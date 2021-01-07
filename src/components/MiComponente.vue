<template>
  <section id="content">
    <div id="mi-componente">
      <h1>{{ titulo }}</h1>
      <h2>{{ subtitulo }}</h2>
      <hr />

      <h2>Reactividad</h2>
      <input type="text" v-model="nombre" />
      <p>Mi nombre es: <strong>{{nombre}}</strong></p>
    </div>
  </section>
</template>

<script>
export default {
  //nombre del componente
  name: "MiComponente",
  data() {
    return {
      titulo: "Mi primer componente",
      subtitulo: "Soy el subtítulo de Mi Componente",
      nombre: ""
    };
  },
};
</script>

<style scoped>
</style>