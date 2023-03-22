<template>
  <div class="lg:w-9/12 mx-auto lg:mt-20 mt-5">
    <div
      class="
        uppercase
        font-bold
        blue
        text-4xl
        line-height-46px
        lg:text-left
        text-center
      "
    >
      Últimos <br />Artículos
    </div>
    <div class="md:flex blue mt-4 lg:mb-9 mb-4 lg:mx-0 lg:w-auto mx-auto w-min">
      <label
        class="
          uppercase
          text-black
          md:mr-5
          lg:mb-0
          mb-3
          whitespace-nowrap
          align-middle
          lg:pt-2
          md:pt-5
        "
      >
        Ordenar por:
      </label>
      <div class="md:flex lg:mt-0 mt-3">
        <select
          name="date"
          class="rounded-sm sort-by pl-3 py-1 md:mr-7 lg:mb-0 mb-3"
        >
          <option value="">FECHA</option>
        </select>
        <select name="tipo" class="rounded-sm sort-by pl-3 py-1">
          <option value="">TIPO</option>
        </select>
      </div>
    </div>
    <div class="relative overflow-x-hidden Article">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
          v-for="article in articles" :key="article.id">
          <div class="mx-auto lg:w-80">
            <div class="h-60">
              <img
                :src="article.imagen"
                class="lg:w-80 w-full h-60 object-cover"
              />
            </div>
            <div class="uppercase leading-none lg:w-80 w-full lg:p-0 p-5">
              <div class="flex">
                <span
                  class="
                    font-bold
                    text-sm text-center text-white
                    bg-red
                    w-1/3
                    inline-block
                    py-0.5
                    px-1
                  "
                  :style="{ background: article.category.color }"
                >
                  {{ article.category.categoria_nm }}
                </span>
                <span class="text-sm pl-3 py-0.5 gray border-t border-green w-full">
                  {{ $moment(article.fecha).format("MMMM DD, YYYY") }}
                </span>
              </div>
              <p
              class="
                text-2xl
                gray
                heading
                font-bold
                pt-5
                mb-10
                lg:w-80
                w-full
                h-28
              "
            >
              {{ article.titulo }}
              </p>
              <p
                class="
                  text-sm
                  gray
                  sub-heading
                  normal-case
                  text-sm
                  lg:mb-0
                  mb-5
                  lg:w-80
                  w-full
                  h-14
                "
              >
                {{ article.resumen }}
              </p>
              <button
                class="
                  uppercase
                  float-right
                  p-2
                  gray
                  font-bold
                  read-more
                  border-sm
                  text-center
                "
              >
                leer mas
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next absolute pl-0">
        <i class="fas fa-chevron-right text-4xl"></i>
      </div>
      <div class="swiper-button-prev absolute right-0">
        <i class="fas fa-chevron-left text-4xl"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min";
import "swiper/swiper-bundle.min.css";
export default {
  props: {
    articles: Array,
  },
  data() {
    return {};
  },
  mounted() {
    new Swiper('.Article', {
      loop: true,
      loopFillGroupWithBlank: true,
      slidesPerGroup: 1,
      navigation: {
        prevEl: ".fa-chevron-left",
        nextEl: ".fa-chevron-right",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        1023: {
          slidesPerView: 1,
        },
      },
    });
  },
  //mounted() {
  // this.fetchData();
  //},
  methods: {
    // async fetchData() {
    //   await this.$axios.$get('/api/main/home')
    //     .then(response => {
    //       this.articles = response.articulos1;
    //     });
    // }
  },
};
</script>

<style lang="scss" scoped>
.blue {
  color: #1c496b;
}
.gray {
  color: #3c3c3b;
}
.line-height-46px {
  line-height: 46px;
}
.swiper-button-next, .swiper-button-prev {
  top: 39%;
  &::after {
    content: "none";
  }
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev {
  left: 0;
}
.border-green {
  border-color: #00A99D;
}
.fa-chevron-left, .fa-chevron-right {
  color: #ffffff;
}
.sort-by {
  border: 1px solid #1c496b;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: url("static/img/icon/chevron-down.png") no-repeat;
  background-size: 20px 12px;
  background-position: 85% 50%;
  width: 120px;
  height: 40px;
}
.heading {
  font-size: 25px;
  line-height: 35px;
}
.read-more {
  letter-spacing: 0.25em;
  border: 1px solid #3c3c3b;
  width: 160px;
  height: 40px;
}
</style>