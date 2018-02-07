  <template>
    <div id='one'>
      <ul>
        <li v-for='item in list' :key = 'item.id'>
        {{ item }}
        <span @click='add(item)'>+</span>
        </li>
      </ul>

    </div>
  </template>

  <script>
    export default {
      name:'Home',

      data () {
        return {
          url:'http://192.168.31.76:8081/rest/s1/ec-pec/home',
          list:[]
        }
      },

      //钩子函数中获取数据
      created () {
        this.axios.get(this.url).then(response => {
          this.list = response.data;
        })
        .catch(error => {
          console.log(error);
        })
      },

      //方法
      methods:{
        add (item) {
          this.$store.commit('ADD_ITEM',item);
        }
      }
    }
  </script>
  <style scoped>
    #one li{
      padding:0.15rem 0.1rem 0.15rem 0.1rem;
      margin:0.03rem 0;
      position:relative;
    }
    #one span{
       display:inline-block;
        height:0.3rem;
        width:0.3rem;
        line-height:0.25rem;
        text-align:center;
        color:green;
        background:pink;
        border-radius:50%;
        position:absolute;
        bottom:0.1rem;
        right:0.5rem;
        font-size:0.3rem;
    }
  </style>
