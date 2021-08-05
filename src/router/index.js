import Vue from 'vue'
import VueRouter from 'vue-router'

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
        path: '/video',
        name: 'videotab',
        component:() =>import('../components/content/VideoPlayer')
      },
      {
        path: '/dynamic',
        name: "dynamic",
        component:()=>import("../components/content/Dynamic")
      },
      {
        path: "/feedback",
        name:"feedback",
        component:() =>import("../components/content/FeedBack")
      },
      {
        path:'/deal',
        name: 'deal',
        component: () =>import('../components/content/Deal')
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
