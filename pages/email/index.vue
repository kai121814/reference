<template>
  <!-- separate sub components next push -->
  <div>
    <Header/>
    <div class="mt-10">
      <div class="lg:w-9/12 mx-auto lg:flex p-10 go-premium-banner">
        <div class="heading my-auto font-bold uppercase text-center">
          ¿Tienes un emprendimiento? House of brands
        </div>
        <div class="mx-auto">
          <NuxtLink to="/" class="text-center go-premium shadow text-white uppercase rounded-sm font-bold block mx-auto my-auto pt-2">
            Postula aqui
          </NuxtLink>
        </div>
      </div>
      <div class="flex w-11/12 lg:w-9/12 mx-auto pb-5">
        <div class="w-full mt-2 mb-5 font-bold uppercase text-blue lg:leading-9 lg:text-4xl text-sm whitespace-nowrap pt-14">
          REPORTE Semanal
        </div>
        <div class="w-full">
          <div class="flex float-right mt-10 mr-10">
            <span class="text-sm uppercase font-light text-blue whitespace-nowrap my-auto mr-5">
              Presentado por
            </span>
            <img src="~/static/img/thumbnail/Foto_playa.png" class="w-24 h-24"/>
          </div>
        </div>
      </div>
      <div v-for="p, i in playa" :key="i">
        <div class="lg:w-9/12 w-11/12 mx-auto mt-16 mb-3 pt-5">
          <div class="lg:flex lg:pr-10 pb-4 border-b border-color-brown">
            <div class="w-11/12">
              <div class="font-light uppercase text-blue text-2xl">
                PLAYA
              </div>
              <div class="font-black text-5xl uppercase la-boca mb-5 pb-2 lg:border-none">
                LA BOCA
              </div>
            </div>
            <div class="lg:visible invisible w-0 h-0 lg:w-24 lg:h-24 bg-gray rounded-full">
            </div>
          </div>
        </div>
        <div class="lg:flex lg:w-9/12 mx-auto pt-3 lg:mb-0 mb-5">
          <div class="lg:w-1/2 w-11/12 mx-auto lg:border-color-brown lg:pr-5">
            <div class="block">
              <div class="flex lg:mb-5 mb-3">
                <button class="lg:visible invisible h-0 w-0 rounded block bg-yellow lg:w-32 lg:h-10 shadow-md lg:mr-5">
                  <span class="sound-icon block mx-auto"></span>
                </button>
                <div class="text-2xl font-bold lg:text-center uppercase text-blue mt-1 lg:w-auto w-1/2">Condiciones generales</div>
              </div>
            </div>
            <div class="block text-black text-sm lg:mb-5">
              <p class="mb-5 block-ellipsis">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                PM: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <button class="lg:invisible lg:w-0 lg:h-0 visible w-32 h-10 rounded block bg-green-blue mx-auto lg:mt-0 mt-10 lg:mb-0 mb-5 shadow-md">
              <span class="sound-icon block mx-auto"></span>
            </button>
          </div>
          <div class="border-t border-b border-color-brown lg:border-0 lg:w-1/2 w-11/12 mx-auto pl-0 lg:pl-5 pb-5">
            <div class="border-b border-color-brown py-3">
              <div class="font-bold text-sm-1 uppercase text-blue">
                TABLA RECOMENDADA:
              </div>
              <div class="font-bold text-sm text-black">
                <span>La que mas te acomode</span>
              </div>
            </div>
            <div>
              <div class="font-bold text-sm uppercase text-blue mt-6 mb-4">
                Indicadores por nivel
              </div>
              <div>
                <ul>
                  <li class="flex">
                    <span class="font-bold text-sm text-black mt-2 mb-1 block w-24">Principiante</span>
                    <ul class="flex justify-evenly lg:w-6/12 w-8/12 h-4 mt-2.5">
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-gray"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-gray"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-gray"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-gray"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-gray"></li>
                    </ul>
                  </li>
                  <li class="flex">
                    <span class="font-bold text-sm text-black mt-2 mb-1 block w-24">Intermedio</span>
                    <ul class="flex justify-evenly lg:w-6/12 w-8/12 h-4 mt-2.5">
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-dark-blue"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-dark-blue"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-gray"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-gray"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-gray"></li>
                    </ul>
                  </li>
                  <li class="flex">
                    <span class="font-bold text-sm text-black mt-2 mb-1 block w-24">Avanzado</span>
                    <ul class="flex justify-evenly lg:w-6/12 w-8/12 h-4 mt-2.5">
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-dark-blue"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-dark-blue"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-dark-blue"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-gray"></li>
                      <li class="rounded-full lg:mt-0 mt-1.5 w-8 h-4 bg-gray"></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex lg:w-9/12 w-11/12 mx-auto lg:pt-5 lg:pb-10 pb-5 border-b border-t border-color-brown mb-10">
        <div class="lg:w-1/2 lg:pt-2">
            <div class="font-bold uppercase text-base lg:text-2xl text-blue lg:mb-1 mb-5">
              Reporte de la región
            </div>
            <div class="relative lg:w-96 lg:mx-0 mx-auto lg:h-60">
              <img src="~/static/img/thumbnail/Foto_playa.png" class="visual"/>
              <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 play-button"></span>
            </div>
            <div class="lg:mt-10 mt-1 lg:w-96 flex">
              <button class="lg:visible invisible w-0 h-0 lg:w-1/2 font-bold text-sm text-center bg-yellow uppercase text-white lg:h-8 mt-3">
                Ver pronostico region
              </button>
              <div class="flex mt-2 mx-auto">
                <span class="flex">
                  <span class="like-icon block mt-2 mr-2"></span>
                  <span class="mt-3 font-bold text-center uppercase text-brown text-xxs">525</span>
                </span>
                <span class="flex">
                  <span class="unlike-icon block mt-3 mr-2 ml-3"></span>
                  <span class="mt-3 font-bold text-center uppercase text-brown text-xxs">69</span>
                </span>
              </div>
            </div>
        </div>
        <div class="lg:visible invisible w-0 h-0 lg:h-auto relative lg:w-1/2 text-sm text-black text-justify">
          <div class="absolute -translate-y-1/2 transform top-1/2 w-11/12">
            <p class="mb-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              PM: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        playa: [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          }
        ],
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  // shorten next push and use tailwind JusInTime
  .error {
    background-color: #C8142E;
  }
  .warning {
    background-color: #FFA800;
  }
  .text-blue {
    color: #1C496B;
  }
  .text-blue-1 {
    color: #1c496b99;
  }
  .text-brown {
    color: #3C3C3B;
  }
  .text-yellow {
    color: #FFA800;
  }
  // .bg-blue {
  //   background: #1c496b99;
  // }
  .bg-dark-blue {
    background: #1C496B;
  }
  .bg-brown {
    background: #3C3C3B;
  }
  .bg-gray {
    background: #C4C4C4;
  }
  .bg-yellow {
    background: #FFA800;
  }
  .bg-green-blue {
    background-color: #00A99D;
  }
  .bg-light-blue {
    background: #7792A6;
  }
  .bg-gray {
    background: #E5E5E5;
  }
  .border-color-brown {
    border-color: #3C3C3B;
  }
  .text-sm-1 {
    font-size: 15px;
  }
  .text-xxs {
    font-size: 10px;
  }
  .green-blue-box{
    background-color: #00A99D;
    width: 40px;
    height: 40px;
  }
  .la-boca{  
    background: linear-gradient(111.71deg, #1C496B 0%, #00A99D 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
  .abstract-weekly {
    .box {
      width: 120px;
      height: 150px;
      &:hover {
        background: #3c3c3b40;
      }
    }
  }
  .general-conditons {
    .box {
      height: 240px;
    }
  }
  .panel {
    line-height: 35px;
    letter-spacing: 0.1em;
  }
  .alert-icon{
    background: url('~/static/img/icon/alert_icon.png');
    width: 32px;
    height: 30px;
  }
  .cam-icon{
    background: url('~/static/img/icon/cam_icon.png');
    width: 27px;
    height: 20px;
  }
  .calendar {
    background: url('~/static/img/icon/calendar.png');
    width: 20px;
    height: 20px;
  }
  .mts {
    width: 137px;
    height: 20px;
    text-align: center;
  }
  .wind-white-icon{
    width: 20px;
    height: 20px;
    background: url('~/static/img/icon/windy_1_white.png');
  }
  .kmh{
    width: 96px;
    height: 20px;
  }
  .ms {
    width: 137px;
    height: 20px;
  }
  .water-white-icon {
    width: 20px;
    height: 20px;
    background: url('~/static/img/icon/bx-water-2_1_white.png');
  }
  .water-white-icon-2 {
    width: 25px;
    height: 20px;
    background: url('~/static/img/icon/bx-water-2_1_25px-20px.png');
  }
  // .lists {
  //   height: 50px;
  // }
  .border-blue {
    border-top: 1px solid #1C496B;
    border-bottom: 1px solid #1C496B;
  }
  .carret-down {
    width: 20px;
    height: 12px;
    background: url('~/static/img/icon/Flecha_der_yellow.png') no-repeat;
  }
  .title {
    font-size: 36px;
  }
  .comment-icon {
    width: 25px;
    height: 25px;
    background-image: url('~/static/img/icon/comment_icon_25px.png');
  }
  .name {
    background: #1C496B;
    width: 280px;
    height: 40px;
    font-size: 15px;
    line-height: 22px;
  }
  .gray-box {
    background: #F0F0F0;
  }
  .border-top-gray {
    border-top: 1px solid #3C3C3B;
  }
  .number {
    font-size: 10px;
    line-height: 15px;
    color: #3C3C3B;
  }
  .date {
    font-size: 10px;
    line-height: 15px;
  }
  .like-icon {
    background-image: url('~/static/img/icon/like_icon.png');
    width: 24px;
    height: 20px;
  }
  .unlike-icon {
    background-image: url('~/static/img/icon/unlike_icon.png');
    width: 24px;
    height: 20px;
  }
  .white-circle {
    font-size: 10px;
    line-height: 25px;
    width: 25px;
    height: 25px;
  }
  .main-title {
    font-size: 36px;
  }
  .date-day {
    font-size: 15px;
    line-height: 22px;
  }
  .clock {
    background-image: url('~/static/img/icon/ios-clock-outline_1_.png');
    width: 22px;
    height: 22px;
  }
  .time {
    color: #3C3C3B;
  }
  // .status {
  //   width: 80px;
  //   height: 80px;
  // }
  .regular {
    background-color: #3C3C3B;
  }
  .buena {
    background-color: #FFA800;
  }
  .corre2de10{
    background-color: #1c496b99;
  }
  .corre5-6de10 {
    background-color: #1C496B;
  }
  .corre4de10 {
    background-color: #7792A6;
  }
  .mts-report {
    background-color: #1C496B;
    // width: 82px;
    // height: 200px;
    // margin: 0 0 0 -1px;
  }
  .wave-icon {
    background-image: url('~/static/img/icon/wave_icon.png');
    width: 29px;
    height: 20px;
  }
  .yellow-carret-left {
    width: 21px;
    height: 44px;
    background-image: url('~/static/img/icon/big_yellow_carret_left.png');
  }
  .yellow-carret-right {
    width: 21px;
    height: 44px;
    background-image: url('~/static/img/icon/big_yellow_carret_right.png');
  }
  .head-title {
    font-size: 25px;
    line-height: 37px;
    border-bottom: 1px solid #3C3C3B;
  }
  .wave-icon-blue {
    background-image: url('~/static/img/icon/bx-water-2_1_blue.png');
    width: 27px;
    height: 20px;
  }
  .clock-blue {
    background-image: url('~/static/img/icon/ios-clock-outline_1_blue.png');
    width: 22px;
    height: 22px;
  }
  .arrow-up-down-blue {
    background-image: url('~/static/img/icon/arrow-up-down_icon.png');
    width: 20px;
    height: 20px;
  }
  .wave-icon-yellow {
    background-image: url('~/static/img/icon/bx-water-2_1_yellow.png');
    width: 27px;
    height: 20px;
  }
  .clock-yellow {
    background-image: url('~/static/img/icon/ios-clock-outline_1_yellow.png');
    width: 22px;
    height: 22px;
  }
  .arrow-up-down-yellow {
    background-image: url('~/static/img/icon/arrow-up-down_icon_yellow.png');
    width: 20px;
    height: 20px;
  }
  .sunrise {
    background-image: url('~/static/img/icon/sunrise_1_.png');
    width: 40px;
    height: 40px;
  }
  .sunset {
    background-image: url('~/static/img/icon/sunset_1_.png');
    width: 40px;
    height: 40px;
  }
  .sound-icon{
    background-image: url('~/static/img/icon/sound_icon.png');
    width: 25px;
    height: 20px;
  }
  .play-button {
    background-image: url('~/static/img/icon/play_78px_78px.png');
    width: 78px;
    height: 78px;
  }
  .comment-box {
    background: #FFA800;
  }
  .block-ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tracking-widest-1 {
    letter-spacing: 0.25em;
  }
  .go-premium-banner {
    background: #F0F0F0;
  }
  .heading {
    color: #1C496B;
    width: 440px;
    height: 120px;
    font-size: 25px;
  }
  .go-premium {
    background: #FFA800;
    width: 200px;
    height: 40px;
  }
  .text {
    color: #3C3C3B;
    width: 360px;
    height: 40px;
  }
  @media only screen and (max-width: 1023px) {
    .heading {
      width: 100%;
      height: auto;
    }
    .text {
      width: 100%;
      height: auto;
    }
    .warning {
      background: #00A99D;
    }
    .comment-box {
      background: #00A99D;
    }
  }
</style>