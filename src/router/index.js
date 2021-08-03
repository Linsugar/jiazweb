import Vue from 'vue'
import VueRouter from 'vue-router'
let a = require('../assets/js/LocationStore.js')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component:() =>import("../views/Home-Login.vue"),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path: '/',
        name: 'HomeContent',
        component:() =>import('../components/content/HomeContent')
      },
      {
        path: "/feedback",
        name:"feedback",
        component:() =>import("../views/FeedBack")
      },
      {
        path:'/charts',
        name: 'char',
        component: () =>import('../components/common/charts.vue')
      },
      {
        path: '/Preselect',
        name: 'user',
        component: () =>import('../components/content/UserSelect.vue')
      },
      ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Home-Login.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  console.log(to,'到哪里')
  console.log(to.path)
  console.log(sessionStorage.getItem('Token'))
  console.log(!sessionStorage.getItem('Token'))
  if(!sessionStorage.getItem('Token')){
    if(to.path != '/'){
      next('/')
    }
  }else {
      next()
  }
  next()
})
export default router
