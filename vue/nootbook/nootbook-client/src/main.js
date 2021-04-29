import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible'
import { Swipe, SwipeItem, Toast } from 'vant';
import 'vant/lib/index.css';

Vue.use(Swipe).use(SwipeItem).use(Toast);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
