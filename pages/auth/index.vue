<template>
  <div class="Auth h-screen">
    <div class="Auth__Container rounded-xl">

      <img v-if="false" src="~/assets/images/background-clouds.png" alt="Cover Kosta"/>
      <img v-else src="~/assets/images/background-museum.png" alt="Cover Kosta"/>

      <Login v-if="authState === 'login'" @goToRegister="authState = 'register'"/>
      <Register v-if="authState === 'register'" @goToLogin="authState = 'login'" @registered="authState = 'login'"/>
      <RegisterForMail v-if="authState === 'registerForMail'" @goToLogin="authState = 'login'"
                        @registered="authState = 'login'"/>
    </div>
  </div>
</template>

<script>
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register"
import RegisterForMail from "@/components/auth/RegisterForMail";

export default {
  name: "auth",
  components: {Login, Register, RegisterForMail},
  data() {
    return {
      authState: 'login'
    }
  },
  mounted() {
    if (this.$route.query.register) {
      this.authState = 'registerForMail'
    }
  }
}
</script>

<style>
.Auth {
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("~assets/images/bubbles-one-background.png");
  background-size: 95%;
  background-repeat: no-repeat;
  background-position: center;
}

.Auth__Container {
  width: 80%;
  height: 45rem;
  display: flex;
  overflow: hidden;
  max-width: 75rem;
  background: white;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.16);
}

.Auth__Container > img {
  width: 50%;
  height: 100%;
}

.Auth__Container > form {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.Auth__Container > form > img {
  margin-bottom: 3rem;
}

.Auth__Container > form > h2 {

  color: #404040;
  font-family: 'Poppins';
  width: 60%;
  margin-bottom: 1rem;
}

.Auth__Container > form > input {
  padding-left: 1rem;
  height: 50px;
  width: 60%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
  border-radius: 15px;
  margin-bottom: 1rem;
}

.Auth__Container > form > button {
  width: 60%;
  background: #DE0000;
  color: white;
  border-radius: 15px;
  font-size: 17px;
  height: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
  margin-bottom: 1rem;
}

.Auth__Container > form > span {
  width: 60%;
  margin-bottom: 1rem;
}
</style>
