<template>
  <div>
    <client-only>
    <Header/>
    </client-only>
    <div class="hero gradient-color">
      <div class="hero-container flex mx-auto lg:w-10/12">
        <div class="bg-white lg:w-1/2">
          <div class="curved-corner-topright bottom-0 absolute lg:visible invisible"></div>
          <div class="headline-box lg:m-10">
            <div class="flex text-xs lg:visible invisible h-0 lg:h-auto lg:w-auto w-0">
              <span class="calendar"></span>
              <span class="uppercase text-black ml-4 mt-0.5 whitespace-nowrap">
                {{ $moment(Date.now()).format('dddd')}}
                <span class="font-bold">{{ $moment(Date.now()).format('DD MMMM')}}</span>
                {{ $moment(Date.now()).format('YYYY')}}
              </span>
            </div>
            <div class="uppercase headline font-black lg:mt-5 lg:visible invisible h-0 lg:h-auto">
              Camaras<br>
              En vivo
            </div>
            <div class="lg:w-auto w-screen mobile-gradient-color pt-5 pb-4 lg:pt-0 lg:pb-0">
              <div class="filter-box">
                <div class="text-center uppercase sub-text lg:mt-8 lg:mb-2 mb-3">
                  <span class="font-bold label">Filtrar</span> por
                </div>
                <select 
                  name="favoritos"
                  class="block mx-auto lg:mx-0 rounded-sm text-center px-3 uppercase favoritos">
                  <option value="favoritos">FAVORITOS</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 float-right rounded-tr-full image-container lg:visible invisible">
          <img src="~/static/img/banner/Rectangle194.png" class="image-banner"/>
        </div>
      </div>
    </div>
    <div class="lg:w-10/12 w-11/12 mx-auto">
      <ul class="flex flex-wrap justify-evenly lg:py-10 py-2">
        <li v-for="(list,index) in PlayasData" :key="index" class="py-5">
          <NuxtLink  :to="{ name: 'playas-name', params: { name: list.path }}"  >
          <div class="">
            <div class="relative">
              <div class="absolute flex">
                <span class="text-white uppercase title pl-3 pt-1">
                  <span class="block font-bold text1">{{list.nombre}}</span>
                </span>
                <span class="float-right pt-2 pr-3">
                  <img src="~/static/img/icon/star_2.png" />
                </span>
              </div>
              <div class="h-40 w-80 overflow-hidden">
                <img :src="list.imagen" class="object-fill h-40 w-80"/>
              </div>
            </div>
            <div class="uppercase flex">
              <!-- <span class="comments flex">
                <span class="comment_icon mt-3 ml-2"></span>
                <span class="number font-bold text-white text-center pt-2">214</span>
              </span> -->
              <span class="flex">
                <span class="run-out font-bold text-sm text-center uppercase border-r pl-2 mt-2.5 block pr-2 mb-2 whitespace-nowrap">
                  {{
                    list.forecast[0].current_rating.rating
                  }}
                </span>
                <span class="mts text-sm text-center uppercase pl-1.5 mt-2.5 mb-2 whitespace-nowrap">
                  <span class="font-bold"> {{list.forecast[0].alturamin}} - {{list.forecast[0].alturamax}}</span> mts
                </span>
              </span>
            </div>
          </div>
           </NuxtLink>
        </li>
      </ul>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default {
    async asyncData({ $axios }) {
      const PlayasData = await $axios.$get("/api/main/playas/home");
      return { PlayasData };
    },
  }
</script>

<style lang="scss" scoped>
  .gradient-color{
    background: linear-gradient(163.41deg, #1C496B 0%, #00A99D 100%);
    transform: rotate(-180deg);
    .hero-container{
      transform: rotate(180deg);
    }
  }
  .image-banner {
    display: block;
    width: 640px;
    height: 320px;
  }
  .image-container{
    margin: 0 0 0 -80px;
  }
  .bg-white{
    margin: 0 0 0 40px;
  }
  .calendar {
    background: url('~/static/img/icon/calendar.png');
    width: 20px;
    height: 20px;
  }
  .headline {
    letter-spacing: 0.1em;
    font-size: 36px;
    line-height: 46px;
  }
  .sub-text {
    font-size: 15px;
    line-height: 22px;
    color: #3C3C3B;
    letter-spacing: 0.25em;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background: url('static/img/icon/flecha_der.png') no-repeat;
    background-size: 20px 12px;
    background-position: 85% 50%;
  }
  .favoritos{
    background-color: #E5E5E5;
    width: 319px;
    height: 40px;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.25em;
    color: #3C3C3B;
  }
  .headline-box {
    width: 319px;
  }
  .curved-corner-topright {
    width: 100px;
    height: 100px;
    overflow: hidden;
    background: none;
    transform: rotate(90deg);
    margin: 0 0 0 -99.5px;
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
  .comments {
    background: #00A99D;
    width: 91px;
    height: 40px;
  }
  .comment_icon {
    background-image: url('~/static/img/icon/comment_icon.png');
    width: 20px;
    height: 20px;
  }
  .title {
    width: 300px;
    .text1 {
      font-size: 25px;
    }
  }
  .run-out {
    color: #1c496b99;
    letter-spacing: 0.1em;
  }
  .mts {
    color: #3C3C3B;
  }
  .number {
    width: 51px;
    height: 40px;
  }
  .border-r {
    border-right: 1px solid #808080;
  }
  .label {
    font-size: 15px;
  }
  @media only screen and (max-width: 1023px) {
    .gradient-color{
      background: none;
    }
    .title {
      width: 280px;
    }
    .comments {
      width: 80px;
    }
    .curved-corner-topright{
      width: 0;
      height: 0;
    }
    .headline-box {
      width: 0;
    }
    .favoritos{
      width: 85vw;
      height: 30px;
      background-color: #fff;
      color: #3C3C3B;
    }
    .bg-white{
      margin: 0;
    }
    .image-banner {
      width: 0;
      height: 0;
    }
    .mobile-gradient-color{
      background: linear-gradient(163.41deg, #1C496B 0%, #00A99D 100%);
      background-blend-mode: multiply;
      transform: rotate(-180deg);
      .filter-box{
        transform: rotate(-180deg);
      }
    }
    .sub-text{
      color: #fff;
    }
    select {
      background-position: 95% 50%;
    }
  }
</style>