import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueMask from 'v-mask';
import App from './App.vue';
import store from './store';
import trancate from './utils/trancate';
import './services/httpService';

import './styles/grid/bootstrap-grid.min.css';
import './styles/fonts.scss';
import './styles/common.scss';

Vue.prototype.$trancate = trancate;

Vue.use(Vuelidate);
Vue.use(VueMask);

Vue.config.productionTip = false;

Vue.filter('trancate', (content, num) => {
  return trancate(content, num);
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
