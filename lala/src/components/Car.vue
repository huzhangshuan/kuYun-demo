<template>
 <div id="car">
    <table v-for="item in totalList" :key="item.id" cellspacing="0">
        <tr>
            <th>商品图片</th>
            <th>商品名称</th>
            <th>颜色</th>
            <th>数量</th>
            <th>尺码</th>
       </tr>
       <tr v-for="every in item" :key="every.id">
           <td><img :src="every.pic"/></td>
           <td>{{ every.name }}</td>
           <td>{{ every.color }}</td>
           <td>{{ every.count }}</td>
           <td class="size">
              <span v-for="(value,key) in every.size" :key="key" v-show="value>0">{{key}}({{value}})</span>
           </td>
       </tr>
       <tr class="del">
           <td colspan="5"><button @click="delStore(item)">删除订单</button></td>
       </tr>
    </table>
 </div>
</template>

<script>
 export default {
   data() {
     return {
         totalList:this.$store.state.totalList
     }
   },
   computed: {
     
   },
   methods: {
       delStore (item) {
           let flag = confirm("确定要删除此订单？")
           if(flag){
           this.$store.commit('DEL',item);               
           }
       }
   }
 }
</script>

<style>
    img{
        height: 50px;
        width: 50px;
        margin-top: 10px;
    }
    #car button{
        width: 150px;
        height: 45px;
        line-height: 45px;
        margin-left: 800px;
        margin-top: 20px;
        background: red;
    }
    th{
        background: grey;
        width: 200px;
        text-align: center;
    }
    #car tr td{
        text-align: center;
    }
    .del{
        border-bottom:none;
    }
    #car .size{
        text-align: left;
    }
    #car span{
        margin-left: 10px;
    }
 
</style>
