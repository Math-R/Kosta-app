<template>
  <form>
    <img class="Logo" src="~/assets/images/logo.png" alt="Logo Kosta"/>
    <h2 class="font-bold text-3xl">S'identifier</h2>
    <input placeholder="E-mail" v-model="email" type="email" alt=""/>
    <input placeholder="Mot de passe" v-model="password" type="password" alt=""/>
    <Button text="Se connecter"></Button>
    <span>Mot de passe oublié ?</span>
    <span>Pas de compte ? Inscrivez-vous</span>
  </form>
</template>

<script>
import Button from "@/components/common/Button";

export default {
  name: "Login",
  components: {Button},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      console.log('email : ', this.email, ', password : ', this.password)
      // this.$auth.loginWith('laravelSanctum', {
      //   data: {
      //     email: this.email,
      //     password: this.password
      //   }
      // })
    }
  }
}
</script>

<style>
.Login {
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Login__Container {
  height: 90vh;
  width: 90vw;
  display: flex;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
  overflow: hidden;
}

.Login__Container > img {
  width: 50%;
}

.Login__Container > form {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.Login__Container > form > h2 {

  color: #404040;
  font-family: 'Poppins';
  width: 60%;
  margin-bottom: 1rem;
}

.Login__Container > form > input {
  height: 50px;
  width: 60%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
  border-radius: 15px;
  margin-bottom: 1rem;
}

.Login__Container > form > button {
  width: 60%;
  background: #DE0000;
  color: white;
  border-radius: 15px;
  font-size: 17px;
  height: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
  margin-bottom: 1rem;
}

.Login__Container > form > span {
  width: 60%;
  margin-bottom: 1rem;
}
</style>
