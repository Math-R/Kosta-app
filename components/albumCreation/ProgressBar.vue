<template>
  <div class="progressContainer my-8">
    <div class="stepBar relative h-05">
      <div :class="['step-indicator h-5 w-5 rounded-full  absolute -top-50 ', index <= currentStep ? 'bg-red' : 'bg-red-lighter']" :style="{left: stepPosition(index)+'%'}"
           v-for="(step, index) in steps" :key="step"></div>
      <div class="progress absolute top-0 left-0 bg-red h-full " :style="{width: progress+'%'}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  props: ['steps', 'currentStep'],

  computed: {
    progress() {
      if (this.currentStep === 0) {
        return 0
      } else if (this.currentStep + 1 === this.steps.length) {
        return 100
      } else {
        return (this.currentStep) * 100 / (this.steps.length-1)
      }
    },
  },
  methods: {
    stepPosition(step) {
      if (step === 0) {
        return 0
      } else if (step + 1 === this.steps.length) {
        return 100
      } else {
        return (step) * 100 / (this.steps.length-1)
      }
    }
  }

}

</script>

<style lang="scss" scoped>
.progressContainer {
  @apply relative w-3/4 mx-auto my-8;

}

.step-indicator {
  top: 2px;
  transform: translate(-50% , -50%);
  transition: all 0.3s;
}

.progress {
  transition: all 0.3s;
}

.stepBar {
  background: #F1F1F1;
}

</style>

