<template>
  <div class="w-3/4 m-auto mb-6">
    <font-awesome-icon :icon="['fa', 'check-circle']" size="5x" />
  </div>
</template>

<script>
import Button from "@/components/common/Button";

export default {
  name: "LastStep",
  components: {
    Button,
  },
  data() {
    return {
      stepTitle: "Votre album a été crée !",
    };
  },
  mounted() {
    this.$emit("set-title", this.stepTitle);

    setTimeout(() => {
      this.$router.push('test')
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
</style>

