<template>
    <a href="#" @click.prevent="login">Login</a>
</template>

<script>
export default {
    methods: {
        login () {
            this.$auth.loginWith('laravelSanctum', {
                data: {
                    email: 'admin@gmail.com',
                    password: 'admin'
                }
            }).then(response => localStorage.setItem('token', response.data.plainTextToken));
        }
    }
}
</script>
