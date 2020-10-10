<template>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
      @load="onLoad"
      :immediate-check = "false"
    >
            <div v-html="hotDom"></div>
    </van-list>
</template>
<script>
import http from '@/util/ajax'
import { List } from 'vant'
import Vue from 'vue'
Vue.use(List)
export default {
  data () {
    return {
      hotDom: null,
      loading: false, // 是否正在加载中,防止多次触发
      finished: false,
      current: 1
    }
  },
  mounted () {
    http.get('/moreCinemas?day=2020-10-09&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1602207254355&cityId=65&optimus_uuid=57114740078F11EBA119977D90BC8F7E76C42B80CE334F5986AD9102EAADDB4C&optimus_risk_level=71&optimus_code=10').then((res) => {
      this.hotDom = res.data
    })
  },
  methods: {
    onLoad () {
      this.current++
      http.get(`/moreCinemas?day=2020-10-09&offset=${this.current * 20}&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1602207254355&cityId=65&optimus_uuid=57114740078F11EBA119977D90BC8F7E76C42B80CE334F5986AD9102EAADDB4C&optimus_risk_level=71&optimus_code=10`).then((res) => {
        this.hotDom += res.data
        this.loading = false
        if (res.data === '') {
          this.finished = true
        }
      })
    }
  }
}
</script>
