import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from "echarts"
import Element from 'element-ui'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Element, { size: 'big', zIndex: 3000 })
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:8000';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
