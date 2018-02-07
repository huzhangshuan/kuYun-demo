<template>
 <div id="tabber">
     <router-link to='/dingdan' :class = '{active : type == "/dingdan"}'>订单页</router-link>
     <router-link to='/car' :class='{active : type == "/car"}'>购物车</router-link>
 </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data() {
     return {

     }
   },
   computed:{
       type () {
           if(this.$route.path == '/'){
               return '/dingdan'
           }
           return this.$route.path
       }
   }
 }
</script>

<style>
    #tabber{
        height:60px;
        width:100%;
        line-height:60px;;
        background:grey;
        font-size:30px;
        position:fixed;
        right:0;
        bottom:0;
        display:flex;
        justify-content:space-around;
    }
     a{
        color:#000;
        text-decoration:none;
        font-weight:bold;
        display:block;
        width: 163px;
        text-align: center;
        height: 60px;;
        line-height: 60px;
      }
      .active{
        background: orange;
        color:blue;
      }
</style>
