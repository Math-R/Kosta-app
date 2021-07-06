<template>
  <div class="mediaStep">
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
    ></vue-dropzone>
    <Button text="Valider" @click.native="submit"></Button>
  </div>
</template>

<script>
import Button from "@/components/common/Button";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "mediaStep",
  components: {
    vueDropzone: vue2Dropzone,
    Button,
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
  methods: {
    submit() {
      var data = { test: "test" };
      this.$emit("next-step", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropzone {
  @apply mb-4;
}
</style>

