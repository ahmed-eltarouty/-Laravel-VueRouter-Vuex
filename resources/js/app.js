import './bootstrap';
import * as Vue from 'vue'
import router from './router'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './components/App.vue'

Vue.createApp(App)
    .use(router)
    .mount('#app');

