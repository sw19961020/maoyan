<template>

    <div id="Al" >
            <div class="swiper" v-if='imgList.length'>
            <singing-swiper :perslide="3">
            <template slot="slide">
             <li class="swiper-slide" v-for="(data,index) in imgList" :key="index" slot="slide">
              <img :src="data" />
             </li>
            </template>
            </singing-swiper>
            </div>
             <van-list
             v-model="loading"
             :finished="finished"
             finished-text="没有更多了"
             @load="onLoad"
             :immediate-check='false'
            >
                <van-cell v-for="(data,index) in singList" :key="index" >
                <div class="all">
                <img :src=" data.posterUrl"/>
                <div class="body">
                <h3>{{data.name}}</h3>
                <p class="p1">{{data.showTimeRange}}</p>
                <p class="p2">{{data.cityName}} {{data.shopName}}</p>
                <p class="p3">
                    <span class="s1">售票中</span>
                    <span class="s2">{{data.priceRange}}元</span>
                    <span class="s3">自营</span>
                </p>
                </div>
                </div>
                </van-cell>
             </van-list>
     </div>

</template>
<script>
import http from '@/util/ajax.js'
import Vue from 'vue'
import { List, Cell } from 'vant'
import SingingSwiper from '../../swiper/SingingSwiper'
import { mapState } from 'vuex'
Vue.use(List).use(Cell)
export default {
  data () {
    return {
      singList: [],
      loading: false,
      finished: false,
      total: 56,
      imgList: [
        'https://img.meituan.net/kylisean/d624264219cec9fb781a26aa11b9662231791.jpg@750w_150h_1c_1e',
        'https://img.meituan.net/kylisean/8c18620b777d4874e43690f33fa859bd50593.jpg@750w_150h_1c_1e'
      ],
      p: 1
    }
  },
  computed: {
    ...mapState('showcityModule', ['cityId'])
  },
  components: {
    SingingSwiper
  },
  methods: {
    onLoad () {
      if (this.singList.length === this.total) {
        this.finished = true
        return
      }
      console.log('到底了')
      this.p++
      http.get(`https://show.maoyan.com/maoyansh/myshow/ajax/performances/7;st=0;p=${this.p};s=20;tft=0;marketLevel=0?sellChannel=13&cityId=${this.cityId}&lng=0&lat=0`).then(res => {
        this.singList = [...this.singList, ...res.data.data]
        console.log(this.singList)
        this.loading = false
      })
    }
  },
  mounted () {
    console.log(123)

    http({
      url: `https://show.maoyan.com/maoyansh/myshow/ajax/performances/7;st=0;p=1;s=20;tft=0;marketLevel=0?sellChannel=13&cityId=${this.cityId}&lng=0&lat=0`,
      method: 'get'
    }).then(res => {
      console.log(res.data.data)
      this.singList = res.data.data
      this.total = res.data.paging.totalHits
    })
  }

}

</script>
<style lang="scss" scoped>
*{padding:0;margin:0}
#Al{

      .swiper {
        height: 64px;
        width: 100%;
        ul{
          height: 64px;
          overflow: hidden;
        }
      }
      .swiper img{
        height: 64px;
        width:100%;
      }
      .swiper li{
        height: 64px;
        float: left;
        width: 100%;
      }

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
                 display:block;
                 width:48px;
                 height:17px;
                 line-height:17px;
                 background:pink;
                 color:red;
                 margin:0px 3px -1px 0px;
                 padding:1px 3px;
                 float:left;
                }
                .s2{
                    font-size:13px;
                }
                .s3{
                    float:right;
                    color:#cccccc;
                    font-size:12px;
                }
            }
        }
    }
}
</style>
