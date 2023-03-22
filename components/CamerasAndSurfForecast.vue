<template>
  <div class="lg:w-9/12 w-11/12 mx-auto mb-10">
    <div
      class="
        uppercase
        text-4xl
        font-bold
        mt-10
        mb-5
        blue
        line-height-46px
        lg:text-left
        text-center
      "
    >
      CáMARAS<br />Y SURF FORECAST
    </div>
    <div class="lg:w-full">
      <!-- <ul class="flex lg:flex-wrap flex-nowrap justify-left lg:invisible lg:h-0 lg:w-0 visible w-auto h-auto">
        <div class="swiper Forecast">
          <div class="swiper-wrapper">
            <li class="swiper-slide" v-for="list in cameras_forecast" :key="list.id">
              <NuxtLink :to="{ name: 'playas-name', params: { name: list.path }}">
                <div class="">
                  <div class="thumbnail relative">
                    <img :src="list.imagen" class="image" />
                    <img
                      :src="require(`~/static/img/icon/star.png`)"
                      class="absolute top-3 right-3"
                    />
                  </div>
                  <div
                    class="
                      detail
                      rounded-sm
                      px-5
                      uppercase
                      lg:static
                      absolute
                      top-0
                      lg:top-10
                    "
                  >
                    <img
                      src="~/static/img/icon/play_button.png"
                      class="
                        lg:hidden
                        visible
                        mx-auto
                        lg:mt-0
                        mt-12
                        lg:mb-0
                        mb-5
                      "
                    />
                    <div class="py-3 text-2xl lg:text-sm text-center lg:text-left">
                      <span class="font-bold">{{ list.nombre }}</span>
                    </div>
                    <div
                      class="
                        border
                        w-100px
                        border-white
                        lg:border-black
                        mx-auto
                      "
                    ></div>
                    <div
                      class="
                        text-center
                        sub-title
                        my-1
                        font-bold
                        lg:font-normal
                        text-xl
                        lg:text-sm
                      "
                    >
                      Condición
                    </div>
                    <div class="lg:flex block w-full">
                      <div
                        class="
                          lg:w-1/2
                          w-full
                          mx-auto
                          block
                          text-center
                          font-black
                          good
                          bg-white
                          lg:bg-transparent
                          py-1
                          lg:py-0
                          mt-1
                          mb-2
                        "
                        :style="
                          'color:' + list.forecast[0].current_rating.color
                        "
                      >
                        {{ list.forecast[0].current_rating.rating }}
                      </div>
                      <div
                        class="
                          lg:w-1/2
                          w-full
                          text-center
                          mts
                          font-bold
                          lg:order-first
                          order-last
                        "
                      >
                        {{ list.mareaidealmin }} - {{ list.mareaidealmax }} mts
                      </div>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </li>
          </div>
        </div>
      </ul> -->
      <ul class="lg:grid lg:grid-cols-3 justify-evenly lg:gap-10">
        <li
          class="lg:w-auto w-full mb-2"
          v-for="list in cameras_forecast"
          :key="list.id"
        >
          <NuxtLink :to="{ name: 'playas-name', params: { name: list.path } }">
            <div class="relative">
              <div class="thumbnail lg:h-44 h-24 relative mx-auto w-full">
                <img :src="list.imagen" class="w-full image lg:h-44 h-24" />
                <img
                  :src="require(`~/static/img/icon/star.png`)"
                  class="absolute top-3 right-3 lg:flex hidden"
                />
              </div>
              <div
                class="
                  detail
                  rounded-sm
                  uppercase
                  lg:static
                  absolute
                  top-0
                  lg:top-10 lg:w-auto lg:h-auto
                  w-full
                  lg:h-auto 
                  h-24
                  lg:block
                  flex
                  lg:shadow
                  lg:px-3
                "
              >
                <div class="lg:block flex">
                  <img
                  src="~/static/img/icon/play_button.png"
                  class="lg:hidden visible mx-4 my-auto w-10 h-10"
                />
                <div class="text-2xl lg:text-sm flex items-center text-left lg:px-5 lg:w-4/12 lg:whitespace-nowrap lg:py-3">
                  <span class="font-bold">{{ list.nombre }}</span>
                </div>
                </div>
                <div class="border-t-2 border-gray-700 lg:block hidden w-full py-1">
                  <div
                    class="
                      text-center
                      sub-title
                      my-1
                      font-bold
                      lg:font-normal
                      text-xl
                      lg:text-sm
                    ">
                    Condición
                  </div>
                  <div class="lg:flex block w-full h-14">
                    <div
                      class="
                        lg:w-1/2
                        w-full
                        mx-auto
                        block
                        text-center
                        font-black
                        good
                        bg-white
                        lg:bg-transparent
                        py-1
                        lg:py-0
                        my-auto
                      "
                      :style="'color:' + list.forecast[0].current_rating.color"
                    >
                      {{ list.forecast[0].current_rating.rating }}
                    </div>
                    <div
                      class="
                        lg:w-1/2
                        w-full
                        text-center
                        mts
                        font-bold
                        lg:order-first
                        order-last
                        my-auto
                      "
                    >
                      {{ list.mareaidealmin }} - {{ list.mareaidealmax }} mts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Swiper from 'swiper/swiper-bundle.min';
// import 'swiper/swiper-bundle.min.css';
export default {
  props: {
    cameras_forecast: Array,
  },
  data() {
    return {
      mobile: null,
    };
  },
  async mounted() {
    // new Swiper('.Forecast', {
    //   loop: true,
    //   loopFillGroupWithBlank: true,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   }
    // })
  },
};
</script>

<style lang="scss" scoped>
.blue {
  color: #1c496b;
}
.swiper-slide {
  min-width: 270px !important;
}
.line-height-46px {
  line-height: 46px;
}
.detail {
  background: #f0f0f0;
  border-radius: 0px 0px 5px 5px;
  color: #3c3c3b;
}
@media only screen and (max-width: 1023px) {
  .detail {
    border-radius: 0px 0px 5px 5px;
    color: #ffffff;
    background: linear-gradient(180deg, #1c496b00 0%, #1c496b 76.88%);
    border-radius: 2px;
  }
  .thumbnail {
    .image {
      z-index: -1;
      object-fit: fill;;
    }
  }
}
</style>