import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import * as Filters from './utils/filters';
import axios from 'axios';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://boutique-dyma-75f7d-default-rtdb.firebaseio.com/';

Object.keys(Filters).forEach((f) => {
  Vue.filter(f, Filters[f]);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
