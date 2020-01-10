<template>
    <div>
        <h1>super secret page</h1>
        <p>if you try to access this url not connected, you will see the error page telling your that you are not connected.</p>
        <nuxt-link to="/">
            back to the home page
        </nuxt-link>
    </div>
</template>
<script>
    export default {
        middleware: 'auth'
    }
</script>