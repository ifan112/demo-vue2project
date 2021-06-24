import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@views/Login.vue'

Vue.use(VueRouter)

// 公开路由
const publicRoutes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: publicRoutes
})

export default router
