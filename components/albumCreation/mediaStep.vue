<template>
  <div class="mediaStep">
    <dropzone
      id="foo"
      ref="el"
      :options="options"
      :destroyDropzone="true"
      @vdropzone-complete="uploadSuccess"
    ></dropzone>
    <Button text="Valider" @click.native="submit" :disabled="isDisabled"></Button>
  </div>
</template>

<script>
import Button from "@/components/common/Button";
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";

export default {
  name: "mediaStep",
  props: ["albumSlug"],
  components: {
    Dropzone,
    Button,
  },
  data() {
    return {
      stepTitle: "Ajoutez des photos",
      options: {
        url: "http://localhost:8000/api/album/" + this.albumSlug + "/file",
        withCredentials: true,
      },
      photos: [],
    };
  },
  computed: {
    isDisabled() {
      return this.photos.length === 0;
    },
  },
  methods: {
    uploadSuccess: async function (file, response) {
      this.photos.push(file);
    },
    async submit() {
      this.$emit("next-step");
    },
  },
  mounted() {
    this.$emit("set-title", this.stepTitle);
    this.$refs.el.dropzone;
  },
};
</script>

<style lang="scss" scoped>
.dropzone {
  @apply mb-4;
}
</style>

