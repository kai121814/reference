<template>
  <div class="mx-auto lg:flex go-premium-banner p-10 mb-10">
    <div class="mb-8 lg:mb-0 font-bold uppercase text-center lg:text-left text-2xl leading-9">
     Toda la información de la alerta con Premium.
    </div>
    <div class="mx-auto">
      <NuxtLink to="/premium"><button class="go-premium text-white uppercase rounded-sm font-bold block mx-auto lg:mt-8 mb-5">hazte premium</button></NuxtLink>
      <div class="text text-center">
        Prueba 14 dias gratis y disfruta de los multiples beneficios de premium
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
  .go-premium-banner {
    background: #F0F0F0;
  }
  .heading {
    color: #1C496B;
    width: 440px;
    height: 120px;
  }
  .go-premium {
    background: #FFA800;
    width: 200px;
    height: 40px;
  }
  .text {
    color: #3C3C3B;
    width: 360px;
    height: 40px;
  }
  @media only screen and (max-width: 1023px) {
    .heading {
      width: 100%;
      height: auto;
    }
    .text {
      width: 100%;
      height: auto;
    }
  }
</style>