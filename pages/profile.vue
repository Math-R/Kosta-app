<template>
  <div class="">
    <section class="Profile__Header">
      <img class="Logo" src="~/assets/images/logo.png" alt="Logo Kosta" />
      <h1 class="text-3xl">{{ $store.state.user.name }}</h1>
    </section>
    <div class="container">
      <div class="Profile__Update w-2/3 mx-auto">
        <h3 class="">Modifier mon nom</h3>
        <input
          id="name"
          type="text"
          name="name"
          v-model="name"
        />

        <Button @click.native="update()" text="Modifier"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button";

export default {
  components: {Button},
  data() {
    return {
      name: null
    }
  },
  mounted() {
    this.name = this.$store.state.user.name;
  },
  methods: {
    async update () {
      var token = localStorage.getItem('token');
      await this.$axios.patch('http://localhost:8000/api/user/update/profile',
        {name: this.name},
        {headers: { Authorization: 'Bearer ' + token}}
      );

      this.$store.commit('user/updateName', this.name);
    }
  }
}
</script>

<style>
.Profile__Header {
  @apply bg-brown-medium flex flex-col items-center justify-center text-white;
  height: 300px;
}

.Profile__Update {
  @apply flex flex-col items-center justify-center p-8 m-auto;
}

.Profile__Update h3 {
  @apply pb-2 text-lg font-bold;
}

.Profile__Update > input {
  @apply pl-4 mb-4;
  height: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
  border-radius: 15px;
}

</style>
