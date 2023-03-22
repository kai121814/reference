<template>
  <div>
    <Header/>
    <div>
      <div class="relative">
        <div class="banner-bg"></div>
        <img src="~/static/img/logo/Group29.png" class="absolute lg:top-1/2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 lg:w-85">
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
          <div class="lg:my-7 color-gray">
            <span class="font-bold">
              Somos un grupo de surfistas, amantes del deporte y la naturaleza,</span>
              y queremos poder acercar este maravillosos deporte a todas las personas. buscamos 
              <span class="font-bold">
              brindar la información necesaria para poder conocer el estado de nuestras playas,</span> 
              sus bondades y toda la comunidad que lo rodea para que juntos podamos 
              <span class="font-bold">disfrutar de la naturaleza y respetar al sector al que vayamos.</span>
          </div>
          <div class="italic font-bold color-gray mt-5">¡vamos a la playa, respetémosla y<br> disfrutemosla como nunca!</div>
        </div>
        <div class="line-height-34px green-bg text-box2 lg:mx-auto text-center lg:font-bold font-semibold lg:mt-5 p-5 relative z-10">
          <img src="~/static/img/vector-text/quotes/Vector-1.png" class="transform rotate-180 -z-10 absolute lg:invisible visible"/>
          <div class="text-2xl lg:italic gray-to-white">
            El mar no tiene caminos ni explicaciones, pero una vez que la encuentras, entiendes todas tus pasiones. 
          </div>
          <div class="text-2xl text-center lg:py-10 pt-7 pb-3 lg:font-bold font-semibold gray-to-white">
            POR ESO BUSCAMOS LA <br>OLA.
          </div>
          <img src="~/static/img/vector-text/quotes/Vector.png" class="transform rotate-180 -z-10 absolute right-7 bottom-5 lg:invisible visible"/>
        </div>
      </div>
      <div class="cover-bg lg:visible invisible h-0 lg:h-auto mt-0 lg:-mt-28">
        <div class="cover">
          <div class="box pt-24 pb-10">
            <GoPremium />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default {}
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
    background: url('~/static/img/banner/image2.png');
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