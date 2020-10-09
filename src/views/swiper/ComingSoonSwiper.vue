<template>
  <div class="swiper-container" :class="swiperclass" >
    <div class="swiper-wrapper" >
        <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle' // 引入swiper.js
import 'swiper/swiper-bundle.min.css' // 引入swiper.css

export default {
  props: {
    perslide: {
      type: Number,
      default: 1
    },
    swiperclass: {
      type: String,
      default: 'swiper-container'
    }
  },
  mounted () {
    // console.log(this.swiperclass)
    this.$nextTick(() => {
      new Swiper('.' + this.swiperclass, {
        slidesPerView: this.perslide,
        spaceBetween: -25,
        freeMode: true
      })
    })
  }
}
</script>

<style lang="scss" scoped>
// .swiper-wrapper{
//   img{
//     width:100%;
//   }
// }
</style>
