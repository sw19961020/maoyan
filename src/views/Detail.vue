<template>
    <div v-if="detailMovie">
        <!-- detailHeader -->
        <div id="header">{{detailMovie.nm}}</div>
        <div id="detailMask">
            <div class="mask">
                <div class="detailImg"><img :src="detailMovie.img"></div>
                <div class="detailInfo">
                    <div class="nm">{{detailMovie.nm}}</div>
                    <div class="enm">{{detailMovie.enm}}</div>
                    <div class="sc"  v-if="detailMovie.globalReleased === true">{{detailMovie.sc}}<span>（{{detailMovie.wish}}人评）</span></div>
                    <div class="sc"  v-if="detailMovie.globalReleased === false">{{detailMovie.wish}}人想看</div>
                    <div class="cat">{{detailMovie.cat}}</div>
                    <div class="src">{{detailMovie.src}}/{{detailMovie.dur}}分钟</div>
                    <div class="pubDesc">{{detailMovie.pubDesc}}</div>
                </div>
            </div>
            <div class="detailHeader" :style="'background-image:url('+ Bgfilter() +')'"></div>
        </div>
        <!-- showDays -->
        <div id="showDays"  v-if="showDaysDates !== []">
            <ul id="timeline">
                <li v-for="day in showDaysDates" :key="day.date" class="showDay active">{{day.date | dateFilter}}</li>
            </ul>
        </div>
        <!-- cinemaList -->
        <div v-if="cinemaList.cinemas !== []">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="我是有底线的"
            @load="onLoad"
            :immediate-check = "false"
            >
                <van-cell v-for="item in cinemaList" :key="item.id">
                    <div>{{item.nm}}</div>
                </van-cell>
            </van-list>
        </div>
    </div>
</template>
<script>
import http from '../util/ajax'
import Vue from 'vue'
import { List, Cell } from 'vant'
Vue.use(List).use(Cell)
Vue.filter('dateFilter', (data) => { // 处理日期格式
//   return data.substring(0, 4).replace(moment().format())
})
export default {
  data () {
    return {
      detailMovie: null,
      showDaysDates: [],
      cinemaList: [],
      loading: false, // 懒加载,是否正在加载中,防止多次触发
      finished: false,
      current: 1
    }
  },
  mounted () {
    // 拿到通过热映页传过来的ID通过this.$route.params.id动态渲染
    http.get(`/detailmovie?movieId=${this.$route.params.id}&optimus_uuid=57114740078F11EBA119977D90BC8F7E76C42B80CE334F5986AD9102EAADDB4C&optimus_risk_level=71&optimus_code=10`
    ).then(res => {
      this.detailMovie = res.data.detailMovie
      this.detailMovie.img = this.detailMovie.img.replace('/w.h/', '/110.150/')
    })

    /* detailListData */
    http.post('/movie?forceUpdate=1602317257862', 'movieId=1328712&day=2020-10-11&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1602405053498&cityId=65&optimus_uuid=57114740078F11EBA119977D90BC8F7E76C42B80CE334F5986AD9102EAADDB4C&optimus_risk_level=71&optimus_code=10').then(res => {
      console.log(res.data.cinemas, res.data.showDays.dates)
      this.showDaysDates = res.data.showDays.dates
      this.cinemaList = res.data.cinemas
    })
  },
  methods: {
    Bgfilter () {
      return this.detailMovie.img.replace(/w.h/, '/2000.2000/')
    },
    onLoad () {
      this.current++
      http.post('/movie?forceUpdate=1602317257862', `movieId=1328712&day=2020-10-11&offset=${this.current * 20}&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1602405053498&cityId=65&optimus_uuid=57114740078F11EBA119977D90BC8F7E76C42B80CE334F5986AD9102EAADDB4C&optimus_risk_level=71&optimus_code=10`).then(res => {
        this.cinemaList = res.data.cinemas
        this.loading = false
        if (res.data.cinemas === []) {
          this.finished = true
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    #header{
        height: 50px;
        width: 100%;
        line-height: 50px;
        text-align: center;
        background: #e54847;
        color: #ffff;
        position: sticky;
    }
    #detailMask{
        position: relative;
    }
    .mask{
        height: 160px;
        width: 100%;
        padding: 19px 0px 19px 0px;
        padding-top: 38px;
        position: absolute;
        display: flex;
            z-index: 10;
            background: rgb(32, 30, 30);
            opacity: .9;
            .detailImg{
            overflow: hidden;
            z-index: 20;
            flex: 1;
            margin-left: 20px;
        }
        .detailInfo{
            z-index: 20;
            flex: 2;
            margin-left: 15px;
            font-weight: bold;
            color: #fff;
            .enm{
                font-size: 10px;
                font-weight: normal;
                margin-bottom: 5px;
                color: gray;
            }
            .nm{
                margin-bottom: 10px;
            }
            .cat{
                color: gray;
                font-weight: normal;
                margin-bottom: 5px;
                font-size: 12px;
            }
            .src{
                color: gray;
                font-weight: normal;
                margin-bottom: 5px;
                font-size: 12px;
            }
            .pubDesc{
                color: gray;
                font-weight: normal;
                margin-bottom: 5px;
                font-size: 12px;
            }
            .sc{
                color: #fc0;
                font-weight: normal;
                margin-bottom: 5px;
                span{
                    color: gray;
                    font-size: 12px;
            }
            }
        }
    }
    .detailHeader{
        position: relative;
        background-position: center;
        height: 217px;
        z-index: 1;
    }
    /* dateListData */
    #showDays{
        height: 100px;
        background: #ff0;
    }
    #showDays::after{
        content: '';
        display: block;
        height: 0;
    }
</style>
