import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import echarts from 'echarts'

Vue.use(ElementUI, lang, { locale }, echarts);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
