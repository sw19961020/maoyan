<template>
  <div id="app">
    <div id="bom">
      <tabbar></tabbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import tabbar from './components/Tabbar'
Vue.component('tabbar', tabbar)
export default {

}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  ul,ol{
    list-style: none;
  }
  #app {
    height: 100%;
    width: 100%;
    #bom{
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
</style>
