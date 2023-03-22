<template>
  <div>
    <Header/>
    <div class="hero relative bg-mobile">
      <div class="lg:flex">
        <div class="lg:w-1/2 py-10 pr-10 lg:inline-block hidden">
          <div class="w-2/3 float-right font-bold text-4xl uppercase title leading-10 line-height-46px">
            Disfruta de increibles beneficios con el club de Buscaolas.
          </div>
        </div>
        <div class="lg:w-1/2 gradient-bg lg:float-right rounded-tr-100px lg:inline-block hidden">
          <div class="hero-image"></div>
        </div>
      </div>
      <div class="absolute top-0 lg:hidden visible menu-gray-box pl-8 mx-auto mt-20 left-1/2 transform -translate-x-1/2">
        <div class="font-bold text-xl mb-3 mt-1">
          CLUB BUSCAOLAS
        </div>
        <div class="title-border"></div>
        <div class="border-t border-white pt-10">
          <ul class="font-semibold">
            <li class="">
              <span class="block pb-1 menu-list">Descuentos</span>
            </li>
            <li class="">
              <span class="py-1 menu-list block">Ingreso Socio</span>
            </li>
            <li class="">
              <span class="py-1 menu-list block">
                Validar codigo de<br> 
                descuento</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="gradient-lists">
      <div class="lg:w-9/12 mx-auto lists-box">
        <ul class="flex flex-wrap lg:justify-start justify-evenly md:gap-6 gap-1 py-10">
          <li class="mb-5" v-for="(list,index) in SociosData" :key="index">
            <div>
              <div class="relative lists-container lg:w-80 lg:h-44 overflow-hidden py-3">
                <img :src="list.imagen" class="thumbnail-image mx-auto w-72 h-36 object-contain box-border"/>
                <!-- <div class="lg:rounded-full lg:bg-white lg:w-auto w-1/2 circle absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2">
                </div> -->
              </div>
              <div class="gray-box text-center">
                <div class="font-bold uppercase title text-center p-5">
                  {{list.nombre}}
                </div>
                <NuxtLink :to="'/buscaolas-club/' + list.nombrecodigos"><button class="lg:font-bold uppercase benefits rounded-sm text-center lg:px-4 px-2 py-2 whitespace-nowrap mb-3 lg:text-sm text-xs">
                  <span class="lg:hidden visible">
                    VER
                  </span>
                    BENEFICIOS
                </button> </NuxtLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="gradient-color uppercase flex">
        <img src="~/static/img/banner/interior-design-surf-surfing-7VXMNY61.png" class="image lg:w-1/2 lg:visible invisible"/>
        <div class="lg:w-1/2 w-screen p-10">
          <div class="text-4xl text-white box uppercase mb-9 lg:text-left text-center text-1">
            ¿<span class="font-bold">QUIERES SER PARTE</span> DEL CLUB BUSCAOLAS?
          </div>
          <div class="text-white box text-2xl-custom uppercase mb-2 lg:text-left text-center text-2">
            ¡<span class="font-bold">Únete</span> y muestrate a miles de usuarios!
          </div>
          <button class="contact rounded-sm py-2.5 px-11 lg:text-white uppercase font-bold lg:mt-0 mt-8 lg:w-auto w-11/12 lg:mx-0 mx-auto block">
            Contacto
          </button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default {
    async asyncData({ $axios }) {
      const SociosData = await $axios.$get("api/main/socios/");
      return { SociosData};
    },
    data() {
      return {
        lists: [
          {
            id:1,
          },
          {
            id:2,
          },
          {
            id:3,
          },
          {
            id:4,
          },
          {
            id:5,
          },
          {
            id:6,
          },
          {
            id:7,
          },
          {
            id:8,
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gradient-color{
    background: linear-gradient(163.41deg, #1C496B 0%, #00A99D 100%);
  }
  .line-height-46px {
    line-height: 46px;
  }
  .rounded-tr-100px{
    border-radius: 0px 100px 0px 0;
  }
  .contact{
    font-size: 0.9375rem;
    line-height: 22px;
    letter-spacing: 0.25em;
    background: #FFA800;
  }
  .image{
    width: 640px;
    height: 360px;
  }
  .box {
    width: 319px;
  }
  .text-2xl-custom{
    font-size: 1.5625rem;
  }
  .gray-box{
    background: #F0F0F0;
    border-radius: 0px 0px 5px 5px;
    width: 320px;
    height: 120px;
  }
  .benefits {
    letter-spacing: 0.25em;
    border: 1px solid #00A99D;
    font-size: 15px;
    color: #00A99D;
  }
  .title {
    color: #3C3C3B;
  }
  .circle{
    width: 120px;
    height: 120px;
  }
  .hero {
    height: 480px;
  }
  .gradient-bg{
    background: linear-gradient(163.41deg, #1C496B 0%, #00A99D 100%);
    background-blend-mode: multiply;
    transform: rotate(-180deg);
  }
  .hero-image {
    transform: rotate(180deg);
    margin: 0 -1px 0 200px;
    height: 480px;
    background: url('~/static/img/banner/image4.png') no-repeat;
  }
  @media only screen and (max-width: 1023px) {
    .bg-mobile {
      background: url('~/static/img/background/image4.png') no-repeat;
      background-size: 100%;
      height: 395px;
    }
    .title-border {
      border: 2px solid #1C496B;
      width: 100px;
    }
    .title {
      min-height: 112px;
    }
    .menu-gray-box{
      width: 309px;
      height: 245px;
      background: #4f4f4f;
      color: #ffffff;
    }
    .menu-list::before{
      content: "\003E";
      margin: 0 10px 0 0;
    }
    .gradient-lists {
      background: linear-gradient(163.41deg, #1C496B 0%, #00A99D 100%);
      background-blend-mode: multiply;
      transform: rotate(-180deg);
      .lists-box{
        transform: rotate(180deg);
      }
    }
    .circle, .thumbnail-image {
      width: 146px;
      height: 100px;
      background: #ffffff;
      border-radius: 2px 2px 0px 0px;
    }
    .gray-box{
      border-radius: 0px 0px 2px 2px;
      width: 147px;
      height: auto;
    }
    .benefits {
      letter-spacing: 0;
      border: none;
      background: #00A99D;
      color: #ffffff;
    }
    .lists-container {
      background: #ffffff;
    }
    .image{
      width: 0;
    }
    .text-4xl {
      font-size: 1.5625rem;
    }
    .text-2xl-custom{
      font-size: 18px;
    }
    .box {
      width: auto;
    }
    .gradient-color{
      background: #ffffff;
    }
    .text-1 {
      color: #1A516F;
    }
    .text-2{
      color: #3C3C3B;
    }
    .contact{
      color: #00A99D;
      background: #00A99D;
    }
  }
</style>