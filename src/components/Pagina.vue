<template>
  <section id="content">
    <h2 class="subheader">Pággina de pruebas</h2>
    <h3>{{id_desde_url}}</h3>
    <button @click="actualizarNombre()">Actualizar nombre</button>
    <h4>{{nombre}}</h4>
  </section>
</template>

<script>
export default {
  name: "Pagina",

  //métodos y ciclos de vida:

  //obtenemos el parámetro desde la url
    mounted() {
      this.id_desde_url = this.$route.params.id;
      console.log('Componente montado')
    },

    created(){
        console.log('Componente creado')
    },

    updated(){
        console.log('Componente actualizado')
    },

    destroyed(){
        console.log('Componente destuido')
    },

    data() {
        return {
            id_desde_url: null,
            nombre : 'Victor'
        };
    },
    //los métodos externos se crean acá
    methods: {
            actualizarNombre () {
        this.nombre = 'Matias',
        console.log(this.nombre)
    }
    }

};
</script>

<style scoped>
</style>