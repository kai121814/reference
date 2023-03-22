<template>
  <div  class="header">
      <div class="flex container mx-auto lg:w-8/12 lg:pt-1">
        <span class="lg:order-1 order-3 yellow">
          <i class="fas fa-bars w text-white pt-0.5"></i>
        </span>
        <span class="order-2 yellow-D D-icon rounded-full text-white text-center font-bold uppercase pt-0.5 ml-12 mr-6 mt-1 lg:mt-0">
          D
        </span>
        <span class="m-auto order-1 lg:order-3">
          <img src="~/static/img/logo/imagotipo.png">
        </span>
      </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .header {
    background: #1C496B;
    height: 40px;
  }
  .D-icon {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
  .yellow-D{
    background: #FFA800;
  }
  .fa-bars {
    font-size: 30px;
  }
  @media only screen and (max-width: 1023px) {
    .yellow{
      background: #FFA800;
      padding: 3px 7px 3px 7px;
    }
  }
</style>