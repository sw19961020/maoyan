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
      z-index: 20;
      bottom: 0;
      width: 100%;
    }
  }
    .top-rated-list{
        display: flex;
    }
    .top-rated{
        // position: relative;
        // p{
        //   top: 0;
        //   z-index: 10;
        //   position: absolute;
        // }
        display: flex;
        flex-direction: column;

    }
    .top-rated-item{
        flex: 1;
        .line-ellipsis{
          width: 100px;
          margin: 10px;
          font-size: 13px;
          text-align: center;
        }
        .poster{
            height: 130px;
            position: relative;
            margin: 10px;
            img{
              width: 100px;
             height: 130px;
            }
            .score,.wish{
              position: absolute;
              left: 0;
              background-color: rgba($color: #333333, $alpha: .5);
              font-size: 13px;
              text-align: center;
              color: orange;
              font-weight: bold;
              bottom: 0;
              z-index: 10;
              width: 100px;
            }
        }
    }
    .top-rated{
        p{
            &.title{
                margin-left: 10px;
            }
        }
    }
</style>
