import Vue from 'vue';
import Vuex from 'vuex'
import axios from './http/httpAxios'
import router from './router/index'
import './mock/index'
import App from './App.vue';
import ElementUI from 'element-ui';
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.prototype.$http = axios;

window.vueInstance = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
