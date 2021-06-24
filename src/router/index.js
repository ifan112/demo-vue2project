import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/Home.vue'
import Login from '@views/Login.vue'
import Report from '@views/Report.vue'
import Customer from '@views/Customer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/report',
        name: 'Report',
        component: Report
      }, {
        path: '/customer',
        name: 'Customer',
        component: Customer
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
