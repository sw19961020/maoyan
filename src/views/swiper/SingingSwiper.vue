<template>
  <div class="swiper-container" :class="swiperclass" >
    <ul class="swiper-wrapper" >
     <slot name="slide"></slot>
    </ul>
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
      new Swiper('.swiper-container', {
        slidesPerView: this.perslide,
        spaceBetween: 0,
        centeredSlides: true,
        freeMode: true,
        loop: false
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
// .swiper-wrapper{
//   width: 100%;
//   img{
//     width:100%;
//     height:64px;
//   }
// }
</style>
