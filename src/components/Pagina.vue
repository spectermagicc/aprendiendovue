<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Página de pruebas</h2>
        <h3>{{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <button @click="redirigirBlog()">Redirigir al Blog</button>

        <h4>{{ nombre }}</h4>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  name: "Pagina",
  components : {
    Sidebar
  },

  //métodos y ciclos de vida:

  //obtenemos el parámetro desde la url
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("Componente montado");
  },

  created() {
    console.log("Componente creado");
  },

  updated() {
    console.log("Componente actualizado");
  },

  destroyed() {
    console.log("Componente destuido");
  },

  data() {
    return {
      id_desde_url: null,
      nombre: "Victor",
    };
  },
  //los métodos externos se crean acá
  methods: {
    actualizarNombre() {
      (this.nombre = "Matias"), console.log(this.nombre);
    },
    redirigirBlog() {
      this.$router.push("blog");
    },
  },
};
</script>

<style scoped>
</style>