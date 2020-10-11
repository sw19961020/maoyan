<template>
    <div v-ht class="all" v-if='hotDom'>
        <header>
            <now-swiper v-model="hotDom" v-if="isshow"></now-swiper>
            <ol>
                <li>
                    <img src="">
                    <h5></h5>
                </li>
            </ol>
        </header>

        <van-list v-model="loading" :finished="finished"  @load="onLoad" class="ulall">
            <van-cell v-for="(data, index) in filmList" :key="data.id" class="liall" @click="handleDetail(data.id, index)">
                <img :src="data.img  | filmImg">
                <aside>
                    <h2>{{ data.nm }}</h2>
                    <h5 v-if="data.sc">观众评<i>{{data.sc}}</i></h5>
                    <h5 v-else-if="data.globalReleased">暂无评分</h5>
                    <h5 v-else><strong style="color: orange;font-size: 16px;font-weight: bold;">{{ data.wish }}</strong>人想看</h5>
                    <p>{{ data.star | isnull}}</p>
                    <span>{{ data.showInfo }}</span>
                </aside>
                <div v-color class="buy">{{ data.globalReleased | isnowplaying }}</div>
            </van-cell>
            <div v-if="comeshow">
                <div v-for="item in filmList.coming" :key="item.id" class="liall">
                    <img :src="item.img  | filmImg">
                    <aside>
                        <h2>{{ item.nm }}</h2>
                        <h5 v-if="item.sc">观众评<i>{{item.sc}}</i></h5>
                        <h5 v-else-if="item.globalReleased">暂无评分</h5>
                        <h5 v-else><strong style="color: orange;font-size: 16px;font-weight: bold;">{{ item.wish }}</strong>人想看</h5>
                        <p>{{ item.star | isnull}}</p>
                        <span>{{ item.showInfo }}</span>
                    </aside>
                    <div v-color class="buy">{{ item.globalReleased | isnowplaying }}</div>
                </div>
            </div>
        </van-list>
        <main>
            <star-swiper :key="starList.length">
                <template slot="slide" >
                <div class="swiper-slide star" v-for="(data,index) in starList" :key="index">
                    <img :src="data">
                </div>
                </template>
            </star-swiper>
        </main>
        <footer>娱乐信息数据</footer>
    </div>
</template>

<script>
import Vue from 'vue'
// import axios from 'axios'
import http from '@/util/ajax'
import nowSwiper from './nowplaying/Nowswiper'
import starSwiper from './nowplaying/Starswiper'
import 'swiper/swiper-bundle.min.css'
import { List, Cell, Toast } from 'vant'
Vue.use(List).use(Cell)
Vue.component('nowSwiper', nowSwiper)
Vue.component('starSwiper', starSwiper)
Vue.filter('filmImg', (img) => {
  return img.replace(/w.h/, '/120.90/')
})

Vue.filter('isnowplaying', (data) => {
  if (data) {
    return '购票'
  } else {
    return '预售'
  }
})
Vue.filter('isnull', (data) => {
  if (data) {
    return '主演:' + data
  } else {
    return ''
  }
})
Vue.directive('ht',
  {
    inserted (el) {
      const th = document.getElementById('sw').clientHeight
      el.style.marginTop = th + 'px'
      const bh = document.getElementById('gs').clientHeight
      el.style.marginBottom = bh + 'px'
    }
  }
)
Vue.directive('color',
  {
    inserted (el) {
      if (el.innerHTML === '预售') {
        el.style.background = 'blue'
      }
    }
  }
)

export default {
  data () {
    return {
      filmList: null,
      banbalInfo: null,
      hotDom: null,
      isshow: false,
      list: [],
      loading: false,
      finished: false,
      comeshow: false,
      starList: []
    }
  },
  mounted () {
    Toast.loading({
      message: '加载中...',
      forbidClick: true
    })
    http({
      url: '/movieOnInfoList?token=&optimus_uuid=114B3620E54411EAB4B1EF6A4AAA99BA5AF1383A920A4E2AAA392AE47C42F2D5&optimus_risk_level=71&optimus_code=10',
      method: 'get'
    }).then(res => {
      this.filmList = res.data.movieList
    })
    http({
      url: '/topRatedMovies?token=&optimus_uuid=114B3620E54411EAB4B1EF6A4AAA99BA5AF1383A920A4E2AAA392AE47C42F2D5&optimus_risk_level=71&optimus_code=10',
      method: 'get'
    }).then(res => {
      this.hotDom = res.data
      this.isshow = true
    })
  },
  methods: {
    onLoad () {
      http({
        url: '/moreComingList?token=&movieIds=1263349%2C1326724%2C1210778&optimus_uuid=114B3620E54411EAB4B1EF6A4AAA99BA5AF1383A920A4E2AAA392AE47C42F2D5&optimus_risk_level=71&optimus_code=10',
        method: 'get'
      }).then(res => {
        this.filmList.coming = res.data.coming
        this.comeshow = true
        setTimeout(() => {
          this.starList = ['https://p1.meituan.net/moviemachine/cba0f2c4bf69791d13586fdb0f9c8ce1167190.jpg', 'https://p0.meituan.net/170.230/movie/c6594ef2705dcaf7d9df857d228b5e1645712.jpg', 'https://p1.meituan.net/movie/3a58a26d0c756324ef9230bb4b2c992f41487.jpg', 'https://p0.meituan.net/movie/92f35f4bec2c47fa045d0b65ddc9fe1929962.jpg', 'https://p1.meituan.net/movie/de4f307bfc401d6a956202817713a90b121522.jpg']
        }, 500)
      })
      this.loading = false
      this.finished = true
    },
    handleDetail (id, index) {
      console.log(id, index)
      this.$router.push(`/detail${id}`)
    }
  }
}
</script>

<style scoped lang="scss">
    .star{
        text-align: center;
        float: left;
        height: 120px;
        img{
            height: 120px;
        }
    }
    .all{
        overflow: hidden;
        .ulall,ul{
            overflow: hidden;
            display: block;
            width: 100%;
            .liall,li{
                width: 100%;
                margin: 10px;
                overflow: hidden;
                position: relative;
                .buy{
                    color: #fff;
                    background-color: red;
                    position: absolute;
                    right: 10px;
                    height: 28px;
                    line-height: 28px;
                    width: 50px;
                    text-align: center;
                    top: 50%;
                    margin-top: -14px;
                    font-size: 13px;
                    border-radius: 5px;
                }
                img{
                    float: left;
                }
                aside{
                    margin-left: 10px;
                    float: left;
                    height: 100%;
                    h2{
                        font-size: 17px;
                    }
                    h5{
                        margin-top: 8px;
                        font-size: 13px;
                        font-weight: 100;
                        i{
                            color: orange;
                            font-weight: bold;
                            font-style: normal;
                            font-size: 16px;
                            margin-left: 5px;
                        }
                    }
                    p{
                        margin-top: 3px;
                        font-size: 13px;
                        width: 220px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    span{
                        margin-top: 3px;
                        font-size: 13px;
                    }
                }
            }
        }
    }
    footer{
        text-align: center;
    }
</style>
