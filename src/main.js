import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import { routes } from "@/routes";

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
