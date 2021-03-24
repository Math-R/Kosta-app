<template>
  <div class="Login h-screen">
    <div class="Login__Container rounded-xl">
      <img src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="Cover Kosta"/>
      <Login v-if="!$auth.loggedIn"/>
      <Register v-else/>
    </div>
  </div>
</template>

<script>
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register"
export default {
  name:"auth",
  components:{Login, Register}
}
</script>
