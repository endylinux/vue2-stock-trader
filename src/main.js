import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import { routes } from "@/routes";
import store from "@/store/store";

Vue.use(VueRouter);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
