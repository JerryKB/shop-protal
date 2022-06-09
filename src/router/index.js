import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    component:()=>import('@/views/Home')
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/product',
    component:()=>import('@/views/Product')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
