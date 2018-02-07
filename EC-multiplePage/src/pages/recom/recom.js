import Vue from 'vue'
import recom from './recom.vue'

import axios from 'axios'

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
    el:'#app',
    template:'<recom/>',
    components:{
        recom
    }
})