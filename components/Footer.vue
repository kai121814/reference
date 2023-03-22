<template>
  <div class="footer">
    <div class="relative lg:w-9/12 w-10/12 mx-auto lg:flex pt-10 lg:pb-0 pb-20">
      <div class="text-center uppercase lg:w-1/3">
        <img src="~static/img/logo/Marca.png" class="lg:mb-5 mb-12 text-center footer-logo mx-auto">
        <div class="lg:static absolute lg:bottom-0 bottom-10 w-full">
           <div class="text-white text-xs title box mx-auto">
            <span class="font-bold">Buscaolas</span>
            <span>Surfcams</span>
          </div>
          <div class="border-t footer box copyright text-white text-center uppercase mx-auto block">
            <!-- Copyrights © 2020 Todo los derechos reservados -->
            {{footer.copyright}}
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mx-20">
        <ul class="text-center text-white font-bold uppercase lists w-min mx-auto">
          <li class="border-white border-t">
             <NuxtLink to="/playas">PLAYAS</NuxtLink>
          </li>
          <li class="border-white border-t">
             <NuxtLink to="/articulo">ÚLTIMAS NOTICIAS</NuxtLink>
          </li>
          <li class="border-white border-t">
             <NuxtLink to="/buscaolas-club">CLUB BUSCAOLAS </NuxtLink>
          </li>
          <li class="border-white border-t">
             <NuxtLink to="/about">NOSOTROS</NuxtLink>
          </li>
          <li class="border-white border-t">
            términos de uso
          </li>
        </ul>
      </div>
      <div class="lg:w-1/3 lg:mb-10">
        <NuxtLink to="/premium">
          <button class="lg:visible invisible free-premium border-sm text-center font-bold text-white uppercase lg:mb-10 mx-auto block">
            GRATIS PREMIUM 14 días
          </button>
        </NuxtLink>
        <button class="contact border-sm text-center font-bold text-white uppercase mb-10 mx-auto block">
          CONTACTO
        </button>
        <div>
          <ul class="flex lg:flex-wrap flex-nowrap gap-2 justify-evenly mx-auto mb-5">
            <li>
              <a :href="footer.instagram_link"><img src="~static/img/icon/instagram.png"
                class="image">
              </a>
            </li>
            <li>
              <a :href="footer.facebook_link"><img src="~static/img/icon/facebook.png"
                class="image">
              </a>
            </li>
            <li>
              <a :href="footer.youtube_link"><img src="~static/img/icon/youtube.png"
                class="image">
              </a>
            </li>
          </ul>
          <div class="text-center text uppercase px-5 text-white mt-2 lg:mb-0 mb-36 mx-auto">
            <span class="font-bold">
              Síguenos y participa
            </span>
            <span>
              en nuestras redes sociales
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        footer: [],
      }
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        await this.$axios.$get('/api/main/home/settings/')
          .then(response => {
            this.footer = response.footer;
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    color: #ffffff!important;
    text-decoration: none!important;
  }
  ul {
    margin: 0 auto 20px!important;
  }
  .footer {
    background: #1C496B;
  }
  .footer-logo{
    width: 275px;
  }
  .free-premium {
    background: #FFA800;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    width: 280px;
    height: 40px;
  }
  .contact {
    background: #00A99D;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    width: 280px;
    height: 40px;
  }
  .lists {
    li{
      width: 240px;
      height: 40px;
      line-height: 40px;
    }
  }
  .box{
    width: 277px;
    line-height: 30px;
  }
  .copyright {
    font-size: 10px;
    line-height: 30px;
  }
  .text {
    font-size: 11px;
    width: 280px;
    line-height: 16px;
  }
  @media only screen and (max-width: 1023px) {
    .free-premium {
      width: 100%;
      height: 0;
    }
    .contact {
      width: 100%;
    }
    .text {
      width: 100%;
    }
    .box{
      width: 100%;
    }
  }
</style>