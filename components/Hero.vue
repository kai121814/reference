<template>
  <div class="hero lg:flex bg lg:h-96">
    <div class="lg:w-9/12 mx-auto overflow-hidden">
      <div class="relative Hero">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
            v-for="item in articles"
            :key="item.id">
            <div class="flex mx-auto banner-image w-full lg:h-96">
              <div class="lg:flex bg-white mx-auto lg:h-96">
                <div class="lg:order-2 frame lg:w-2/3">
                  <img class="rounded-bl-4xl w-full object-cover"
                    :src="item.imagen">
                </div>
                <div class="lg:order-1 lg:pt-9 lg:pl-14 lg:pr-4 p-5 lg:w-1/3">
                  <!-- <div class="curved-corner-topright bottom-px absolute lg:visible invisible w-0 h-0 lg:h-auto lg:w-auto"></div> -->
                  <h1 class="heading font-bold mb-3 lg:h-52 h-auto overflow-hidden">
                    {{item.titulo}}
                  </h1>
                  <p class="sub-heading mb-4 block h-12">
                    {{item.resumen}}
                  </p>
                  <NuxtLink :to="'/articulo/' + item.url">
                    <button class="
                      read-more 
                      text-white 
                      uppercase 
                      rounded-sm 
                      font-bold 
                      block 
                      lg:mx-0 
                      mx-auto">
                        leer mas
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="absolute top-1/3 mt-12 pl-1">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="absolute top-1/3 mt-12 right-1">
          <i class="fas fa-chevron-right"></i>
        </div> -->
        <div class="swiper-button-next absolute pl-1">
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="swiper-button-prev absolute right-1">
          <i class="fas fa-chevron-left"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper/swiper-bundle.min';
  import 'swiper/swiper-bundle.min.css';
  export default {
    props: {
      articles: Array
    },
    data(){
      return {
      }
    },
    mounted() {
      new Swiper('.Hero', {
        loop: true,
        loopFillGroupWithBlank: true,
        slidesPerGroup: 1,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
      })
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-button-next {
    &::after {
      content: 'none';
    }
  }
  .swiper-button-prev {
    &::after {
      content: 'none';
    }
  }
  .bottom-px {
    bottom: 100px;
  }
  .hero {
    color: #3C3C3B;
  }
  .fa-chevron-left, 
  .fa-chevron-right {
    font-size: 40px;
    color: #3C3C3B;
  }
  .bg{
    background: linear-gradient(9.85deg, #00A99D 0%, #1C496B 100%);
  }
  .frame {
    img {
      height: 100%;
    }
  }
  .rounded-bl-4xl {
    border-bottom-left-radius: 100px;
  }
  .heading{
    font-size: 36px;
    line-height: 43px;
  }
  .sub-heading{
    letter-spacing: 0.01em;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .curved-corner-topright {
    width: 100px;
    height: 100px;
    overflow: hidden;
    background: none;
    transform: rotate(90deg);
    margin: 0 0 0 -99px;
  }
  .curved-corner-topright:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: 50px -50px 0 0 #fff;
  }
  .read-more {
    background: #FFA800;
    width: 200px;
    height: 40px;
  }
  ul{
    .active {
      background: #00A99D!important;
    }
    .page {
      width: 10px;
      height: 10px;
      background: #3C3C3B;
    }
  }
  .pagination-slider-prev .fas:before {
    content:"";
    display: block;
    width: 40px;
    height: 40px;
    background-image: url(~/static/img/icon/left-arrow.svg);
    background-repeat: no-repeat;
    background-size:contain;
  }
  .pagination-slider-next .fas:before {
    content:"";
    display: block;
    width: 40px;
    height: 40px;
    background-image: url(~/static/img/icon/right-arrow.svg);
    background-repeat: no-repeat;
    background-size:contain;
  }
  @media only screen and (max-width: 1023px) {
    .swiper-button-next {
      top: 35%;
      &::after {
        content: 'none';
      }
    }
    .swiper-button-prev {
      top: 35%;
      &::after {
        content: 'none';
      }
    }
    .hero {
      height: 670px;
    }
    .frame {
      img {
        width: 100%;
      }
    }
    .heading{
      width: 100%;
    }
    .sub-heading{
      width: 100%;
      height: auto;
    }
    .rounded-bl-4xl {
      border-bottom-left-radius: 0;
    }
    .bg{
      background: none;
    }
  }
  @media only screen and (max-width: 375px) {
    .frame {
      width: 375px;
      height: 342px; 
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    }
    .fa-chevron-left,
    .fa-chevron-right {
      color: #fff;
    }
  }
  @media only screen and (max-width: 374px) {
    .banner-image {
      width: 320px;
    }
    .sub-heading{
      width: 100%;
      height: auto;
    }
    .frame {
      width: 100%;
       img {
        width: 100vw;
        height: 100%;
      }
    }
  }
</style>