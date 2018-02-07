import Vue from 'vue'
import Vuex from 'vuex'

// 全局安装Vuex
Vue.use(Vuex)

// 创建Vuex实例
const store = new Vuex.Store({
    state:{
        totalList:[]
    },
    mutations:{
        ADD (state,list) {
            state.totalList.push(list);
        },
        DEL (state,list) {
            state.totalList.splice(state.totalList.indexOf(list),1)            
        }
    }
})

// 导出vuex实例
export default store
