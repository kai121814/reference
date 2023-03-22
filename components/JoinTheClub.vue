<template>
  <div class="join-the-club pt-20 pb-14">
    <div class="lg:w-9/12 mx-auto lg:flex">
    <div class="">
      <img src="~static/img/vector-text/unete.png" class="image mx-auto">
      <img src="~static/img/vector-text/alclub.png" class="image mx-auto">
    </div>
    <div class="text uppercase text-white lg:mx-14 w-1/3">
      <div class="font-bold lg:hidden visible w-full text-center mt-7">
        CONOCE TUS BENEFICIOS
      </div>
      <div class="font-bold lg:visible invisible">
        Increible descuentos para todos los premium  
      </div>
      <div class="lg:visible invisible">
        y eventos especialmente pensados para ti
      </div>
    </div>
    <div class="relative mx-auto lg:w-7/12 lg:w-1/3 pl-2 lg:mb-10">
      <NuxtLink class="mt-5 text-center benefits text-white uppercase rounded-sm font-bold lg:absolute lg:top-1/3 mx-auto block pt-2" to="/buscaolas-club">
        BENEFICIOS
      </NuxtLink>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .join-the-club {
    background: linear-gradient(163.41deg, #1C496B 0%, #00A99D 100%);
  }
  .text {
    font-size: 25px;
    min-width: 600px;
    height: 160px;
  }
  .benefits {
    background: #FFA800;
    width: 200px;
    height: 40px;
    font-size: 15px;
    letter-spacing: 0.25em;
  }
  @media only screen and (max-width: 1023px) {
    .text {
      width: 100%;
      height: 50px;
      min-width: 320px;
      text-align: center;
    }
  }
</style>