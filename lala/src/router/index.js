import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入模块
import DingDan from '../components/DingDan'
import Car from '../components/Car'

// 配置路由规则
const routes = [
    {path:'/',redirect: '/dingdan'},
    {path:'/dingdan',component:DingDan},
    {path:'/car',component:Car},
]

// 创建路由实例
const router = new VueRouter({
    // 去掉url中的'#'号
    mode:'history',
    routes,
    // 无论跳转到哪个路由，滚动条都跳转到顶部
    scrollBehavior(to,from,savedPosition){
        return{x:0,y:0}
    }
})

// 导出路由
export default router