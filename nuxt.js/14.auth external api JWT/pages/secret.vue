<template>
    <div>
        <h1>this is secret page.</h1>
        <nuxt-link to="/">
            back home
        </nuxt-link>
    </div>
</template>
<script>
    export default {
        middleware: 'authenticated'
    }
</script>