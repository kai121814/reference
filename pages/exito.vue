<template>
  <div>
    <Header/>
    <div>
      <div class="relative">
        <div class="banner-bg"></div>
      </div>
      <div>
        <div class="
            text
            text-sm
            text-box1
            mx-auto
            lg:text-center 
            text-left 
            z-10 
            lg:static 
            absolute 
            lg:left-auto
            transform 
            left-1/2 
            -translate-x-1/2 
            -translate-y-1/2 
            lg:-translate-x-0 
            lg:-translate-y-0
            bg-white 
            px-5 
            pt-5 
            pb-3">
          <div class="text-2xl text-center lg:py-10 pt-7 pb-3 lg:font-bold font-semibold gray-to-white">
            Bienvenido a Premium {{InfoData.subscription.first_name}}.
          </div>
          <div class="lg:my-7 color-gray">
            <p>Hemos verificado tu subscripcion y ahora eres parte de la <span class="font-bold">familia premium.</span> Con increibles beneficios para ti. 
            </p><p v-if="InfoData.subscription.usuarios_set[0].suscripcion_tipo.id == 3">Te recordamos que tienes 14 dias de pruebas y tu primer cobro se realizara el<span class="font-bold"> {{ $moment(InfoData.subscription.usuarios_set[0].siguiente_pago).format('DD MMMM YYYY')}}</span></p>
            <p v-if="InfoData.subscription.usuarios_set[0].suscripcion_tipo.id == 4">Te recordamos que tu segundo pago se realizara el <span class="font-bold"> {{ $moment(InfoData.subscription.usuarios_set[0].siguiente_pago).format('DD MMMM YYYY')}}</span></p>
          </div>
          <div class="italic font-bold color-gray mt-5">¡vamos a la playa, respetémosla y<br> disfrutemosla como nunca!</div>
        </div>
        <div class="line-height-34px green-bg text-box2 lg:mx-auto text-center lg:font-bold font-semibold lg:mt-5 p-5 relative z-10">
          <img src="~/static/img/vector-text/quotes/Vector-1.png" class="transform rotate-180 -z-10 absolute lg:invisible visible"/>
          <img src="~/static/img/vector-text/quotes/Vector.png" class="transform rotate-180 -z-10 absolute right-7 bottom-5 lg:invisible visible"/>
        </div>
      </div>
      <div class="cover-bg lg:visible invisible h-0 lg:h-auto mt-0 lg:-mt-28">
        <div class="cover">
          <div class="box pt-24 pb-10">
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default {
      async asyncData({ $axios, query }) {
      const InfoData = await $axios.$get("/api/main/user/subscription/" + query.subscription_id);
      return { InfoData };
    },
  }
  // /exito?subscription_id=sub9f069728c2cde58fb3a&id=01ab40d206b967317a000d99c8d2eb86ef11f39e4340b1a7655bf632b81f1d0d
</script>

<style lang="scss" scoped>
  .w-85{
    width: 22rem;
  }
  .color-gray {
    color: #3C3C3B;
  }
  .line-height-34px{
    line-height: 34px;
  }
  .text-box1{
    width: 319px;
    height: auto
  }
  .text-box2{
    width: 320px;
    height: auto;
  }
  .banner-bg {
    background: url('~/static/img/banner/Banner_exito.png');
    width: 100%;
    height: 320px;
  }
  .cover-bg{
    background: url('static/img/background/image1.png');
    transform: rotate(-180deg);
    width: 100%;
    .cover {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
      .box {
        transform: rotate(180deg);
      }
    }
  }
  .gray-to-white{
    color: #3C3C3B;
  }
  @media only screen and (max-width: 1023px) {
    .banner-bg{
      background: url('~/static/img/banner/image3.png') no-repeat;
      background-size: 100% 617px;
      height: 617px;
    }
    .green-bg{
      background: #00A99D;
    }
    .text-box2{
      width: 100%;
    }
    .gray-to-white{
      color: #fff;
    }
    .text-box1 {
      margin: -136px 0 0 0;
    }
  }
</style>