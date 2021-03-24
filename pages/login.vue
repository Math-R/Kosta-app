<template>
    <div class="Login">
        <div class="Login__Container">
            <img src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="Cover Kosta"/>
            <form>
                <img src="~/assets/images/logo.png" alt="Logo Kosta"/>
                <h2>S'identifier</h2>
                <input type="text" alt="" />
                <input type="password" alt=""/>
                <button>Se connecter</button>
                <span>Mot de passe oublié ?</span>
                <span>Pas de compte ? Inscrivez-vous</span>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .Login {
        height: 100vh;
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
        border-radius: 50px;
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
        font-size: 2rem;
        font-weight: bold;
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
