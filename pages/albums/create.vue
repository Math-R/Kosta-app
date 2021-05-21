<template>
  <div class="container">
    <h1 class="title">
      Créer votre album
    </h1>
  </div>
</template>

<script>

export default {
  name: "create",
  middleware: 'auth',
  data() {
  }
}
</script>

<style lang="scss" scoped>

  .title {
    @apply text-2xl font-bold mt-8 mb-4;
  }

</style>

