<template>
  <div id="home">
      <h2>我是首页</h2>
      <div class="router">
        <router-link to='/one' class="to">首页一</router-link>
        <router-link to='/two' class="to">首页二</router-link>
      </div>
      <router-view></router-view>
      <div id="tabber">
        <a href="index.html" target="_blank" class="active">首页</a>
        <a href="youXuan.html" target="_blank">优选</a>
        <a href="recom.html" target="_blank">推荐</a>
        <a href="check.html" target="_blank">选中</a>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    components: {

    }
  }
</script>

<style>
  .to{
    font-size: 25px;
    font-weight: bold;
    color: green;
    margin-left: 200px;
    margin-top: 40px;
  }
</style>
