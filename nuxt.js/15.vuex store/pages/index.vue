<template>
    <div>
        <h3>index module</h3>
        <button @click="increment">
            {{ counter }}
        </button>
        <br>
        <nuxt-link to="/about">
            about
        </nuxt-link>
        <br>
        <br>
        <h3>todo module</h3>
        <nuxt-link to="/todos">
            todos
        </nuxt-link>
        <br>
        <br>
        <h3>nested modules</h3>
        <nuxt-link to="/website">
            website
        </nuxt-link>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    fetch({ store }) {
        store.commit('increment')
    },
    computed: mapState([
        'counter'
    ]),
    methods: {
        increment() {
            this.$store.commit('increment');
        }
    }
}
</script>