<template>
    <div class="swiper-container newSwiper">
        <div class="swiper-wrapper">
            <!-- <div class="swiper-slide">Slide 1</div> -->
            <slot name="slide"></slot>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
export default {
  mounted () {
    new Swiper('.newSwiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true
    })
  }
}
</script>
