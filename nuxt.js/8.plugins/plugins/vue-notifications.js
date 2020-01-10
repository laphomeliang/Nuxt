import Vue from 'vue';
import VueNotifications from 'vue-notifications';
import miniToastr from 'mini-toastr';

const toast = function({ title, message, type, timeout, cb }) {
    return miniToastr[type](message, title, timeout, cb);
};

const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
};

Vue.use(VueNotifications, options);