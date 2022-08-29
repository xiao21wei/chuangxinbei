import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/result1',
    name: 'chart1',
    component: () => import('../views/Result1.vue')
  },
  {
    path: '/result2',
    name: 'chart2',
    component: () => import('../views/Result2.vue')
  },
  {
    path: '/result3',
    name: 'chart3',
    component: () => import('../views/Result3.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('../views/Result.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
