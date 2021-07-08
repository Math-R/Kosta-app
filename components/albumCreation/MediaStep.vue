<template>
  <div class="mediaStep">
    <dropzone
      id="mediaDropzone"
      ref="el"
      :options="options"
      :destroyDropzone="true"
      :useCustomSlot="true"
      @vdropzone-complete="uploadSuccess"
    >
      <div class="dropzone-custom-content">
        <h3 class="dropzone-custom-title">Glissez et déposez vos photos !</h3>
        <div class="subtitle">
          ...ou cliquez pour les sélectionner depuis votre ordinateur
        </div>
      </div>
    </dropzone>
    <Button
      text="Valider"
      @click.native="submit"
      :disabled="isDisabled"
    ></Button>
  </div>
</template>

<script>

import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";
import Button from "~/components/common/Button";

export default {
  name: "MediaStep",
  props: ["albumSlug"],
  components: {
    Dropzone,
    Button,
  },
  data() {
    return {
      stepTitle: "Ajoutez des photos",
      options: {
        url: process.env.BASE_URL + "/api/album/" + this.albumSlug + "/file",
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

  h3 {
    @apply text-lg font-bold;
  }

}
</style>

