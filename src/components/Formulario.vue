<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>

        <div class="datos" v-if="user">
          <h2>{{ user.nombre + " " + user.apellidos }}</h2>
        </div>

        <form class="mid-form" @submit.prevent="mostrarUsuario()">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" required />
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" required />

          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model="user.bio" required></textarea>
          </div>
          <div class="form-group radibuttons">
            <input
              type="radio"
              name="genero"
              v-model="user.genero"
              value="hombre"
              checked
            />
            Hombre
            <input
              type="radio"
              name="genero"
              v-model="user.genero"
              value="mujer"
            />
            Mujer
            <input
              type="radio"
              name="genero"
              v-model="user.genero"
              value="otro"
            />
            Otro
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "Formulario",

  components: {
    Sidebar,
  },

  //Validaciones
/*
  validations: {
    user: {
      nombre: {
        required,
        minLenght: minLenght(2),
    },
    apellidos: {
      required,
      minLenght: minLenght(2),
    },
    bio: {
      required,
      minLenght: minLenght(10),
    }
  }
  },

*/
    

  data() {
    return {
      submitted: false,
      user: {
        nombre: "",
        apellidos: "",
        bio: "",
        genero: "",
      },
    };
  },

  methods: {
    mostrarUsuario() {
      console.log(this.user);
      this.submitted = true;
      this.$v.$touch();
      if(this.$v.invalid){
        return false
      }

      alert('Validación pasada')
    },
  },
};
</script>

<style scoped>
</style>