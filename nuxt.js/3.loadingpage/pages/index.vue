<template>
    <div class="container">
        <p>hello {{ name }}</p>
        <NuxtLink to="/about">
            Go to /about
        </NuxtLink>
    </div>
</template>
<script>
    export default {
        asyncData() {
            return new Promise((resolve) => {
                setTimeout(function() {
                    resolve({ name: 'world' })
                }, 100);
            })
        }
    }
</script>

<style scoped>
.container {
    font-size: 20px;
    text-align: center;
    padding-top: 100px;
}
</style>