<template>
    <div id="all" >
        <div id="head" v-if='expectedList.length'>
            <!-- <van-list
             v-model="loading1"
             :finished="finished1"
             finished-text="没有更多了"
             @load="onLoadE"
             :immediate-check='false'
             class="ul"
            > -->
            <h2>近期最受期待</h2>
            <comingsoon-swiper :perslide="3" class="ul">
                    <van-cell v-for="(data,index) in expectedList" :key="index"  class="swiper-slide li">
                        <img :src=" data.img | imgFilter "/>
                        <h3>{{data.nm}}</h3>
                        <p>{{data.comingTitle | dataFilter}}</p>
                    </van-cell>
            </comingsoon-swiper>
        <!-- </van-list> -->
        </div>
        <div id="body">
            <van-list
             v-model="loading"
             :finished="finished"
             finished-text="没有更多了"
             @load="onLoad"
             :immediate-check='false'
            >
                <van-cell v-for="(data,index) in comingList" :key="index" >
                <h2>{{data.comingTitle}}</h2>
                <div class="all">
                <img :src=" data.img | imgFilter "/>
                <div class="a">
                <h3>{{data.nm}}</h3>
                <div class="d1"><span>{{data.wish}}</span>人想看</div>
                <div class="d2">主演：{{data.star}}</div>
                <div class="d3">{{data.rt}}上映</div>
                </div>
                </div>
                </van-cell>
             </van-list>
        </div>
    </div>
</template>
<script>
import http from '@/util/ajax'
import Vue from 'vue'
import comingsoonSwiper from '../swiper/ComingSoonSwiper'
import { List, Cell } from 'vant'

Vue.use(List).use(Cell)
Vue.filter('imgFilter', function (path) {
  return path.replace('w.h', '')
})
Vue.filter('dataFilter', function (data) {
  return String(data.split(' ').slice(0, 1))
})
export default {
  data () {
    return {
      expectedList: [],
      comingList: [],
      loading: false,
      finished: false,
      //   finished1: false,
      //   loading1: false,
      startCurrent: 0,
      movieIds: [],
      endCurrent: 10,
      offset: 0
    }
  },
  methods: {
    handleImg (path) {
      return path.replace('w.h', '')
    },
    onLoad () {
      console.log('到底了')
      //   this.current++ve
      this.startCurrent += 10
      this.endCurrent += 10
      console.log(this.startCurrent, this.endCurrent)

      var newMoveID = this.movieIds.slice(this.startCurrent, this.endCurrent)
      http.get(`/moreComingList?ci=65&token=&limit=10&movieIds=${newMoveID.join('%2C')}&optimus_uuid=B8FA9760055D11EB8BC8D9E9097A01F9CCD7E7F88BCF4F8785DECF8F7D4184EB&optimus_risk_level=71&optimus_code=10`).then(res => {
        this.comingList = [...this.comingList, ...res.data.coming]
        console.log(this.comingList)
        this.loading = false
      })
    }
    // onLoadE () {
    //   console.log('到底了e')
    //   //   this.current++
    //   this.offset += 10
    //   axios.get(`/ajax/mostExpected?ci=65&limit=10&offset=${this.offset}&token=&optimus_uuid=B8FA9760055D11EB8BC8D9E9097A01F9CCD7E7F88BCF4F8785DECF8F7D4184EB&optimus_risk_level=71&optimus_code=10`).then(res => {
    //     this.expectedList = [...this.expectedList, ...res.data.coming]
    //     console.log(this.expectedList)
    //     this.loading = false
    //   })
    // }
  },
  components: {
    comingsoonSwiper
  },
  mounted () {
    http.get('/mostExpected?ci=65&limit=10&offset=0&token=&optimus_uuid=836FEBC00A0011EB8D4303BFEF63A30F89399AC08A3A4DDB9AEE9AF4D9BA15ED&optimus_risk_level=71&optimus_code=10').then(res => {
      this.expectedList = res.data.coming
      console.log(this.expectedList, res, 1234)
    })
    http.get('/comingList?ci=65&token=&limit=10&optimus_uuid=836FEBC00A0011EB8D4303BFEF63A30F89399AC08A3A4DDB9AEE9AF4D9BA15ED&optimus_risk_level=71&optimus_code=10').then(res => {
      this.comingList = res.data.coming
      this.movieIds = res.data.movieIds
    })
  }
}
</script>
<style lang="scss" scoped>
#all{
    width:100%;
    height: 100%;
    background:#e7e5e5;
    margin-bottom:50px;
    margin-top:40px;
#head{
       background: #ffffff;
    h2{
        font-weight:normal;
        margin:0px 10px 0px 15px;
        font-size:14px;
        color:#333333;
    }
.ul{
    width:100%;
    height:164px;
    padding:12px 0px 12px 15px;
    margin:0px 0px 10px;

    .li{
        list-style: none;
        width:85px;
        height:160px;
        float:left;
        //padding-right:10px;
    img{
      width:85px;
      height:115px;

    }
    h3{
        width:85px;
        height:17px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size:13px;
        color:#222222;
    }
    p{
        font-size:12px;
        color:#999999;
    }
    }
}
}
#body{
  background:white;
  h2{
      font-size:14px;
      font-weight:normal;
      color:#333333;
      margin-left:15px;
  }
  .all{
      width:100%;
      height:114px;
      margin:0px 0px 0px 15px;
      padding:12px 14px 12px 0px;
      img{
          width:64px;
          height:90px;
          float:left;
          margin-right:10px;
      }
      .a{
         // border-bottom:1px solid #e7e5e5;
          width:214px;
          height:114px;
          margin:0px 0px 0px 74px;
          padding:0px 14px 0px 0px;

      h3{
          width:147px;
          height:24px;
          color:#333333;
          font-size:17px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding:0px 5px 0px 0px;
      }
      .d1{
         width:147px;
         height:15px;
         color:#666666;
         font:13px;
         margin:0px 0px 0px -2px;
         span{
             color:#FAAF00;
             font-size:15px;
             font-weight:bold;
         }
      }
      .d2{
          width:147px;
          height:19px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color:#666666;
          font:13px;
          margin:6px 0px 0px;
      }
      .d3{
          width:147px;
          height:15px;
          color:#666666;
          font:13px;
          margin:6px 0px 0px;
      }
  }
  }
}
}
</style>
