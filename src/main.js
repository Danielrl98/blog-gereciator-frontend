import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginComponent from './pages/login/LoginComponent.vue'
import HomeComponent from './pages/home/HomeComponent.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'login', component: LoginComponent },
  { path: '/home',name: 'home', component: HomeComponent}
]

const router = new VueRouter({
  routes  
})

Vue.use(VueRouter)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
