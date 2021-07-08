<template>
  <div class="">
    <section class="Profile__Header">
      <img class="Logo w-21 m-4 rounded-full" src="~/assets/images/avatar.jpg" alt="Logo Kosta"/>
      <h1 class="text-white">{{ $store.state.user.name }}</h1>
      <div class="Profile__Menu">
        <ul>
          <li v-on:click="isActive = 1" v-bind:class="{ active: isActive == 1 }">Mes informations</li>
          <li v-on:click="isActive = 2" v-bind:class="{ active: isActive == 2 }">Mot de passe</li>
          <li v-on:click="isActive = 3" v-bind:class="{ active: isActive == 3 }">Suppression du compte</li>
        </ul>
      </div>
    </section>

    <div class="container">
      <div v-bind:class="{ displayNone: isActive != 1 }" class="Profile__Update">
        <h3>Modifier mon nom</h3>
        <input
          id="name"
          type="text"
          name="name"
          v-model="name"
        />

        <Button @click.native="updateProfile()" text="Modifier"></Button>
      </div>

      <div v-bind:class="{ displayNone: isActive != 2 }" class="Profile__Update">
        <h3>Modifier mon mot de passe</h3>
        <input
          id="name"
          type="password"
          name="password"
          placeholder="********"
          v-model="password"
        />

        <Button @click.native="updatePassword()" text="Modifier"></Button>
      </div>

      <div v-bind:class="{ displayNone: isActive != 3 }" class="Profile__Update">
        <h3>Supprimer mon compte</h3>
        <p class="pb-4">Attention, cette action est irréversible !</p>

        <Button @click.native="deleteAccount()" text="Supprimer"></Button>
      </div>

      <div v-if="apiResult != ''" class="alert" role="alert">
        {{ apiResult }}
      </div>

    </div>
  </div>
</template>

<script>

import Button from "~/components/common/Button";

export default {
  components: {Button},
  data() {
    return {
      name: null,
      password: null,
      apiResult: '',
      isActive: 1
    }
  },
  mounted() {
    this.name = this.$store.state.user.name;
    this.apiResult = '';
  },
  methods: {
    async updateProfile() {
      await this.$axios.patch(process.env.BASE_URL + '/api/user/update/profile',
        {name: this.name}
      ).then(response => {
        this.apiResult = response.data.message;
      });

      this.$store.commit('user/updateName', this.name);
    },
    async updatePassword() {
      await this.$axios.patch(process.env.BASE_URL + '/api/user/update/password',
        {
          password: this.password
        }
      ).then(response => {
        this.apiResult = response.data.message;
        this.password = null;
      });
    },
    async deleteAccount() {
      await this.$axios
      .delete(process.env.BASE_URL + '/api/user/delete')
      .then(response => {
        this.$auth.logout();
        this.$store.commit('user/resetState');
        localStorage.removeItem('token');
      });
    }
  },
  watch: {
    apiResult() {
      if (this.apiResult != '') {
        setTimeout(() => this.apiResult = '', 2000);
      }
    }
  }
}
</script>

<style lang="scss">

.Profile__Header {
  @apply flex flex-col items-center justify-center text-white;
  background: #fad9d9;
  height: 300px;
}

.Profile__Update {
  @apply w-2/3 flex flex-col items-center justify-center p-8 m-auto;

  h3 {
    @apply pb-2 text-lg font-bold;
  }

  input {
    @apply pl-4 mb-4;
    height: 50px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
    border-radius: 15px;
  }
}

.Profile__Menu {
  ul {
    @apply flex;

    li {
      @apply text-black p-4 cursor-pointer;
    }

    li.active {
      @apply text-red;
      transition: .5s;
    }
  }
}

.displayNone {
  display: none;
}


.alert {
  background-color: lightgreen;
  padding: 15px;
}


</style>
