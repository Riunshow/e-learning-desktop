import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueCookie from 'vue-cookie'
// require('electron-cookies')

Vue.prototype.$axios = axios

Vue.prototype.$serverIP = 'http://172.20.171.122:7001'

// import VueElectronStorage from 'vue-electron-storage'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI);
// Vue.use(VueElectronStorage)
Vue.use(VueCookie);

Vue.http.options.xhr = { withCredentials: true }

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app')