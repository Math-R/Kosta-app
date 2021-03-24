<template>
    <form>
        <img class="Logo" src="~/assets/images/logo.png" alt="Logo Kosta"/>
        <h2 class="font-bold text-3xl">S'identifier</h2>
        <input placeholder="E-mail" type="text" alt="" />
        <input placeholder="Mot de passe" type="password" alt=""/>
        <button>Se connecter</button>
        <span>Mot de passe oublié ?</span>
        <span>Pas de compte ? Inscrivez-vous</span>
    </form>
</template>

<script>
export default {
    name:"Login"
}
</script>
