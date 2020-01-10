<template>
    <div class="container">
        <p>
            <button @click="showLoginError">
                Notif me!
            </button>
        </p>
        <p>
            home - <nuxt-link to="/about">
                about
            </nuxt-link>
        </p>
    </div>
</template>

<script>
let miniToastr;
if (process.client) {
    miniToastr = require('mini-toastr');
}
export default {
    mounted () {
        miniToastr.init();
    },
    // https://www.npmjs.com/package/vue-notifications
    // https://www.npmjs.com/package/mini-toastr
    notifications: {
        showLoginError: {
            title: 'welcome!',
            message: 'hello from nuxt.js',
            type: 'info'
        }
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