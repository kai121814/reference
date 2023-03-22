<template>
  <div>
    <Header/>
    <div class="lg:flex lg:w-9/12 mx-auto lg:mt-5">
      <div class="lg:w-2/3 lg:pr-10">
        <div class="lg:mb-8 mb-5">
          <img :src="ArticuloData.articulo.imagen" class="">
          <div class="flex uppercase mt-5 lg:mt-0 lg:border-t-0 border-blue-green border-t lg:mx-0 mx-8">
            <span class="news font-bold text-sm text-white uppercase">
              {{ ArticuloData.articulo.category.categoria_nm }}
            </span>
            <span class="text-sm pl-3 gray">
              {{ $moment(ArticuloData.articulo.fecha).format('DD MMMM YYYY') }}
            </span>
          </div>
        </div>
        <div class="lg:flex lg:mb-8 mb-8 lg:mx-0 mx-8">
          <span class="font-bold text-lg uppercase text-white bg-blue rounded-full px-2.5 py-0.5 h-8 w-8">
            {{ ArticuloData.articulo.autor.charAt(0) }}
          </span>
          <span class="text-xs uppercase text-brown mx-1 mt-2">
            POR
          </span>
          <span class="font-bold text-xs uppercase gray mt-2">
            {{ArticuloData.articulo.autor}}
          </span>
        </div>
        <div class="article-box mb-10 lg:mx-0 mx-8">
          <div class="mb-5 uppercase font-bold text-2xl gray">
            <h1>{{ArticuloData.articulo.titulo}}</h1>
          </div>
          <div class="text-justify text-sm gray"
            v-html="ArticuloData.articulo.cuerpo"></div>
        </div>
        <!-- <div class="flex mb-5 relative lg:mx-0 mx-8">
          <span class="left-icon absolute -translate-y-1/2 transform top-1/2 left-0"></span>
          <span class="flex ml-10">
            <img src="~/static/img/thumbnail/Rectangle187x160.png" class="w-44 h-40">
            <img src="~/static/img/thumbnail/Rectangle187x160.png" class="w-44 h-40">
            <img src="~/static/img/thumbnail/Rectangle187x160.png" class="w-44 h-40">
          </span>
          <span class="right-icon absolute -translate-y-1/2 transform top-1/2 -right-5"></span>
        </div> -->
        <!-- <swiper :options="swiperOptions" ref='News' class="slide-box border border-black">
          <button class="left-icon block">&nbsp;</button>
          <swiper-slide v-for="list in imageLists" :key="list.id" class="slide">
            <img src="~/static/img/thumbnail/Rectangle187x160.png" class="w-full h-full">
          </swiper-slide>
          <button class="right-icon block">&nbsp;</button>
        </swiper> -->
        <div class="mb-9 lg:flex lg:mx-0 mx-8">
          <div class="tracking-widest-1 text-base mb-2 uppercase gray mr-2">
            <span class="font-bold block">Es bueno</span>
            <span>compartir ></span>
          </div>
          <div class="lg:ml-2 mt-1">
            <div class="flex gap-x-2">
              <span class="fb-icon block"></span>
              <span class="twt-icon block"></span>
              <span class="insta-icon block"></span>
            </div>
          </div>
        </div>
        <button class="lg:mx-0 mx-8 uppercase rounded-sm border border-gray font-bold text-sm uppercase tracking-widest-1 gray lg:w-36 lg:h-10 mr-10 return text-right pr-5 lg:mb-0 mb-10">VOLVER</button>
      </div>
      <div class="lg:w-1/3">
        <div class="lg:pl-8 lg:mx-0 mx-8 lg:pr-0 lg:border-l border-gray h-min">
          <div class="pt-2 lg:mb-10 mb-5 uppercase font-bold blue lg:text-4xl text-2xl text-left lg:w-1/2">
            Últimos Artículos
          </div>
          <div class="">
            <ul>
              <li class="pb-14" v-for="(news, index) in ArticuloData.relacionados" :key="index">
                <div class="">
                  <div class="flex uppercase border-t border-blue-green">
                    <span class="news font-bold text-sm text-white uppercase">
                      {{news.category.categoria_nm}}
                    </span>
                    <span class="text-sm pl-3 gray">
                      {{ $moment(news.fecha).format('DD MMMM YYYY')}}
                    </span>
                  </div>
                  <p class="gray font-bold text-sm uppercase my-5">
                   {{news.titulo}}
                  </p>
                  <NuxtLink :to="'/articulo/' + news.url">
                    <button class="font-bold text-xs uppercase gray tracking-widest-1 float-right rounded-sm lg:border-0 border border-gray px-5 py-2">
                      leer mas
                    </button>
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-9/12 mx-auto lg:mt-10 mt-5 mb-10 border-t border-gray pt-7 lg:block hidden">
      <div class="uppercase font-bold blue text-4xl line-height-46px lg:text-left text-center">
        {{ArticuloData.articulo.category.categoria_nm}}<br>relacionadas
      </div>
      <div class="blue mt-4 mb-9 lg:visible hidden">
        <span class="uppercase text-black mr-2">
          Ordenar por:
        </span>
        <select name="date" class="rounded-sm sort-by pl-3 py-1 mr-7">
          <option value="">FECHA</option>
        </select>
        <select name="tipo" class="rounded-sm sort-by pl-3 py-1 mr-7">
          <option value="">TIPO</option>
        </select>
      </div>
      <div class="relative overflow-x-hidden Articulo">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
            v-for="list in ArticuloData.more_category" :key="list.id">
            <div class="box mx-auto">
              <div>
                <img :src="list.imagenpequena" class="thumbnail-container image">
              </div>
              <div class="uppercase leading-none">
                <div class="flex">
                  <span class="news font-bold text-sm text-white">
                    {{list.category.categoria_nm}}
                  </span>
                  <span class="text-sm pl-3 gray">
                    {{ $moment(list.fecha).format('DD MMMM YYYY')}}
                  </span>
                </div>
                <p class="text-2xl gray heading-articulo font-bold pt-5 mb-4">
                  {{list.titulo}}
                </p>
                <p class="text-sm gray sub-heading-articulo normal-case text-sm">
                  {{list.resumen}}
                </p>
                <NuxtLink :to="'/articulo/' + list.url" class="uppercase float-right px-7 py-2.5 gray font-bold read-more border-sm text-center">leer mas</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-next absolute pl-1">
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="swiper-button-prev absolute right-1">
          <i class="fas fa-chevron-left"></i>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Swiper from 'swiper/swiper-bundle.min';
  import 'swiper/swiper-bundle.min.css';
  export default {
    head() {
      return {
        title: this.ArticuloData.articulo.titulo,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.ArticuloData.articulo.resumen,
          },
          {
            hid: "og:title",
            name: "og:title",
            content: this.ArticuloData.articulo.titulo,
          },
          {
            hid: "og:url",
            name: "og:url",
            content: "https://buscaolas.cl/articulo/" + this.ArticuloData.articulo.url,
          },
          {
            hid: "og:description",
            name: "og:description",
            content: this.ArticuloData.articulo.resumen,
          },
          {
            hid: "og:image",
            name: "og:image",
            content: this.ArticuloData.articulo.imagen,
          },
        ],
      };
    },
    data() {
      return {
      }
    },
    mounted() {
      new Swiper('.Articulo', {
        loop: true,
        loopFillGroupWithBlank: true,
        slidesPerGroup: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
    methods: {
    },
    async asyncData({ $axios, params }) {
      const ArticuloData = await $axios.$get("/api/main/articulo/" + params.slug);
      return { ArticuloData };
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    margin: 20px 0;
    padding: 0 0 0 20px;
  }
  li {
    display: block;
    margin: 0 0 10px 0;
  }
  ::v-deep blockquote {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: #3C3C3B;
    background: url('~/static/img/icon/left-quotes-sign1.png') no-repeat;
    padding: 15px 0 0 50px;
    margin: 10px 0 0 0;
  }
  ::v-deep h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 35px;
    text-transform: uppercase;
    color: #3C3C3B;
  }
  ::v-deep a {
    color: #1C496B;
    text-decoration: underline;
  }
  a {
    color: #ffffff;
    text-decoration: none;
  }
  .video {
    width: 610px;
    height: 360px;
  }
  .bg-blue {
    background: #1C496B;
  }
  .blue {
    color: #1C496B;
  }
  .gray {
    color: #3C3C3B;
  }
  .border-gray {
    border-color: #3C3C3B;
  }
  .line-height-46px {
    line-height: 46px;
  }
  .border-blue-green {
    border-color: #00A99D;
  }
  .text-blue-green {
    color: #00A99D;
  }
  .tracking-widest-1 {
    letter-spacing: 0.25em;
  }
  .return {
    background: url('~/static/img/icon/Flecha_der_brown12x23.png') no-repeat 10% 50%;
  }
  .right-icon {
    background: url('~/static/img/icon/right-icon-21x44.png');
    width: 21px;
    height: 44px;
  }
  .left-icon {
    background: url('~/static/img/icon/left-icon-21x44.png');
    width: 21px;
    height: 44px;
  }
  .fb-icon {
    background: url('~/static/img/icon/fb.png');
    width: 40px;
    height: 40px;
  }
  .twt-icon {
    background: url('~/static/img/icon/twt.png');
    width: 40px;
    height: 40px;
  }
  .insta-icon {
    background: url('~/static/img/icon/insta.png');
    width: 40px;
    height: 40px;
  }
  .box {
    width: 320px;
  }
  .sort-by{
    border: 1px solid #1C496B;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background: url('static/img/icon/chevron-down.png') no-repeat;
    background-size: 20px 12px;
    background-position: 85% 50%;
    width: 120px;
    height: 40px;
  }
  .thumbnail-container{
    width: 320px;
    height: 240px;
  }
  .news{
    background: #00A99D;
    width: 99px;
    text-align:center;
  }
  .heading-articulo {
    width: 316px;
    height: 160px;
    font-size: 25px;
    line-height: 35px;
  }
  .sub-heading-articulo {
    width: 320px;
    height: 80px;
  }
  .read-more {
    letter-spacing: 0.25em;
    border: 1px solid #3C3C3B;
  }
  .slide {
    margin: 0 10px!important;
  }
  .swiper-button-next {
    &::after {
      content: "none";
    }
  }
  .swiper-button-prev {
    &::after {
      content: "none";
    }
  }
  @media only screen and (max-width: 1023px) {
    .video {
      width: 100%;
      height: auto;
    }
  }
</style>