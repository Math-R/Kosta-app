<template>
  <div class="container">
    <div :class="['albumCreationContainer w-full lg:w-1/2', currentStep]">
      <h1>{{ stepTitle }}</h1>
      <ProgressBar :currentStep="currentStep" :steps="steps"/>
      <!-- <div :is="currentComponent" @next-step="swapComponent"></div> -->
      <component :is="steps[currentStep]" @next-step="swapComponent" @set-title="setTitle"/>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button";
import DetailsStep from "@/components/albumCreation/DetailsStep";
import CollaboratorsStep from "@/components/albumCreation/CollaboratorsStep";
import ProgressBar from "@/components/albumCreation/ProgressBar";

export default {

  components: {
    ProgressBar,
    DetailsStep,
    CollaboratorsStep,
    Button,
  },
  data() {
    return {
      steps:[
        'DetailsStep',
        'CollaboratorsStep',
        'DetailsStep',
        'CollaboratorsStep',
      ],
      stepTitle:'',
      currentStep: null,
      formData: {
        title : '',
        description : '',
        participant : '',
        media : []
      },
    };
  },
  created(){
    this.initCreation()
  },
  methods: {
    initCreation(){
      this.currentStep = 0
    },
    swapComponent(component, data) {
      this.currentStep++;
    },
    setTitle(title){
      this.stepTitle = title
    }
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

