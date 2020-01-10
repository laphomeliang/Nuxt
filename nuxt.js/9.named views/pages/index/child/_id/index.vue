<template>
    <div>
        <h2>child content</h2>
        id: {{ id }}
    </div>
</template>
<script>
    export default {
        name: 'child',
        validate({ params }) {
            return !isNaN(+params.id);
        },
        computed: {
            id() {
                return this.$route.params.id;
            }
        }
    }
</script>
<style scoped>
    
</style>