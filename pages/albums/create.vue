<template>
  <section class="createAlbum bubble">
    <div class="container">
      <div
        :class="[
          'albumCreationContainer bg-white w-full',
          currentStep === 2 ? 'lg:w-2/3' : 'lg:w-1/2',
        ]"
      >
        <h1>{{ stepTitle }}</h1>
        <ProgressBar :currentStep="currentStep" :steps="steps" />
        <!-- <div :is="currentComponent" @next-step="swapComponent"></div> -->
        <component
          :is="steps[currentStep]"
          :albumSlug="albumSlug"
          @next-step="nextStep"
          @set-title="setTitle"
          @set-album-slug="setAlbumSlug"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/common/Button";
import DetailsStep from "@/components/albumCreation/DetailsStep";
import CollaboratorsStep from "@/components/albumCreation/CollaboratorsStep";
import MediaStep from "@/components/albumCreation/MediaStep";
import LastStep from "@/components/albumCreation/LastStep";
import ProgressBar from "@/components/albumCreation/ProgressBar";

export default {
  components: {
    ProgressBar,
    DetailsStep,
    CollaboratorsStep,
    MediaStep,
    LastStep,
    Button,
  },
  data() {
    return {
      steps: [
        "DetailsStep",
        "CollaboratorsStep",
        "MediaStep",
        "LastStep",
      ],
      stepTitle: "",
      currentStep: null,
      albumSlug: null,
    };
  },
  created() {
    this.initCreation();
  },
  methods: {
    initCreation() {
      this.currentStep = 0;
      this.albumSlug = null;
    },
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    setTitle(title) {
      this.stepTitle = title;
    },
    setAlbumSlug(slug) {
      this.albumSlug = slug;
    },
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  background: url("~assets/images/bubbles-one-background.png");
}

.albumCreationContainer {
  @apply m-auto mt-8 p-4 rounded-xl text-center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);

  &.largeContainer {
    width: 75%;
  }
}
.createAlbum {
  min-height: calc(100vh - 76px);
}
</style>

