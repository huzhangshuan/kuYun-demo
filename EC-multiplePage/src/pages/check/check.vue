<template>
 <div id="check">
     <h2>我是选中</h2>
     <ul>
       <li v-for="item in list" :key="item.id">{{ item}}
          <span  @click = 'del(item)'>x</span>
       </li>
     </ul>
     <div id="tabber">
        <a href="index.html" target="_blank">首页</a>
        <a href="youXuan.html" target="_blank">优选</a>
        <a href="recom.html" target="_blank">推荐</a>
        <a href="check.html" target="_blank" class="active">选中</a>
      </div>     
 </div>
</template>

<script>

 export default {
  data() {
    return {
      list:[]
    }
  },
  created () {
    for(let key in window.localStorage) {
      if(/^ss/.test(key)) {
        this.list.push(window.localStorage.getItem(key));
      }
    }
  },
  methods:{
    del(item) {
      if(confirm('确定要删除吗？')) {
         // 找到这个元素在list列表中的索引
      let index1 = this.list.indexOf(item);
      // 在本地列表中删除
      this.list.splice(index1, 1);
      // 找到点击的值所对应得key值
      for(let key in window.localStorage){
        if(window.localStorage.getItem(key) == item){
          window.localStorage.removeItem(key);
          break;
        }
      }
      alert('删除成功');
      }
     
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
