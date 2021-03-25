<template>
  <div class="bg-red">
    <div class="container">
      <h2>Profil de {{ $auth.user.name }}</h2>
      <h3 class="">Modifier mon pseudo</h3>
      <input
        id="name"
        type="text"
        name="name"
        v-model="name"
        value="$auth.user.name"
      />
      <label for="name" class="">
        Name
      </label>
      <button @click.prevent="update()">Modifier</button>
    </div>
  </div>
</template>

<script>

export default {
  data: {
    name: null
  },
  methods: {
    async update () {
      var token = localStorage.getItem('token');
        await this.$axios.patch('http://localhost:8000/api/user/update/profile',
          {name: this.name},
          {headers: { Authorization: 'Bearer ' + token}}
        );

        this.name = $auth.user.name;
      }
    }
}
</script>

<style>
label {
  top: 0%;
  transform: translateY(-50%);
  font-size: 11px;
  color: rgba(37, 99, 235, 1);
}
.empty input:not(:focus) + label {
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}
input:not(:focus) + label {
  color: rgba(70, 70, 70, 1);
}
input {
  border-width: 1px;
}
input:focus {
  outline: none;
  border-color: rgba(37, 99, 235, 1);
}
</style>
