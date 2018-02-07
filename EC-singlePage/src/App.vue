<template>
  <div>
    <router-view></router-view>
    <tabber></tabber>
  </div>
</template>

<script>
  import Tabber from './pages/tabber'
  export default {
    name: 'app',
    components: {
      tabber:Tabber
    }
  }
</script>

<style>

</style>
