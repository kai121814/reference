<template>
  <div>
    <Header/>
    <div class="hero gradient-color">
      <div class="hero-container flex mx-auto lg:w-10/12">
        <div class="bg-white lg:w-1/2">
          <div class="curved-corner-topright bottom-0 absolute lg:visible invisible"></div>
          <div class="headline-box lg:mx-10 lg:mt-10">
            <div class="flex text-xs lg:visible invisible h-0 lg:h-auto lg:w-auto w-0">
              <span class="calendar"></span>
              <span class="uppercase text-black ml-4 mt-0.5 whitespace-nowrap">
                Lunes
                <span class="font-bold">25 octubre</span>
                2021
              </span>
            </div>
            <div class="uppercase text-blue mt-8">
              <span class="font-bold text-4xl line-height-46px">
                Playa
                MAITENCILLO</span>
              <span class="block text-base">(abanico)</span>
            </div>
            <div class="ml-0.5 mt-10">
              <span class="block text-xs-1 uppercase text-gray">Condición:</span>
              <div>
                <button class="font-black text-base tracking-widest uppercase text-white bg-green-blue w-48 py-2">Buena</button>
                <span class="text-base uppercase text-gray">
                  <span class="font-bold ml-2">0,6 - 0,9</span> mts
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 float-right rounded-tr-full image-container lg:visible invisible">
          <img src="~/static/img/banner/Rectangle194-1.png" class="image-banner"/>
        </div>
      </div>
    </div>
    <div class="lg:w-10/12 w-11/12 mx-auto mt-10 px-10">
      <div class="flex uppercase mb-8">
        <span class="font-bold text-4xl uppercase text-blue">
          COMENTARIOS
        </span>
        <span class="flex">
          <span class="comment-icon block mt-3 ml-7"></span>
          <span class="font-bold text-base uppercase text-black ml-2.5 mt-2.5">525</span>
        </span>
        <div class="text-blue ml-12">
          <span class="uppercase text-black mr-2.5">
            Ordenar por:
          </span>
          <select name="date" class="border border-blue rounded-sm pl-3 py-1 mr-9">
            <option value="">FECHA</option>
          </select>
          <select name="tipo" class="border border-blue rounded-sm pl-3 py-1">
            <option value="">LIKES</option>
          </select>
        </div>
      </div>
      <button class="font-bold text-sm text-center text-white bg-green-blue shadow rounded-sm w-64 py-2.5 mb-10">HACER UN COMENTARIO</button>
      <div class="mb-10" v-for="(list, index) in lists" :key="index">
        <div class="flex">
          <span class="bg-green-blue">
            <span class="comment-icon-white block mx-2 mt-2 mb-1"></span>
          </span>
          <span class="bg-blue font-bold text-white text-center w-64 pt-1.5">
            Nombre Usuario
          </span>
        </div>
        <div class="px-10 gray-box rounded-sm text-justify relative">
          <div class="pt-8 mb-12">
            <p class="mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="border-t border-gray h-10">
            <div class="float-right mr-10">
              <div class="date text-black uppercase flex">
                <span class="mt-3 mr-10 text-xs">
                  <span class="font-bold">25 DICIEMBRE</span> 2020
                </span>
                <span class="flex">
                  <span class="like-icon block mt-2 mr-2"></span>
                  <span class="font-bold text-xs uppercase text-gray mt-3">25</span>
                </span>
                <span class="flex ml-5">
                  <span class="unlike-icon block mt-2.5 mr-2 ml-3"></span>
                  <span class="font-bold text-xs uppercase text-gray mt-3">02</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="mx-auto my-10 block text-sm uppercase underline text-brown">
        Cargar más COMENTARIOS
      </button>
      <button class="mx-auto block rounded-sm border border-gray font-bold text-sm uppercase tracking-widest-1 text-gray box-border lg:w-36 lg:h-10 return text-right pr-5 mb-10">VOLVER</button>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default {
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
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .return {
    background: url('~/static/img/icon/Flecha_der_brown.png') no-repeat 10% 50%;
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