<template>

</template>

<script>
export default {
  data() {
    return {
      stepTitle: 'Invitez des ami.e.s',
      collaborators:[]
    }
  },
  mounted(){
    this.$emit('set-title', this.stepTitle)
  }
}
</script>

<style scoped>

</style>
