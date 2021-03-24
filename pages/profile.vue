<template>
  <div v-if="$auth.loggedIn">
    {{ $auth.user.name }}
  </div>
</template>

<script>
  export default {

  }
</script>
