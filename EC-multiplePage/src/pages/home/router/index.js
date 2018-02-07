import Vue from 'vue'
import VueRouter from 'vue-router'

// 全局安装路由
Vue.use(VueRouter)

// 引入所需模块
import one from '../../../components/One'
import two from '../../../components/Two'

// 配置路由规则
const routes = [
    {path:'/',redirect: '/one'},
    {path:'/one',component: one},
    {path:'/two',component: two}
]

// 创建路由
const router = new VueRouter({
    // 取消URL中的#
    // mode:'history',
    routes,
    // 不管跳转到哪个路由，滚动条都回到顶部
    scrollBehavior(to, from, savedPosition) {
        return {x:0, y:0}
    }
})

// 导出路由
export default router
