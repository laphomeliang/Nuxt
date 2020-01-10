<template>
    <div class="container">
        <img :src="thumbnailUrl" alt="">
        <p>
            <nuxt-link to="/">
                home
            </nuxt-link>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        asyncData() {
            const nb = Math.max(1, Math.round(Math.random() * 10));
            return axios.get(`https://jsonplaceholder.typicode.com/photos/${nb}`).then(res => res.data);
        }
    }
</script>

<style>
.container {
    text-align: center;
    padding-top: 100px;
    font-family: sans-serif;
}
</style>