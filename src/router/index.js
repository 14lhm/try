import Vue from 'vue'
import VueRouter from 'vue-router'



import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: (to, from, next) => {
      console.log(to,from,"one enter")
      next()
    }
  },
  {
    path: '/home',
    redirect:'/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((from,to,next)=>{
  
  
  console.log("before enter");
  next()
})
router.afterEach(()=>{
  
  
  console.log("after enter");
})

export default router
