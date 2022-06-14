import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
let originalPush=VueRouter.prototype.push
let originalReplace=VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originalPush.call(this, location, resolve, reject);
  } else {
    originalPush.call(this, location, () => { }, () => { });
  }
}


VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originalReplace.call(this, location, resolve, reject);
  } else {
    originalReplace.call(this, location, () => { }, () => { });
  }
}



const routes = [
  {
    path:'/home',
    component:()=>import('@/views/Home'),
    meta:{
      show:true
    }

  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/product',
    component:()=>import('@/views/Product'),
    meta: {
      show:true
    }

  },
  {
    path: '/login',
    component:()=>import('@/views/Login'),
  },
  {
    path: '/registry',
    component:()=>import('@/views/Registry')
  },
  {
    path: '/forget',
    component:()=>import('@/views/Forget')
  },
  {
    path: '/details',
    component:()=>import('@/views/Details'),
    meta: {
      show:true
    }
  },
  {
    path: '/cars',
    component:()=>import('@/views/Cars'),
    meta: {
        show:true
    }
  },
  {

    path: '/subOrder',
    component:()=>import('@/views/SubmitOrder'),
    meta: {
      show:true
    }

  },
  {
    path: '/paySuccess',
    component: () => import('@/views/PaySuccess'),
    meta: {
      show: true
    }

  },
  {
    path: '/order',
    component:()=>import('@/views/Order'),
    meta: {
      show:true
    }
  }




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
