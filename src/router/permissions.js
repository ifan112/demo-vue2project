import Home from '@views/Home.vue'
import Report from '@views/Report.vue'
import Customer from '@views/Customer.vue'
import Dashboard from '@views/Dashboard.vue'
import Cases from '@views/Cases.vue'
import Collectors from '@views/Collectors.vue'
import Profile from '@views/Profile.vue'
import SystemRole from '@views/system/Role.vue'


// 需要权限才可以访问的路由
const routesRequirePermission = [
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

export default routesRequirePermission