<template>
  <div>
    <p>Hi from {{ name }}</p>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'dark',
  asyncData ({ req }) {
    // throw new Error(':(');
    return {
      name: req ? 'server' : 'client'
    }
  }
}
</script>