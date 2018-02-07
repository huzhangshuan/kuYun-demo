<template>
  <div id='youxuan'>
    <h2>{{ title }}</h2>
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
    name:'YouXuan',
    data () {
      return {
          title:'我是优选',
          url:'http://192.168.31.76:8081/rest/s1/mantle/parties/',
          list:[]
      }
    },

    //获取数据
    created () {
       this.axios({
        method:'get',
        baseURL:'http://192.168.31.76:8081',
        url:'/rest/s1/mantle/parties/',
        headers:{'Authorization':'Basic am9obi5kb2U6bW9xdWk='}

    })
      .then(res => {
        this.list = res.data.partyIdList;
      })
      .catch(err => {
          console.log(err);
      })
    },

    //方法
    methods:{
      add (item) {
        this.$store.commit('ADD_ITEM',item)
      }
    }
  }
</script>
<style>
  #youxuan ul li{
    padding:0.03rem 0 0.03rem 0.2rem;
    margin:0.03rem 0;
    position:relative;
  }
  #youxuan span{
       display:inline-block;
        height:0.2rem;
        width:0.2rem;
        line-height:0.15rem;
        text-align:center;
        color:green;
        background:pink;
        border-radius:50%;
        position:absolute;
        bottom:0.03rem;
        right:0.5rem;
        font-size:0.3rem;
    }
</style>
