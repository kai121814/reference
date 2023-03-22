<template>
  <div>
    <!-- <Header /> -->
    <div class="">
      <div class="bg-wave relative">
       <div class="adblocker-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div class="py-10 gradient-pink">
        <h1 class="text-gray font-bold text-2xl italic text-center md:w-2/12 w-11/12 mx-auto pb-14">
        Estas usando un Adblocker</h1>
        <div class="md:w-3/12 w-11/12 mx-auto text-sm tracking-tight">
          <p>
            Por favor desactiva el Adblocker para continuar usando nuestro sitio
            web.
          </p>
          <p>
            Con los ads, podemos entregar cámaras gratis en toda las playas
            donde tenemos nuestras cámaras.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
 .bg-wave {
  background: url("~/static/img/banner/image2exito.png") no-repeat;
  width: 100%;
  background-size: 100% 100%;
  min-height: 320px;
 }
 .adblocker-icon {
  background: url("~/static/img/icon/stop1.png") no-repeat;
  background-size: 100% 100%;
  width: 217px;
  height: 217px;
 }
 .text-gray {
  color: #3C3C3B;
 }
 .text-black-1 {
  color: #3C3C3B;
 }
 .gradient-pink {
  background-image: linear-gradient(to bottom, #ffffff00, #ffffff00, #efa8ac);
  height: 700px;
 }
 @media only screen and (max-width: 1023px) {
  .bg-wave {
   min-height: 110px;
  }
  .adblocker-icon {
   width: 100px;
   height: 100px;
  }
  .gradient-pink {
   height: 500px;
  }
 }
</style>