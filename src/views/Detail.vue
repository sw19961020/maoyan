<template>
    <div v-if="detailMovie">
            <div id="header">{{detailMovie.nm}}</div>
            <div id="detailMask">
                <div class="mask">
                    <div class="detailImg"><img :src="detailMovie.img | imgFilter"></div>
                    <div class="detailInfo">
                        <div class="nm">{{detailMovie.nm}}</div>
                        <div class="sc">{{detailMovie.sc}} <span>（{{detailMovie.wish}}人评）</span></div>
                        <div class="cat">{{detailMovie.cat}}</div>
                        <div class="src">{{detailMovie.src}}/{{detailMovie.dur}}分钟</div>
                        <div class="pubDesc">{{detailMovie.pubDesc}}</div>
                    </div>
                </div>
                <div class="detailHeader" :style="'background-image:url('+Bgfilter()+')'">
                </div>
            </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter('imgFilter', (img) => {
  return img.replace(/w.h/, '/110.150/')
})
Vue.filter('BgFilter', (img) => {
  return img.replace(/w.h/, '/9999.9999/')
})
export default {
  data () {
    return {
      detailMovie: null
    }
  },
  methods: {
    Bgfilter () {
      return this.detailMovie.img.replace(/w.h/, '/9999.9999/')
    }
  },
  mounted () {
    // console.log(this.$route.params)
    // 这里拿到通过热映页传过来的ID通过this.$route.params.id动态渲染
    axios.get(`/ajax/detailmovie?movieId=${this.$route.params.id}&optimus_uuid=57114740078F11EBA119977D90BC8F7E76C42B80CE334F5986AD9102EAADDB4C&optimus_risk_level=71&optimus_code=10`
    ).then(res => {
      console.log(res.data.detailMovie)
      this.detailMovie = res.data.detailMovie
    })
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
            background: #000;
            opacity: .8;
            .detailImg{
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
            .nm{
                font-size: 20px;
                margin-bottom: 20px;
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
</style>
