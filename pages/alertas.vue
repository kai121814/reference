<template>
  <div>
    <Header/>
    <div class="lg:flex lg:w-9/12 mx-auto mt-10">
      <div class="lg:w-2/3 w-11/12 mx-auto lg:pr-10">
        <div class="mb-8 text-xs text-center uppercase text-white py-2.5 bg-red" v-if="AlertData.Updates > 0">
          <span class="font-bold">AlertData.Updates</span> actualizaciones
        </div>
        <div class="mb-8 border-t border-red">
          <div class="flex uppercase">
            <span class="bg-red text-center w-40 font-bold text-sm text-white uppercase">
              ALERTA
            </span>
            <span class="text-sm pl-3 gray">
             {{$moment(AlertData.alert.created_at).format('DD MMMM YYYY')}}
            </span>
          </div>
        </div>
        <div class="mb-8">
          <span class="font-bold text-lg uppercase text-white bg-blue rounded-full p-2">B</span>
          <span class="text-xs uppercase text-brown mx-1">POR</span>
          <span class="font-bold text-xs uppercase gray">{{AlertData.alert.author}}</span>
        </div>
        <div class="font-bold text-2xl-1 uppercase gray leading-8 mb-10">
          {{AlertData.alert.title}}
        </div>
        <div class="font-bold text-sm gray uppercase mt-10 mb-5">
          {{AlertData.alert.summary}}
        </div>
        <div>
          <img :src="AlertData.alert.image" alt="">
        </div>
        <div class="text-sm leading-snug gray text-justify mt-8 mb-12" v-html="AlertData.alert.body_alert" v-if="isAuthenticated && IsPremium">
        </div>
        <div class="text-sm leading-snug gray text-justify mt-8 mb-12" v-html="AlertData.alert.body_alert.substring(0,50) + '...'" v-if="!isAuthenticated || !IsPremium">
        </div>
        <LazyGoPremiumArticles v-if="!isAuthenticated || !IsPremium"/>
        <div class="mb-9 flex">
          <div class="tracking-widest-1 text-base mb-2 uppercase gray">
            <span class="font-bold block">Es bueno</span>
            <span>compartir ></span>
          </div>
          <div class="ml-2 mt-1">
            <ul class="flex">
              <li>
                <a href="https://www.facebook.com/Buscaolas-708734166250368/"><span class="fb-icon block mx-2"></span></a>
              </li>
              <li>
                <a href="https://www.instagram.com/buscaolas.cl" class=""><span class="insta-icon block  mx-2"></span></a>
              </li>
            </ul>
          </div>
        </div>
        <button class="uppercase rounded-sm border border-gray font-bold text-sm uppercase tracking-widest-1 gray w-36 h-10 mr-10 return text-right pr-5 mb-16" @click="Go">VOLVER</button>
        <div v-if="AlertData.alert.main_alert && isAuthenticated && IsPremium">
          <div v-for="(update, index) in AlertData.alert.main_alert " :key="index">
              <div class="mb-8 border-t border-red" v-if="AlertData.alert.main_alert">
                <div class="flex uppercase">
                  <span class="bg-red text-center w-44 font-bold text-sm text-white uppercase">
                    Actualización
                  </span>
                  <span class="text-sm pl-3 gray">
                    {{$moment(update.created_at).format('DD MMMM YYYY')}}
                  </span>
                </div>
              </div>
              <div class="font-bold text-sm uppercase my-3 uppercase gray">
               {{update.summary}}
              </div>
              <div class="mb-10">
                <img class="video" :src="update.image">
              </div>
              <div class="text-sm leading-snug gray text-justify mt-8 mb-12" v-html="update.body_alert">
              </div>
              <div class="mb-9 flex">
                <div class="tracking-widest-1 text-base mb-2 uppercase gray">
                  <span class="font-bold block">Es bueno</span>
                  <span>compartir ></span>
                </div>
                <div class="ml-2 mt-1">
                  <ul class="flex">
                    <li>
                      <span class="fb-icon block mx-2"></span>
                    </li>
                    <li>
                      <span class="twt-icon block mx-2"></span>
                    </li>
                    <li>
                      <span class="insta-icon block  mx-2"></span>
                    </li>
                  </ul>
                </div>
              </div>
          <button class="uppercase rounded-sm border border-gray font-bold text-sm uppercase tracking-widest-1 gray lg:w-36 lg:h-10 mr-10 return text-right pr-5 mb-16">VOLVER</button>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 w-11/12 mx-auto">
        <div class="lg:pl-8 lg:border-l lg:border-gray h-min">
          <div class="pt-2 mb-10 uppercase font-bold blue lg:text-4xl text-xl lg:text-left text-center">
            Últimos Artículos
          </div>
          <div class="">
            <ul>
              <li class="pb-14" v-for="(news, index) in AlertData.articles" :key="index">
                <div class="">
                  <div class="flex uppercase border-t border-blue-green">
                    <span class="blue-green-text w-36 text-center font-bold text-sm text-white uppercase">
                     {{news.category.categoria_nm}}
                    </span>
                    <span class="text-sm pl-3 gray">
                     {{$moment(news.fecha).format('DD MMMM YYYY')}}
                    </span>
                  </div>
                  <p class="gray font-bold text-sm uppercase my-5">
                    {{news.resumen}}
                  </p>
                  <NuxtLink :to="'/articulo/' + news.url" class="font-bold text-xs uppercase text-blue-green tracking-wide-1 float-right">
                    leer mas
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    components: {
    },
    async asyncData({ $axios }) {
      const AlertData = await $axios.$get("/api/main/alert/");
      return { AlertData };
    },
    computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser", "IsPremium"]),
    },
    methods: {
      Go(){
        this.$router.push({ path: "/" })
      }
    },
  }
</script>

<style lang="scss" scoped>
  // .blue {
  //   color: #1C496B;
  // }
  // .line-height-46px {
  //   line-height: 46px;
  // }
  // .tracking-wide-1 {
  //   letter-spacing: 0.25em;
  // }
  // .fa-chevron-left, .fa-chevron-right {
  //   color: #727272;
  // }
  .video {
    width: 635px;
    height: 360px;
  }
  .gray {
    color: #3C3C3B;
  }
  .text-2xl-1 {
    font-size: 25px;
  }
  .border-red {
    border-color: #C8142E;
  }
  .bg-red {
    background: #C8142E;
  }
  .bg-blue {
    background: #1C496B;
  }
  .border-gray {
    border-color: #3C3C3B;
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
  .blue-green-text {
    background: #00A99D;
  }
  .heading{
    width: 316px;
    height: 160px;
    font-size: 25px;
    line-height: 35px;
  }
  .sub-heading{
    width: 320px;
    height: 80px;
  }
  .read-more {
    letter-spacing: 0.25em;
    border: 1px solid #3C3C3B;
    width: 160px;
    height: 40px;
  }
</style>