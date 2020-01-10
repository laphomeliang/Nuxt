<template>
    <div>
        <div v-if="$store.state.auth">
            <p>
                you are authenticated. you can see the
                <nuxt-link to="/secret">
                    secret page
                </nuxt-link>!
            </p>
            <button @click="logout">
                logout
            </button>
        </div>
        <p v-else>
            please
            <nuxt-link to="/login">
                login
            </nuxt-link>.
        </p>
    </div>
</template>
<script>
const cookie = process.client ? require('js-cookie') : undefined;
export default {
    methods: {
        logout() {
            cookie.remove('auth');
            this.$store.commit('setAuth', null);
        }
    }
}
</script>