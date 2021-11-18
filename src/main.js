import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios';
Vue.prototype.$axios = axios;
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)
import logger from 'si-log'

logger.config({level: ['error','info','debug','worn']})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
