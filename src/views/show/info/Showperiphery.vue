<template>

    <div id="Al">

                <van-cell v-for="(data,index) in allList" :key="index" >
                <div class="all">
                <img :src=" data.goodsImg"/>
                <div class="body">
                <h3>{{data.goodsName}}</h3>
                <p class="p1">{{data.showTimeRange}}</p>
                <p class="p2">{{data.shopName}}</p>
                <p class="p3">
                    <span class="s1">{{data.sellPrice}}￥</span>
                    <span class="s2">￥{{data.originPrice}}</span>
                    <span class="s3">去购买</span>
                </p>
                </div>
                </div>
                </van-cell>

     </div>

</template>
<script>
// import http from '@/util/ajax.js'
import axios from 'axios'
import Vue from 'vue'
import { List, Cell } from 'vant'
Vue.use(List).use(Cell)
export default {
  data () {
    return {
      allList: [],
      loading: false,
      finished: false,
      p: 1
    }
  },
  mounted () {
    console.log(123)

    axios({
      url: '/items.json',
      method: 'get'
    }).then(res => {
      console.log(res.data)
      this.allList = res.data.data_list
    })
  }

}

</script>
<style lang="scss" scoped>
*{padding:0;margin:0}
#Al{
    // margin-top:50px;
    .all{
        width: 100%;
        height:165px;
        margin:0px 0px 0px 20px;
        padding:13px 0px 0px;
        img{
            width:100px;
            height:135px;
            float:left;
        }
        .body{
            width:180px;
            height:135px;
            padding:0px 0px 0px 10px;
            float:left;
            h3{
                width:176px;
                height:50px;
                // overflow: hidden;
                // text-overflow: ellipsis;
                // white-space:pre-wrap;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:2;
                font-size:16px;
                color:#111111;
                font-weight:normal
            }
            .p1{
                width:180px;
                height:16px;
                color:#888888;
                font-size:12px;
                margin:12px 0px 0px;
            }
            .p2{
                width:200px;
                height:18px;
                color:#888888;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size:12px;
                margin:4px 0px 0px;
            }
            .p3{
                width:180px;
                height:20px;
                margin-top:15px;
                .s1{
                 color:red;
                 float:left;
                 font-size:17px;
                }
                .s2{
                    font-size:12px;
                    color:#999999;
                    text-decoration:line-through;
                }
                .s3{
                    float:right;
                    color:#ffffff;
                    font-size:14px;
                    display: block;
                    width:67px;
                    height:27px;
                    background:#FC2041;
                    text-align: center;
                    border-radius:25px;
                }
            }
        }
    }
}
</style>
