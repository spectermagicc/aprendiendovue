<template>
  <div class="general">
    <Slider texto="Crear artículo" />
    <div class="center">
      <section id="content">
        <form class="mid-form" @submit.prevent="saveArticle">
          <div class="form-group">
            <label for="title">Título</label>
            <input type="text" name="title" v-model="article.title" />
            <div
              class="mensajeDanger"
              v-if="submitted && !$v.article.title.required"
            >
              El título está vacío
            </div>
          </div>

          <div class="form-group">
            <label for="content">Contenido</label>
            <textarea type="text" name="title" v-model="article.content" />
            <div
              class="mensajeDanger"
              v-if="submitted && !$v.article.content.required"
            >
              El contenido está vacío
            </div>
          </div>

          <div class="form-group">
            <label class="myLabel" for="image">Imagen</label>
            <input
              type="file"
              id="file"
              ref="file"
              name="file0"
              @change="fileChange"
            />
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="guardar" class="btn btn-success" />
        </form>
        <!--fin del formulario -->
      </section>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Article from "../models/Article";
import axios from "axios";
import { required } from "vuelidate/lib/validators";

export default {
  name: "CreateArticle",

  components: {
    Slider,
  },

  data() {
    return {
      //instanciamos un nuevo objeto de clase articleModel
      article: new Article("", "", null, ""),

      submitted: false,

      file: ""
    };
  },

  validations: {
    article: {
      title: {
        required
      },

      content: {
        required
      }
    }
  },

  methods: {
    saveArticle() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) return false;
      else {
        axios
          .post("http://localhost:3900/api/save", this.article)
          .then((res) => {
            if (res.data.status == "success") {
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                //subida de archivo
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);
                var articleId = res.data.article._id;

                axios.post(`http://localhost:3900/api/upload-image/${articleId}`, formData)
                  .then((res) => {
                    if (res.data.article) {
                      //cuando termine la creación, redirección al blog
                      this.article = res.data.article;
                      this.$router.push("/blog");
                    } else {
                        // alerta de error
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                this.article = res.data.article;
                this.$router.push("/blog");
              }
            }
          }) // fin .then
                    .catch(error => {
            console.log(error);
          });
      }
      } //fin else
    },

}

</script>