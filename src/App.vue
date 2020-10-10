<template>
  <div id="app">
    <div id="bom" v-if="tabbarShow">
      <tabbar></tabbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import tabbar from './components/Tabbar'
import { mapState } from 'vuex'

// import FilmTabbar from './components/FilmTabbar'
Vue.component('tabbar', tabbar) // 注册组件
export default {
  computed: {
    ...mapState('showModule', ['tabbarShow'])
  }
}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
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
    .line-ellipsis::after{
      content: '';
      height: 0;
      display: block;
    }
    .line-ellipsis{
      .price-block{
        color: red;
      }
      .q{
        font-size: 13px;
        margin-left: 3px;
      }
  }
}
.title:nth-child(1){
      color: #000;
    }
    .item{
      margin: 3px 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 15px;
      margin-bottom: 15px;
    }
    .location-block{
      display: flex;
      margin-top: 5px;
    }
    .box-flex .flex{
      flex: 5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: gray;
      font-size: 14px;
    }
    .distance{
      flex: 1;
      color: gray;
      font-size: 14px;
      margin-left: 15px;
    }
    .label-block::after{
      content: '';
      height: 0;
      display: block;
    }
    .label-block{
      display: flex;
      margin-top: 6px;
      .endorse, .snack, .vipTag, .hallType, .allowRefund{
        color: #589daf;
        border: 1px solid #589daf;
        border-radius: 2px;
        font-size: 10px;
        padding: 2px;
        margin-right: 5px;
      }
      .snack, .vipTag{
        color: #f90;
        border: 1px solid #f90;
      }
    }
    .discount-block{
      margin-top: 10px;
    }
    .discount-block div:nth-child(1){
      display: flex;
      height: 14px;
      line-height: 14px;
      font-size: 12px;
      .discount-label{
        flex: 1;
        font-size: 12px;
        img{
          display: block;
          height: 14px;
          width: 15px;
        }
      }
      .discount-label-text{
        color: #999;
        flex: 13;
      }
    }
</style>
