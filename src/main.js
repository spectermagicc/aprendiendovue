import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import Router from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import Error from './components/Error.vue';
import Peliculas from './components/Peliculas.vue';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';
import Article from './components/Article.vue';
import CreateArticle from './components/CreateArticle.vue';



Vue.config.productionTip = false

//Agregando las rutas
Vue.use(VueRouter);
Vue.use(Vuelidate);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};



const moment = require('moment');
require('moment/locale/es')
Vue.use(require('vue-moment'), {
    moment
});

const routes = [
    { path: '/home', component: LastArticles },
    { path: '/ultimos-articulos', component: LastArticles },
    { path: '/mi-componente', component: MiComponente },
    { path: '/', component: LastArticles },
    { path: '/hola-mundo', component: HelloWorld },
    { path: '/blog', component: Blog },
    { path: '/pagina/:id?', name: 'pagina', component: Pagina },
    { path: '/formulario', component: Formulario },
    { path: '*', component: Error }, //cargará esta ruta cuando no coincida con las anteriores
    { path: '/peliculas', name: "peliculas", component: Peliculas },
    { path: '/search/:searchString', component: Search },
    { path: '/redirect/:searchString', component: Redirect },
    { path: '/articulo/:id', name: 'article', component: Article },
    { path: '/crear-articulo', name: 'create', component: CreateArticle }



];

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')