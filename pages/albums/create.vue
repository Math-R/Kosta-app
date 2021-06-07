<template>
  <div class="container">
    <div :class="['albumCreationContainer w-full lg:w-1/2', currentComponent]">
      <h1>Créer votre album</h1>
      <ProgressBar :currentStep="currentComponent"/>
      <div :is="currentComponent" @next-step="swapComponent"></div>
      <!-- <FirstStep @next-step="swapComponent" /> -->
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button";
import FirstStep from "@/components/albumCreation/FirstStep";
import MediaStep from "@/components/albumCreation/MediaStep";
import LastStep from "@/components/albumCreation/LastStep";
import ProgressBar from "@/components/albumCreation/ProgressBar";

export default {
  name: "create",
  components: {
    ProgressBar,
    FirstStep,
    MediaStep,
    LastStep,
    Button,
  },
  middleware: "auth",
  data() {
    return {
      currentComponent: "FirstStep",
      formData: [],
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      // options: {
      //   url: "https://httpbin.org/post",
      //   headers: { "Authorization": "Bearer " + localStorage.getItem('token') }
      // }
    };
  },
  methods: {
    swapComponent(component, data) {
      this.formData.push(data);
      this.currentComponent = component;
    },
    // async addPhotos(file) {
    //   console.log(file.upload);
    //   await this.$axios
    //     .post("http://localhost:8000/api/album", {
    //       name: "testfront",
    //       photos: [file.upload],
    //     })
    //     .then((response) => {
    //       console.log(response);
    //     });
    // },
  },
};
</script>

<style lang="scss" scoped>
.albumCreationContainer {
  @apply m-auto mt-8 p-4 rounded-xl text-center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);

  &.mediaStep {
    width: 75%;
  }
}
</style>

