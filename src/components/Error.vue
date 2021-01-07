<template>
  <div class="general">
    <div class="center">
    <section id="content">
        <h1 class="subheader">Página no encontrada</h1>
        <h2>La página que  buscas no existe</h2>
    </section>
          <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  //nombre del componente
  name: "Error",
  components : {
    Sidebar
  }
};
</script>

<style scoped>
</style>