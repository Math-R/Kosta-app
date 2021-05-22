<template>
  <div class="container">
    <h1 class="title">
      Créer votre album
    </h1>
    <dropzone id="dropzone" ref="el"
      :options="options"
      @vdropzone-file-added="addPhotos"
      :destroyDropzone="true">
    </dropzone>
    <Button @click.native="addPhotos">Remove All Files</Button>
  </div>
</template>

<script>
import Button from "@/components/common/Button";
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'

export default {
  name: "create",
  components: {
    Dropzone,
    Button
  },
  middleware: 'auth',
  data() {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: "https://httpbin.org/post",
        headers: { "Authorization": "Bearer " + localStorage.getItem('token') }
      }
    }
  },
  methods: {
    async addPhotos(file) {
      console.log(file.upload)
      await this.$axios.post('http://localhost:8000/api/album',
        {name: 'testfront', photos : [file.upload]}
      ).then(response => {
        console.log(response);
      });
    }
  }
}
</script>

<style lang="scss" scoped>

  .title {
    @apply text-2xl font-bold mt-8 mb-4;
  }

</style>

