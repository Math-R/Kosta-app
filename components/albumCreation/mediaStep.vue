<template>
  <div class="mediaStep">
    <dropzone
      id="dropzone"
      ref="el"
      :options="options"
      :destroyDropzone="true"
    >
      <!-- @vdropzone-file-added="addPhotos" -->
    </dropzone>

    <Button
      text="Valider"
      @click.native="submit"
    ></Button>
  </div>
</template>

<script>
import Button from "@/components/common/Button";
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";

export default {
  name: "mediaStep",
  components: {
    Dropzone,
    Button,
  },
  data() {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: "https://httpbin.org/post",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      },
    };
  },
  methods: {
    submit() {
      var data = { test: 'test' };
      this.$emit("next-step", "lastStep", data);
    },
  },
};
</script>

<style lang="scss" scoped>

.dropzone {
    @apply mb-4;
}
</style>

