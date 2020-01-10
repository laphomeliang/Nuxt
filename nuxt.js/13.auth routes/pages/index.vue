<template>
    <div class="container">
        <h1>please login to see the secret content</h1>
        <form v-if="!$store.state.authUser" @submit.prevent="login">
            <p v-if="formError" class="error">
                {{ formError }}
            </p>
            <p><i>to login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
            <p>username: <input type="text" v-model="formUsername" name="username"></p>
            <p>password: <input type="password" v-model="formPassword" name="password"></p>
            <button type="submit">
                login
            </button>
        </form>
        <div v-else>
            hello {{ $store.state.authUser.username }}!
            <pre>I am the secret content, I am shown only when the user is connected.</pre>
            <p><i>you can also refresh this page, you'll still be connected!</i></p>
            <button @click="logout">
                logout
            </button>
        </div>
        <p>
            <nuxt-link to="/secret">
                super secret page
            </nuxt-link>
        </p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formError: null,
                formUsername: '',
                formPassword: ''
            }
        },
        methods: {
            async login() {
                try {
                    await this.$store.dispatch('login', {
                        username: this.formUsername,
                        password: this.formPassword
                    });
                    this.formUsername = '';
                    this.formPassword = '';
                    this.formError = null
                } catch (e) {
                    this.formError = e.message
                }
            },
            async logout() {
                try {
                    await this.$store.dispatch('logout');
                } catch (e) {
                    this.formError = e.message;
                }
            }
        }
    }
</script>
<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}   
</style>