import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


import Home from '../pages/Home'
import YouXuan from '../pages/YouXuan'
import Check from '../pages/Check'
import Recom from '../pages/Recom'
import One from '../pages/One'
import Two from '../pages/Two'

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home, children: [
    {path: '/', component: One},
    {path: 'one', component: One},
    {path: 'two', component: Two},
  ]},
  {path: '/youxuan', component: YouXuan},
  {path: '/check', component: Check},
  {path: '/recom', component: Recom}
]


const router = new VueRouter({
    // 取消url中的#
    mode:'history',
    routes,
    // 不管跳转到哪个路由，滚动条都回到顶部
    scrollBehavior (to, from, savedPosition){
      return{x:0,y:0}  
    }
})


export default router
