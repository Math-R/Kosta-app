<template>
  <div class="progressContainer">
    <div class="progressBar"></div>
    <div :class="['progress', currentStep]"></div>
    <div class="dotsContainer">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  props: {
    currentStep: {
      type: String,
      default: "firstStep",
    },
  },
};
</script>

<style lang="scss" scoped>
.progressContainer {
  @apply relative w-3/4 mx-auto my-8;

  .dotsContainer {
    @apply flex justify-between;

    span {
      @apply block rounded-full;
      height: 25px;
      width: 25px;
      background: #de0b0080;
    }
  }

  .progressBar {
    @apply absolute w-full top-50 h-05;
    background: #de0b0080;
    transition: 0.5s;
    transform: translateY(-50%);
  }

  .progress {
    @apply absolute bg-red top-50 h-05;
    width: 0%;
    transition: 0.5s;
    transform: translateY(-50%);

    &.mediaStep {
      width: 50%;
    }

    &.lastStep {
      width: 100%;
    }
  }
}
</style>

