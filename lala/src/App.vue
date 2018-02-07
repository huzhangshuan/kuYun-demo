<template>
  <div id="app">
    <router-view></router-view>
    <tabber></tabber>
  </div>
</template>

<script>
import Tabber from './components/Tabber'
export default {
  name: 'app',
  components: {
    tabber:Tabber
  }
}
</script>
<style>

</style>
