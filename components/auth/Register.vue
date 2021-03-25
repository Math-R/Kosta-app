<template>
    <form>
        <img class="Logo" src="~/assets/images/logo.png" alt="Logo Kosta" />
        <h2 class="font-bold text-3xl">S'enregistrer</h2>
        <input placeholder="Nom" type="text" />
        <input placeholder="Prénom" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Mot de passe" type="password" />
        <input placeholder="Confirmer mot de passe" type="password" />
        <button>S'enregistrer</button>
        <span>Déjà un compte ? Connectez-vous</span>
    </form>
</template>

<script>
export default {
    name:"Register"
}
</script>