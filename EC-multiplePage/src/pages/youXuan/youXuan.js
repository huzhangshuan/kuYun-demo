import Vue from 'vue'
import YouXuan from './youXuan.vue'

import axios from 'axios'

Vue.prototype.axios = axios

Vue.config.productionTip = false


new Vue({
    el:'#app',
    template:'<youXuan/>',
    components:{
        YouXuan
    }
})