<template>
  <form>
    <img class="Logo" src="~/assets/images/logo.png" alt="Logo Kosta"/>
    <h2 class="font-bold text-3xl">S'enregistrer</h2>
    <input placeholder="Nom" v-model="name" type="text"/>
    <input placeholder="Prénom" type="text"/>
    <input placeholder="Email" v-model="email" type="email"/>
    <input placeholder="Mot de passe" v-model="password" type="password"/>
    <input placeholder="Confirmer mot de passe" type="password"/>
    <Button text="S'enregistrer" @click.native="register();"></Button>
    <span class="cursor-pointer" @click="$emit('goToLogin')">Déjà un compte ? Connectez-vous</span>
  </form>
</template>

<script>
import Button from "@/components/common/Button";

export default {
  name: "RegisterForMail",
  components: {Button},
  data() {
    return {
      name: '',
      email: '',
      password: '',
      hash: '',
    }
  },
  mounted() {
    this.email = this.$route.query.email;
    this.hash = this.$route.query.hash;
  },
  methods: {
    async register() {
      await this.$axios.post('http://localhost:8000/api/register',
        {
          name: this.name,
          email: this.email,
          password: this.password,
          hash: this.hash
        },
      ).then(response => {
        this.apiResult = response.data.message;
        this.$emit('registered');
        this.$router.replace('/auth')


      });
    }
  }
}
</script>
