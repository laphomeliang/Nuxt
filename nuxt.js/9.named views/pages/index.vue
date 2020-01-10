<template lang="html">
    <div class="main">
        <h1>hello there</h1>
        <p>this is an example of a named views</p>
        <ul>
            <li>
                <nuxt-link to="/">
                    root
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/section">
                    section1
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
                <!-- <nuxt-link to="/main"> -->
                <nuxt-link :to="{ name: 'main', params: { id: 555 }}">
                    main page with named view in layout
                </nuxt-link>
            </li>
        </ul>
        <hr>
        <div>
            <div class="left">
                <nuxt-child name="left" />
            </div>
            <div class="content">
                <nuxt-child />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'stage'
    }
</script>
<style scoped>
  .main {
    margin: auto;
    max-width: 420px;
    padding: 10px;
  }

  .left {
    max-width: 150px;
    display: inline-block;
    vertical-align: top;
    border: 1px;
  }

  .left:empty {
    display: none;
  }

  .content {
    display: inline-block;
  }

</style>