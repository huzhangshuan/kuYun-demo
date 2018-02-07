<template>
  <div id = 'check'>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for = 'item in listChecked' :key = 'item.id'>
        {{ item }}
        <span  @click = 'del(item)'>x</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Car',
    data () {
      return {
          title:'我是选中',
          listChecked:this.$store.state.list
      }
    },
    methods:{
      del (item) {
        this.$store.commit('DEL_ITEM', item);
      }
    }
  }
</script>
<style>
  #check li{
    padding:0.15rem 0.1rem 0.15rem 0.1rem;
    margin:0.03rem 0;
    position:relative;
  }
  #check span{
    display:inline-block;
    height:0.3rem;
    width:0.3rem;
    line-height:0.3rem;
    text-align:center;
    color:red;
    background:skyblue;
    border-radius:50%;
    position:absolute;
    bottom:0.1rem;
    right:0.5rem;
  }
</style>
