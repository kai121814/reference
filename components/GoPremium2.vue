<template>
  <div class="flex w-full">
    <div class="premium w-2/5 relative">
      <div class="text absolute left-0 bottom-0 w-90 ml-10">
        <div class="font-bold uppercase text-dark-blue text-4xl mt-10 mb-10">
          CORRE MEJORES OLAS, MUCHO MÁS SEGUIDO
        </div>
        <button class="font-bold text-sm text-center tracking-widest-1 uppercase text-dark-blue bg-white px-5 py-3 mb-8 rounded-sm shadow-md">hazte premium</button>
        <div class="text-sm text-white h-20">
          Cámaras exclusivas | Reportes personalizados | Videos sin anuncios | Descuentos exclusivos
        </div>
      </div>
    </div>
    <div class="overflow-hidden w-3/5">
      <img src="~/static/img/banner/surfing-VGSBTXB1.png" class="w-full h-full" />
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .bg-gray {
    background: #E5E5E5;
  }
  .text-gray {
    color: #3C3C3B;
  }
  .text-dark-blue {
    color: #1C496B;
  }
  .input-box {
    width: 505px;
    margin-right: -200px;
  }
  .border-blue-green {
    border: 1px solid #00A99D;
  }
  .bg-blue-green {
    background: #00A99D;
  }
  .text-blue-green {
    color: #00A99D;
  }
  .tracking-widest-1 {
    letter-spacing: 0.25em;
  }
  .w-90 {
    width: 328px;
  }
  .message {
    min-height: 100px;
  }
  .return {
    background: url('~/static/img/icon/flecha_der_left.png') no-repeat 10% 50%;
  }
  .premium {
    background: #FFA800;
    transform: rotate(-180deg);
    .text {
      transform: rotate(-180deg);
    }
  }
</style>