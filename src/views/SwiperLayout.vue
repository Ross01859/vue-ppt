<template>
  <swiper class="w-screen h-screen" :options="swiperOption">
    <swiper-slide
      class="w-full h-full flex items-center justify-center bg-slider1 "
    >
      <page1 />
    </swiper-slide>
    <swiper-slide
      class="w-full h-full flex items-center justify-center bg-slider2"
    >
      <page2 />
    </swiper-slide>
    <swiper-slide
      class="w-full h-full flex items-center justify-center bg-slider3"
      >Slide 3</swiper-slide
    >
    <swiper-slide
      class="w-full h-full flex items-center justify-center bg-slider4"
      >Slide 4</swiper-slide
    >
    <div class="swiper-pagination" slot="pagination">
      asdfas
    </div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.min.css";
import page1 from "./page-1.vue";
import page2 from "./page-2.vue";
export default {
  name: "swiper-example-mousewheel-control",
  title: "Mousewheel control",
  components: {
    Swiper,
    SwiperSlide,
    page1,
    page2
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="css" scoped></style>
