<template>
    <div>
        <van-index-bar :index-list="cityletter" @select="handleClick">
            <div v-for="(data,index) in cityList" :key="index">
                <van-index-anchor :index="data.type"></van-index-anchor>
                <van-cell v-for="item in data.list" :key="item.nm" :title="item.nm" @click="cityedit(item.nm , item.id)"/>
            </div>
        </van-index-bar>
    </div>
</template>

<script>
import Vue from 'vue'
import http from '@/util/ajax.js'
import { IndexBar, IndexAnchor, Toast, Cell } from 'vant'
import { mapMutations } from 'vuex'
Vue.use(IndexBar)
Vue.use(IndexAnchor).use(Cell)
export default {
  data () {
    return {
      cityList: []
    }
  },
  mounted () {
    http({
      url: 'https://show.maoyan.com/maoyansh/myshow/ajax/config/maoyan-show-m-web.frontEnd.config.cities?sellChannel=13&cityId=1&lng=0&lat=0',
      method: 'get'
    }).then(res => {
      this.cityinfo(JSON.parse(res.data.data))
    })
  },
  methods: {
    ...mapMutations('showcityModule', ['setcityName', 'setcityId']),
    cityinfo (datalist) {
      const letterArray = []
      for (let code = 65; code < 91; code++) {
        letterArray.push(String.fromCharCode(code))
      }
      letterArray.forEach((letter) => {
        var list = datalist.filter((v) => {
          return v.py.substring(0, 1).toUpperCase() === letter
        })
        if (list.length > 0) {
          this.cityList.push({
            type: letter,
            list: list
          })
        }
      })
    },
    handleClick (index) {
      Toast(index)
    },
    cityedit (name, id) {
      this.setcityName(name)
      this.setcityId(id)
      this.$router.push('/show/index')
    }
  },
  computed: {
    cityletter () {
      return this.cityList.map(v => {
        return v.type
      })
    }
  }

}
</script>
