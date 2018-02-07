import Vue from 'vue'
import Vuex from 'vuex'

//全局安装vuex
Vue.use(Vuex);

//创建Vuex实例
const store = new Vuex.Store({
  // 仓库中共享的数据
  state:{
    list:[],
    routerPath:'/home'
  },

  //改变仓库中数据的方法(同步)
  mutations:{
    // 向list添加元素的方法
    ADD_ITEM (state,item){
      state.list.push(item);
    },
    // list删除元素的方法
    DEL_ITEM (state, item) {
      state.list.splice(state.list.indexOf(item),1)
    },
    //路由变化时改变type旳值
    CHANGE_PATH (state,nowPath) {
      state.routerPath = nowPath
    } 

  }

})
export default store
