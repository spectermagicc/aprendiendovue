<template>
  <section id="content">
    <div id="mi-componente">
      <h1>{{ titulo }}</h1>
      <h2>{{ subtitulo }}</h2>
      <hr />

      <h2>Reactividad</h2>
      <input type="text" v-model="nombre" />
      <p>Mi nombre es: <strong>{{nombre}}</strong></p>
      <hr />

      <h2>Direcctivas condicionales</h2>
      <input type="number" v-model="edad" />
      <p>Mi edad es: <strong>{{edad}}</strong></p>

      <h2>Condicionales</h2>
      <strong v-if="edad < 0" class="mensajeDanger" >Edad no puede ser menor a 0</strong>
      <strong v-else-if="edad >= 0 && edad < 18" class="mensajeDanger">Eres menor de edad</strong>
      <strong v-else class="mensajeDanger">Eres mayor de edad</strong>

      <h2>Directiva iterativa: for</h2>
      <ol>
        <li v-for="pelicula in peliculas" :key="pelicula" >
          {{pelicula}}
        </li>
      </ol>
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
      nombre: "",
      edad: 18,
      peliculas: [
        'Batman',
        'Hobbit',
        'Spiderman',
        'Trolls'
      ]
    };
  },
};
</script>

<style scoped>
</style>