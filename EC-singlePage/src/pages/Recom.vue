<template>
  <div id='recom'>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for = 'item in list' :key = 'item.id'>
        {{ item }}
        <span @click = 'add(item)'>+</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Mine',
    data () {
      return {
        title:'我是推荐',
        url:'http://192.168.31.76:8081/rest/s1/example/examples',
        list:[]
      }
    },

    created () {
      this.axios({
        method:'get',
        baseURL:'http://192.168.31.76:8081',
        url:'/rest/s1/example/examples',
        headers:{'Authorization':'Basic am9obi5kb2U6bW9xdWk='}
      })
        .then(res => {
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
        })
    },
    methods:{
      add (item) {
        this.$store.commit('ADD_ITEM',item);
      }
    }
  }
</script>
<style>
  #recom li{
    padding:0.15rem 0.1rem 0.15rem 0.1rem;
    margin:0.03rem 0;
    position:relative;
  }
  #recom span{
     display:inline-block;
      height:0.3rem;
      width:0.3rem;
      line-height:0.25rem;
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
