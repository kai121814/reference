<template>
  <div>
    <Header/>
    <div>
      <div class="relative">
        <div class="banner-bg"></div>
      </div>
      <div class="mb-24">
        <div class="
            text
            mb-24
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
          <div class="text-2xl text-center lg:py-10 pt-7 pb-3 lg:font-bold font-semibold gray-to-white" v-if="!success">
            Ingresa tus datos para cambiar tu clave
          </div>
          <div class="text-2xl text-center lg:py-10 pt-7 pb-3 lg:font-bold font-semibold gray-to-white" v-if="success">
            Bro! cambiamos tu clave con exito
          </div>
           <form class="w-min mx-auto text-center" @submit.prevent="Changepassword()" v-if="!success">
              <input placeholder="contraseña" type="password" class="block rounded-sm text-sm text-center text-blue text-wide bg-gray w-80 py-2 mb-9" v-model="password1"/>
              <input placeholder="Repite contraseña" type="password" class="block rounded-sm text-sm text-center text-blue text-wide bg-gray w-80 py-2" v-model="password2"/>
              <button type="submit" class="font-bold text-base text-center letter-spacing-0-25-em uppercase text-white block bg-blue-green rounded-sm mx-auto py-2 px-10 my-5" v-if="!success">Cambiar Contraseña</button>
        </form>
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
    data() {
      return {
        password1: null,
        password2: null,
        success: false
      }
    },
    methods: {
      async Changepassword() {
        if (this.password1 == this.password2) {
            try {
              let response = await this.$axios.$post('api/main/reset-password/confirm/', {
                            password: this.password1,
                            token: this.$route.query.token
                        })
              this.success = true
            } catch(e){
              if (e.response.status == 404) {
              this.$toast.error("link a expirado, debes volver a solicitar tu clave")
              } else {
              this.$toast.error(e.response.detail)
              }
            }
        } else {
          this.$toast.error("La clave no son iguales")
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .w-85{
    width: 22rem;
  }
  .color-gray {
    color: #3C3C3B;
  }
  .free-premium {
    background: #FFA800;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    width: 280px;
    height: 40px;
  }
  .line-height-34px{
    line-height: 34px;
  }
  .text-box1{
    width: 319px;
    height: auto
  }
  .bg-gray {
        background: #E2E2E2;
    }
  .bg-blue-green {
        background: #00A99D;
    }
  .text-box2{
    width: 320px;
    height: auto;
  }
  .banner-bg {
    background: url('~/static/img/banner/banner_rechazo.png');
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