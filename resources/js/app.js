import './bootstrap';
import * as Vue from 'vue'
import router from './router'
import Swal from 'sweetalert2'
import BootstrapVue3 from 'bootstrap-vue-3'



window.Swal = Swal

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    })

    window.Toast = Toast

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './components/App.vue'

Vue.createApp(App)
    .use(router)
    .use(BootstrapVue3)
    .mount('#app');

