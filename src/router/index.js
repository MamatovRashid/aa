import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Employees from '../views/Employees.vue'
import AddPage from '../views/AddPage.vue'
import EditPage from '../views/EditPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/addpage',
    name: 'AddPage',
    component: AddPage
  },
  {
    path: '/editpage',
    name: 'EditPage',
    component: EditPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
