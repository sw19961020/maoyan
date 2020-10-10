<template>
    <div id="all" ref="sw">
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
    var lis = document.querySelectorAll('.tabbar li')
    for (let i = 0; i < lis.length; i++) {
      lis[i].onclick = function () {
        if (i < lis.length - 3) {
          el.style.transform = 'translateX(' + -i * lis[0].clientWidth + 'px)'
        }
      }
    }
  }
})
export default {
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
