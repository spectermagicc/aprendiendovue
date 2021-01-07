<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <router-link to="/">
          <span id="brand"> <strong>Curso</strong>Vue </span>
        </router-link>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link active-class="active" to="/home" >Inicio</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/formulario">Formulario</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/pagina">Pagina 2</router-link>
          </li>
          <li>
            <router-link active-class="active" to="/peliculas">Películas</router-link>
          </li>
        </ul>
      </nav>

      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
    name : 'Header'
};
</script>

<style>
</style>