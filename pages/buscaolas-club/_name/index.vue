<template>
  <div>
    <Header/>
    <div class="gradient-color">
      <div class="hero-container flex mx-auto lg:w-10/12">
        <div class="bg-white lg:w-1/2">
          <div class="curved-corner-topright bottom-0 absolute lg:visible invisible"></div>
          <div class="w-96 ml-12">
            <img :src="DescuentosData.descuentos[0].socio.imagen" class="mx-auto mt-10 mb-5"/>  
            <div class="font-bold text-3xl leading-10 text-center uppercase">
              {{DescuentosData.descuentos[0].socio.nombre}}
            </div>  
          </div>
        </div>
        <div class="w-1/2 float-right rounded-tr-full image-container lg:visible invisible">
          <img src="~/static/img/banner/Rectangle194-1.png" class="image-banner"/>
        </div>
      </div>
    </div>
    <div class="lg:flex lg:w-10/12 w-11/12 mx-auto mt-10 mb-20 px-10">
      <div class="w-2/5 border-r border-blue pr-10">
        <div class="text-base uppercase mb-10">
          <span class="block font-bold text-blue">WEB</span>
          <span class="text-gray">
            {{DescuentosData.descuentos[0].socio.url}}
          </span>
        </div>
        <!-- <div class="text-base uppercase mb-12">
          <span class="block font-bold text-blue">Horario</span>
          <span class="text-gray">
            <span class="block">
                Martes a viernes
            </span>
            <span class="block">
                09:00 - 13:00 hrs / 15:00 - 19:00 hrs.
            </span>
            <span class="block">
                Sábado y domingo
            </span>
            <span class="block">
                10:00 - 13:00 hrs / 15:00 - 20 hrs.
            </span>
          </span>
        </div> -->
        <div class="text-base uppercase mb-10">
          <span class="block font-bold text-blue">DIRECCIÓN</span>
          <span class="text-gray">
            {{DescuentosData.descuentos[0].socio.direccion}}
          </span>
        </div>
        <div v-html="DescuentosData.descuentos[0].socio.mapa">
        </div>
      </div>
      <div class="w-3/5 pl-10 pl-10">
        <div class="font-bold text-4xl text-blue uppercase mb-10">
          Lista de beneficios
        </div>
        <div class="text-base uppercase text-white bg-green-blue w-full py-16 px-10 mb-8" v-for=" desc in DescuentosData.descuentos" :key="desc.id">
          {{ desc.descuento}}
        </div>
      </div>
    </div>
    <div class="lg:w-10/12 w-11/12 mx-auto px-10">
      <div class="font-bold text-4xl text-blue uppercase mb-10">
        partner asociados
      </div>
      <div class="">
        <ul class="flex flex-wrap lg:justify-between justify-evenly">
          <li class="" v-for="(list,index) in DescuentosData.otros" :key="index">
            <div>
              <div class="relative lists-container w-80 h-48">
                <img :src="list.imagen" class="lg:visible invisible thumbnail-image w-80 h-48 object-contain"/>
                <!-- <div class="lg:rounded-full lg:bg-white lg:w-auto w-1/2 circle absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2">
                </div> -->
              </div>
              <div class="gray-box text-center pb-2">
                <div class="font-bold uppercase text-gray text-center p-5">
                  {{list.nombre}}
                </div>
                <NuxtLink :to="'/buscaolas-club/' + list.nombrecodigos">
                  <button class="lg:font-bold uppercase text-green-blue border border-green-blue rounded-sm text-center px-4 py-2 whitespace-nowrap mb-3 text-base tracking-widest">
                    <span class="lg:hidden visible">
                      VER
                    </span>
                    BENEFICIOS
                  </button>
                </NuxtLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button class="mx-auto block rounded-sm border border-gray font-bold text-sm uppercase tracking-widest-1 text-gray box-border lg:w-36 lg:h-10 return text-right pr-5 mt-20 mb-20">VOLVER</button>
    </div>
    <GoPremium2 class="lg:visible lg:w-auto lg:h-auto"/>
    <Footer/>
  </div>
</template>

<script>
  export default {
    async asyncData({ $axios, params }) {
      const DescuentosData = await $axios.$get("/api/main/socios/" + params.name);
      return { DescuentosData };
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .return {
    background: url('~/static/img/icon/Flecha_der_brown.png') no-repeat 10% 50%;
  }
  .rounded-tr-100px {
    border-radius: 0px 100px 0px 0;
  }
  .text-gray {
    color: #3C3C3B;
  }
  .border-gray {
    border-color: #3C3C3B;
  }
  .bg-green-blue {
    background: #00A99D;
  } 
  .text-green-blue {
    color: #00A99D;
  }
  .border-green-blue {
    border-color: #00A99D;
  }
  .border-blue {
    border-color: #1C496B;
  }
  .bg-blue {
    background: #1C496B;
  }
  .tracking-widest-1 {
    letter-spacing: 0.25em;
  }
  .text-xs-1 {
    font-size: 10px;
  }
  .text-blue {
    color: #1C496B;
  }
  .line-height-46px {
    line-height: 46px;
  }
  .gray-box {
    background: #F0F0F0;
  }
  .circle{
    width: 120px;
    height: 120px;
  }
  .gradient-color{
    background: linear-gradient(163.41deg, #1C496B 0%, #00A99D 100%);
    transform: rotate(-180deg);
    .hero-container{
      transform: rotate(180deg);
    }
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
  .image-banner {
    display: block;
    width: 640px;
    height: 100%;
  }
  .image-container{
    margin: 0 0 0 -80px;
  }
  .bg-white{
    margin: 0 0 0 40px;
  }
  .comment-icon {
    background: url('~/static/img/icon/comment_icon_blue.png');
    width: 20px;
    height: 23px;
  }
  .comment-icon-white {
    width: 25px;
    height: 25px;
    background-image: url('~/static/img/icon/comment_icon_25px.png');
  }
  .calendar {
    background: url('~/static/img/icon/calendar.png');
    width: 20px;
    height: 20px;
  }
  .comment_icon {
    background: url('~/static/img/icon/comment_icon_blue.png');
    width: 20px;
    height: 23px;
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
    background: url('static/img/icon/chevron-down.png') no-repeat;
    background-size: 20px 12px;
    background-position: 85% 50%;
    width: 120px;
    height: 40px;
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