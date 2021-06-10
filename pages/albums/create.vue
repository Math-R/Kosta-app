<template>
  <div class="container">
    <div :class="['albumCreationContainer w-full lg:w-1/2', currentStep]">
      <h1>{{ stepTitle }}</h1>
      <ProgressBar :currentStep="currentStep" :steps="steps" />
      <!-- <div :is="currentComponent" @next-step="swapComponent"></div> -->
      <component
        :is="steps[currentStep]"
        :albumId="albumId"
        @next-step="nextStep"
        @set-title="setTitle"
        @set-album-id="setAlbumId"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button";
import DetailsStep from "@/components/albumCreation/DetailsStep";
import CollaboratorsStep from "@/components/albumCreation/CollaboratorsStep";
import LastStep from "@/components/albumCreation/LastStep";
import ProgressBar from "@/components/albumCreation/ProgressBar";

export default {
  components: {
    ProgressBar,
    DetailsStep,
    CollaboratorsStep,
    LastStep,
    Button,
  },
  data() {
    return {
      steps: [
        "DetailsStep",
        "CollaboratorsStep",
        "LastStep",
        // 'CollaboratorsStep',
      ],
      stepTitle: "",
      currentStep: null,
      albumId: null,
    };
  },
  created() {
    this.initCreation();
  },
  methods: {
    initCreation() {
      this.currentStep = 0;
      this.albumId = null;
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    setTitle(title) {
      this.stepTitle = title;
    },
    setAlbumId(id) {
      this.albumId = id;
    },
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

