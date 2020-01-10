<template>
    <div class="container">
        <h1>sign in to access the secret page</h1>
        <div>
            <label for="email">
                <input type="email" id="email" value="test">
            </label>
            <label for="password">
                <input type="password" id="password" value="test">
            </label>
            <button @click="postLogin">
                login
            </button>
            <p>the credentials are not verified for the example purpose.</p>
        </div>
    </div>
</template>
<script>
const cookie = process.client ? require('js-cookie') : undefined;
export default {
    middleware: 'notAuthenticated',
    methods: {
        postLogin() {
            setTimeout(() => {
                const auth = {
                    accessToken: 'someStringGotFromApiServiceWithAjax'
                };
                this.$store.commit('setAuth', auth);
                cookie.set('auth', auth);
                this.$router.push('/');
            }, 1000);
        }
    }
}
</script>