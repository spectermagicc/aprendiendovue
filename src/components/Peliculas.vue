<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>
        <div class="mis-datos" v-if="misDatos">
          <h2>{{misDatos | mayusculas | concatenaYear}}</h2> 
        </div>
        <h3>Película favorita:</h3>
        <div class="favorita" v-if="favorita">
          <h2>{{favorita.title}}</h2>
        </div>
        <p>
          En esta sección aplicaremos Binding Condicionales para el año de las
          películas
        </p>

        <!--Listado articulos-->

        <div v-for="pelicula in peliculasMayusculas" v-bind:key="pelicula.title">
          <div id="articles">
            <Pelicula :pelicula="pelicula" v-on:favorita="ReciboPeliculaFavorita"/>
            <!--Envío de props desde el padre al hijo-->
          </div>
        </div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from './Sidebar.vue';

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
    
  },

  methods : {
    ReciboPeliculaFavorita(favorita){
      this.favorita = favorita;
    }
  },
  //Propiedades computadas
  computed: {
    
    peliculasMayusculas(){
      var peliculasModificada = this.peliculas;
      for (var i = 0; i < peliculasModificada.length; i++){
        peliculasModificada[i].title = peliculasModificada[i].title.toUpperCase();
      }
      
      return this.peliculas
    },

    misDatos (){
      return this.nombre + ' ' + this.apellido
    }
  },

  //Filtors
  filters: {
    mayusculas (value){
      return value.toUpperCase();
    },
    concatenaYear (value){
      var date = new Date ();
      return value + ' ' + date.getFullYear() ; 
    }

  },

  data() {    
    return {
      favorita: null,
      nombre: 'Matias',
      apellido: 'Rojas',

      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "data:image/jpeg;base64,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",
        },
        {
          title: "Gran Torino",
          year: 2015,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gran_Torino.svg/220px-Gran_Torino.svg.png",
        },
        {
          title: "Hobbit",
          year: 2013,
          image:
            "https://panamericana.vteximg.com.br/arquivos/ids/205705-600-690/el-hobbit-1-9789584242983.jpg?v=636324271902600000",
        },
        {
          title: "The Fast and the Furious 1",
          year: 2001,
          image: "https://i.pinimg.com/originals/cf/5a/e9/cf5ae98f50e6823a53633f6d3073f1bf.jpg"
        }
      ],
    };
  },
};
</script>

<style scoped>
</style>