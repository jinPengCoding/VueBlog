import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './element/element'

Vue.config.productionTip = false
Vue.prototype.$http = axios

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     alert('哈皮')
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
