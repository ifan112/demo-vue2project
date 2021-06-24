import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/Home.vue'
import Login from '@views/Login.vue'
import Report from '@views/Report.vue'
import Customer from '@views/Customer.vue'
import Dashboard from '@views/Dashboard.vue'
import Cases from '@views/Cases.vue'
import Collectors from '@views/Collectors.vue'
import Profile from '@views/Profile.vue'
import SystemRole from '@views/system/Role.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/cases',
        name: 'Cases',
        component: Cases
      },
      {
        path: '/collectors',
        name: 'Collectors',
        component: Collectors
      },
      {
        path: '/report',
        name: 'Report',
        component: Report
      },
      {
        path: '/customer',
        name: 'Customer',
        component: Customer
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/system/role',
        name: 'SystemRole',
        component: SystemRole
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
