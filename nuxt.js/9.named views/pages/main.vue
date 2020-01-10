<template lang="html">
    <div class="main">
        <h1>main page</h1>
        <p>this is an example of a named views</p>
        <ul>
            <li>
                <nuxt-link to="/">
                    root
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/section">
                    section
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/child/123">
                    child 123
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/child/234">
                    child 234
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/main">
                    main page with named view in layout
                </nuxt-link>
            </li>
        </ul>
        <hr>
        <p>at top of this page there is named view from layout!</p>
    </div>
</template>
<script>
    export default {
        name: 'emain',
        asyncData(context) {
            console.log(context);
            return {};
        }
    }
</script>
<style scoped>
  .main {
    margin: auto;
    max-width: 420px;
    padding: 10px;
  }
</style>