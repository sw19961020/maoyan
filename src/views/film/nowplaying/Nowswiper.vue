<template>
    <div class="all">
        <div v-html="value" v-sh>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
Vue.directive('sh',
  {
    inserted (el) {
      var slide = document.querySelectorAll('.top-rated-item')
      var List = document.querySelector('.top-rated-list')
      var contenter = document.querySelector('.top-rated')
      for (var i = 0; i < slide.length; i++) {
        slide[i].className += ' swiper-slide'
        slide[i].attributes.key = slide[i].attributes[1].nodeValue
      }
      List.className += ' swiper-wrapper'
      contenter.className += ' swiper-container'
      console.log(11)
    }
  }
)
export default {
  props: ['value'],
  mounted () {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }

}
</script>
<style lang="scss" scoped>
    .all{
        overflow: hidden;
    }
</style>
