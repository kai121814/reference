<template>
  <div>
    <Header/>
    <div class="hero gradient-color h-85">
      <div class="hero-container flex mx-auto lg:w-10/12 h-85">
        <div class="bg-white lg:w-1/2 h-85">
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
            <div class="uppercase headline font-black lg:mt-5 lg:visible invisible h-0 lg:h-36 p-0">
              Noticias, Articulos y<br>
              mucho mas
            </div>
            <div class="lg:w-auto w-screen mobile-gradient-color pt-5 pb-4 lg:pt-0 lg:pb-0">
              <div class="filter-box">
                <div class="text-center uppercase sub-text lg:mt-7 lg:mb-2 mb-3">
                  <span class="font-bold label">Filtrar</span> por
                </div>
                <select 
                  name="filter_news"
                  class="block mx-auto lg:mx-0 rounded-sm text-center px-3 uppercase favoritos"
                  v-model="filterBy">
                  <option v-for="cat in CategoryData" :key="cat.categoria_nm" :value="cat.categoria_nm">{{cat.categoria_nm}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 float-right rounded-tr-full image-container lg:visible invisible h-85">
          <img src="~/static/img/banner/Rectangle194.png" class="image-banner"/>
        </div>
      </div>
    </div>
    <div class="lg:w-10/12 w-11/12 mx-auto mt-10">
      <ul class="flex flex-wrap justify-evenly">
        <li v-for="(list, index) in filterNews" :key="index" class="lg:w-80 w-full">
          <div class="lg:my-10 mb-20">
            <NuxtLink class="font-bold text-2xl block lg:w-80 w-full text-brown block mb-2 md:h-24 relative uppercase" :to="{ path: '/articulo/'+ list.url}">
              <div class="lg:bottom-0 lg:absolute">
                {{ list.titulo }}
              </div>
            </NuxtLink>
            <img :src="list.imagenpequena" class="block lg:w-80 w-full h-60 object-cover"/>
            <div class="flex">
              <div class="w-1/2 font-bold text-xs text-center uppercase text-white tracking-widest pt-0.5" :style="{'background': list.category.color}">{{ list.category.categoria_nm }}</div>
              <div class="w-1/2 text-sm text-center uppercase text-brown">{{ $moment(list.fecha).format('DD MMMM YYYY')}}</div>
            </div>
          </div>
        </li>
      </ul>
      <button class="mx-auto my-10 block text-sm uppercase underline text-brown" @click="LoadMore()">
        Cargar más articulos
      </button>
      <NuxtLink to="/" class="mx-auto block rounded-sm border border-brown font-bold text-sm uppercase tracking-widest-1 text-brown box-border w-36 h-10 return text-right pr-5 pt-2.5 mb-10">VOLVER</NuxtLink>
    </div>
    <div class="lg:block hidden">
      <GoPremium2/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default {
    async asyncData({ $axios }) {
      const ArticuloData = await $axios.$get("api/main/articulos/");
      const CategoryData = await $axios.$get('/api/main/article/category/')
      return { ArticuloData, CategoryData};
    },
    data (){
      return {
        filterBy: ''
      }
    },
    computed: {
      filterNews(){
        return this.ArticuloData.results.filter((list) => {
          return list.category.categoria_nm.match(this.filterBy)
        });
      }
    },
    methods: {
      async LoadMore(){
        if (this.ArticuloData.next) {
          var url =this.ArticuloData.next.substr(this.ArticuloData.next.indexOf('/', 7) + 1)
          let response = await this.$axios.$get(url)
          this.ArticuloData.next = response.next
          for ( const i in response.results) {
            this.ArticuloData.results.push(response.results[i])
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .return {
    background: url('~/static/img/icon/Flecha_der_brown.png') no-repeat 10% 50%;
  }
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
  .image-thumbnail {
    display: block;
    width: 320px;
    height: 160px;
  }
  .image-container{
    margin: 0 0 0 -90px;
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
  .tracking-widest-1 {
    letter-spacing: 0.25em;
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
  .comments {
    background: #00A99D;
    width: 91px;
    height: 40px;
  }
  .blue-green-background {
    background: #00A99D;
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
  .text-brown {
    color: #3C3C3B;
  }
  .border-brown {
    border-color: #3C3C3B;
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
  .h-85 {
    height: 320px;
  }
  @media only screen and (max-width: 1023px) {
    .h-85 {
      height: auto;
    }
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