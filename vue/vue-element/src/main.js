import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VerifyCode from 'iceberg-verify-code'

Vue.config.productionTip = false
Vue.use(VerifyCode)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
