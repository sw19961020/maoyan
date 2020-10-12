<template>
    <div id="all" ref="sw">
        <div class="search">
            <span @click="back"><i class="iconfont icon-back"></i> 返回</span>
            <van-search v-model="value" placeholder="请输入搜索关键词" style="width:300px;"/>
        </div>
        <div class="head" ref="scroll">
            <ul v-position class="tabbar">
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/all">全部</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/singing">演唱会</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/opera">话剧歌剧</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/exhibition">休闲展览</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/art">戏曲艺术</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/music">音乐节</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/parenting">亲子演出</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/concert">音乐会</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/dance">舞蹈芭蕾</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/sports">体育赛事</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/showperiphery">演出周边</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/showbroadcast">演出直播</router-link>
                <router-link tag="li" active-class="nowChoose" to="/show/showinfo/other">其他</router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import BetterScroll from 'better-scroll'
Vue.directive('position', {
  inserted (el) {
    var nowli = 0
    var lis = document.querySelectorAll('.tabbar li')
    for (let i = 0; i < lis.length; i++) {
      lis[i].onclick = function () {
        if (i < lis.length - 3) {
          el.style.transform = 'translateX(' + -i * lis[0].clientWidth + 'px)'
        }
      }
      if (lis[i].className.includes('nowChoose')) {
        nowli = i
      }
    }
    el.style.transform = 'translateX(' + -nowli * lis[0].clientWidth + 'px)'
  }
})
export default {
  // props:['value'] ,
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      new BetterScroll(this.$refs.scroll, {
        scrollX: true,
        click: true,
        probeType: 3
      })
    },
    back () {
      this.$router.push('/show')
    }
  }
}
</script>

<style scoped lang="scss">
    #all{
        height: 100%;
        overflow: hidden;
        width: 100%;
    }
    .search{
      display: flex;
      height: 50px;
      line-height: 50px;
      span{
        width: 80px;
        text-align: center;
        i{
          color: blue;
          font-size: 18px;
        }
      }
    }
    .head{
        width: 100%;
        overflow-x: hidden;
        height: 40px;
        position: relative;
        .tabbar{
            left: 0;
            top: 0;
            position: absolute;
            background-color: #eee;
            display: flex;
            height: 40px;
            line-height: 40px;
            width: auto;
            overflow: auto;
            li{
                width: 94px;
                text-align: center;
                &.nowChoose{
                    border-bottom: 3px solid red;
                    color: red;
                }
            }
        }
    }
</style>
