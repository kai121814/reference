<template>
    <div class="lg:flex lg:w-9/12 w-11/12 mx-auto lg:mt-24 lg:mb-24 mt-16 mb-32">
        <div class="lg:w-1/3">
            <h1 class="font-bold uppercase text-red text-4xl mb-10 lg:text-left text-center">ÚLTIMA ALERTA</h1>
        </div>
        <div class="lg:w-1/3">
            <div class="lg:w-80 w-full h-60">
                <img src="~/static/img/thumbnail/Rectangle7.png" class="lg:w-80 w-full h-60 object-cover"/>
            </div>
            <div class="flex uppercase lg:w-80 w-full">
                <span class="font-bold text-sm text-center text-white bg-red w-1/3 inline-block py-0.5 px-1">noticia</span>
                <span class="px-2">Junio 28, 2021</span>
            </div>
        </div>
        <div class="lg:w-1/3 lg:ml-8">
            <p class="uppercase text-2xl text-gray heading font-bold mb-10 lg:w-80 w-full h-28">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p class="text-sm text-gray sub-heading normal-case text-sm lg:mb-0 mb-5 lg:w-80 w-full h-14">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...
            </p>
            <button class="uppercase float-right px-2 py-1.5 text-gray font-bold read-more border border-gray border-sm text-center w-40 mt-3">
              leer mas
            </button>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
  .bg-red {
    background: #C8142E;
  }
  .text-red {
    color: #C8142E;
  }
  .text-gray {
    color: #3C3C3B;
  }
  .border-gray {
    border-color:#3C3C3B;
  }
  .read-more {
    letter-spacing: 0.25em;
  }
</style>