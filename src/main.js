import Vue from 'vue';
import ApiService from '@/utils/api.service';
import SuiVue from 'semantic-ui-vue';
import { CHECK_AUTH } from '@/store/action.type';
import App from './App.vue';
import router from './router';
import store from './store';
import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false;
ApiService.init();
Vue.use(SuiVue);
router.beforeEach((to, from, next) => Promise.all([store.dispatch(CHECK_AUTH)]).then(next));
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
