<template>
    <div>
        <div class="head">
            <p>
                <span @click="citypage">{{ cityName }}</span>
                <van-icon name="arrow-down" color="black"/>
            </p>
            <van-search v-model="value" placeholder="请输入搜索关键词" style="width:300px;"/>
        </div>

        <!-- <router-link tag="div" to="/show/showinfo" style="height: 50px;background:blue;">详细</router-link>
        <router-link tag="div" to="/show/more" style="height: 50px;background:green;">更多</router-link> -->
        <ul class="index">
            <li v-for="(data,index) in imgList" :key="index" @click="gotoList(data.goto)">
                <img :src="data.img">
                <p>{{ data.name }}</p>
            </li>
        </ul>
        <div class="more">
            <router-link tag="div" to="/show/more">更多</router-link>
        </div>
            <van-cell v-for="item in showList" :key="item.shopName" :title="item.shopName"/>
        <ul class="bom">
            <router-link tag="li" active-class="nowChoose" to="/show/index">
                <i class="iconfont icon-favorite"></i>
                <span>首页</span>
            </router-link>
            <router-link tag="li" active-class="nowChoose" to="/show/buy">
                <i class="iconfont icon-form"></i>
                <span>订单</span>
            </router-link>
            <router-link tag="li" active-class="nowChoose" to="/film">
                <i class="iconfont icon-close"></i>
                <span>返回</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import { Search, NavBar, Icon } from 'vant'
import { mapState, mapMutations, mapActions } from 'vuex'

Vue.use(Search).use(NavBar).use(Icon)

export default {
  data () {
    return {
      value: '',
      imgList: [{ img: 'https://img.meituan.net/kylisean/b132e8d30be554486b8c909c7d16f7c15282.png', name: '演唱会', goto: '/show/showinfo/singing' }, { img: 'https://img.meituan.net/kylisean/5cc92a5a6bb19618f7d2b31433a2a2f24956.png', name: '话剧歌剧', goto: '/show/showinfo/opera' }, { img: 'https://img.meituan.net/kylisean/2b3d5971c31e8a39e181bd07f3c42d824737.png', name: '休闲展览', goto: '/show/showinfo/exhibition' }, { img: 'https://img.meituan.net/kylisean/8d6764a0cee35332f44976f84b188c444767.png', name: '戏曲相声', goto: '/show/showinfo/art' }, { img: 'https://img.meituan.net/kylisean/cce8a904f6489abeff04f9d9555dd77f4052.png', name: '亲子/艺术', goto: '/show/showinfo/parenting' }]
    }
  },
  computed: {
    ...mapState('showcityModule', ['cityName', 'cityId']),
    ...mapState('showcinemaModule', ['cinemaList']),
    showList () {
      if (this.value === '') {
        return []
      }
      return this.cinemaList.filter(item => item.address.toUpperCase().includes(this.value.toUpperCase()) || item.shopName.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  methods: {
    ...mapMutations('showcinemaModule', ['setcinemaList', 'clearcinemaList']),
    ...mapActions('showcinemaModule', ['getcinemaList']),
    citypage () {
      this.clearcinemaList()
      this.$router.push('/show/showcity')
    },
    gotoList (url) {
      this.$router.push(url)
    }
  },
  mounted () {
    if (this.cinemaList.length === 0) {
      this.getcinemaList(this.cityId)
    } else {
      console.log('放心走的是缓存，不消耗流量！！！')
    }
  }
}
</script>

<style lang="scss" scoped>
    .head{
        display: flex;
        height: 40px;
        line-height: 40px;
        p{
            margin-left: 10px;
            width: 80px;
            text-align: center;
        }
    }
    .more{
        margin: 20px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 25px;
        background-color: coral;
    }
    .index{
        margin-top: 20px;
        width: 100%;
        display: flex;
        li{
            width: 20%;
            flex: 1;
            text-align: center;
            img{
                width: 80%;
            }
            p{
                font-size: 14px;
                color: #666;
            }
        }
    }
    .bom{
        background-color: #eee;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        display: flex;
        width: 100%;
        li{
            display: flex;
            flex-direction: column;
            height: 50px;
            text-align: center;
            flex: 1;
            &.nowChoose{
                color: red;
            }
            i{
                line-height: 28px;
                flex: 1;
                font-size: 18px;
            }
            span{
                line-height: 15px;
                flex: 1;
                font-size: 13px;
            }
        }
    }
</style>
