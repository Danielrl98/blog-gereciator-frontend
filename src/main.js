import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginComponent from './pages/login/LoginComponent.vue'
import HomeComponent from './pages/home/HomeComponent.vue'
import ProductsComponent from './pages/products/ProductsComponent.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'login', component: LoginComponent },
  { path: '/home',name: 'home', component: HomeComponent},
  { path: '/produtos',name: 'products', component: ProductsComponent}
]

const router = new VueRouter({
  routes  
})

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
