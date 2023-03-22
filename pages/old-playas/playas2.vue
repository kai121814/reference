<template>
  <!-- separate sub components next push -->
  <div>
    <Header/>
    <div class="w-9/12 mx-auto flex mt-10">
      <div class="relative w-1/2">
        <img src="~/static/img/thumbnail/Foto_playa.png" class="visual"/>
        <div class="absolute top-0 mt-5 pl-5 w-full box-border">
          <div class="block">
            <div class="flex">
              <div class="bg-white font-bold text-center text-xs text-blue-1 text-xs pt-0.5 px-5">
                CORRE 3 DE 10
              </div>
              <div class="border border-white mts text-center text-white font-bold text-xs">
                1,34 - 1,56 mts
              </div>
            </div>
          </div>
          <div class="block">
            <div class="flex mt-4">
              <div class="flex">
                <span class="wind-white-icon"></span>
                <span class="uppercase text-center kmh font-bold text-xs text-white pt-0.5">15 km/h</span>
              </div>
              <div class="flex">
                <span class="water-white-icon"></span>
                <span class="uppercase text-center kmh font-bold text-xs text-white pt-0.5 whitespace-nowrap ms">1,14M / 20,0S / 237,0</span>
              </div>
            </div>
          </div>
            <!-- to be change - real scroll next push -->
          <div class="block float-right mr-5">
            <img src="~/static/img/scroll.png" class="scroll mb-10"/>
            <img src="~/static/img/focus.png" class="focus"/>
          </div>
        </div>
      </div>
      <div class="relative w-1/2">
        <img src="~/static/img/thumbnail/Foto_playa.png"  class="visual"/>
        <div class="absolute top-0 mt-5 pl-5 w-full box-border">
          <div class="block">
            <div class="flex">
              <div class="bg-white font-bold text-center text-xs text-blue-1 text-xs pt-0.5 px-5">
                CORRE 3 DE 10
              </div>
              <div class="border border-white mts text-center text-white font-bold text-xs">
                1,34 - 1,56 mts
              </div>
            </div>
          </div>
          <div class="block">
            <div class="flex mt-4">
              <div class="flex">
                <span class="wind-white-icon"></span>
                <span class="uppercase text-center kmh font-bold text-xs text-white pt-0.5">15 km/h</span>
              </div>
              <div class="flex">
                <span class="water-white-icon"></span>
                <span class="uppercase text-center kmh font-bold text-xs text-white pt-0.5 whitespace-nowrap ms">1,14M / 20,0S / 237,0</span>
              </div>
            </div>
          </div>
            <!-- to be change - real scroll next push -->
          <div class="block float-right mr-5">
            <img src="~/static/img/scroll.png"  class="scroll mb-10"/>
            <img src="~/static/img/focus.png"  class="focus"/>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-9/12 mx-auto my-3 pt-7 pb-3">
      <div class="w-1/2 pr-10 border-b border-color-brown">
        <div class="font-light uppercase text-blue text-2xl">
          PLAYA
        </div>
        <div class="font-black text-5xl uppercase la-boca mb-5">
          LA<br>BOCA
        </div>
      </div>
    </div>
    <div class="flex w-9/12 mx-auto my-10">
      <div class="w-1/2 pr-5">
        <div class="block">
          <div class="font-bold uppercase text-2xl text-blue mb-1">
            Reporte de la región
          </div>
          <div class="relative">
            <img src="~/static/img/thumbnail/Foto_playa.png" class="visual"/>
            <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 play-button"></span>
          </div>
          <div>
            <div class="float-right flex mt-2">
              <span class="flex">
                <span class="like-icon block mt-2 mr-2"></span>
                <span class="mt-3 font-bold text-center uppercase text-brown text-xxs">525</span>
              </span>
              <span class="flex">
                <span class="unlike-icon block mt-3 mr-2 ml-3"></span>
                <span class="mt-3 font-bold text-center uppercase text-brown text-xxs">09</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 pl-5 mt-40">
        <canvas id="chart1"></canvas>
      </div>
    </div>
    <div class="w-9/12 mx-auto">
      <div class="uppercase main-title text-blue font-bold">
        REPORTE hoy
      </div>
      <div class="flex mt-3">
        <span class="calendar mr-5 mt-0.5 ml-0.5"></span>
        <span class="uppercase date-day text-black mt-0.5">Lunes <span class="font-bold">25 octubre</span> 2021</span>
      </div>
      <div class="relative">
        <span class="yellow-carret-left absolute translate-y-1/2 transform top-1/2"></span>
        <ul class="flex justify-evenly">
          <li>
            <div>
              <div class="time text-center pt-5">
                <span class="clock block mx-auto mb-1"></span>
                <span class="font-bold text-sm text-center uppercase">09:00</span>
              </div>
              <div class="uppercase status regular text-center text-white font-bold text-xs relative">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                REgular
                </span>
              </div>
              <div class="mts-report border border-t-white text-white text-center">
                <span>
                  <span class="wave-icon block mx-auto mt-5 mb-3"></span>
                  <span class="mts-wave font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span 
                    class="water-white-icon-2 block mx-auto mt-5">
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m 
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="time text-center pt-5">
                <span class="clock block mx-auto mb-1"></span>
                <span class="font-bold text-sm text-center uppercase">10:00</span>
              </div>
              <div class="uppercase status buena text-center text-white font-bold text-xs relative">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                buena
                </span>
              </div>
              <div class="mts-report border border-t-white text-white text-center">
                <span>
                  <span class="wave-icon block mx-auto mt-5 mb-3"></span>
                  <span class="mts-wave font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span 
                    class="water-white-icon-2 block mx-auto mt-5">
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m 
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="time text-center pt-5">
                <span class="clock block mx-auto mb-1"></span>
                <span class="font-bold text-sm text-center uppercase">11:00</span>
              </div>
              <div class="uppercase status corre2de10 text-center text-white font-bold text-xs relative">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                corre 2 de 10
                </span>
              </div>
              <div class="mts-report border border-t-white text-white text-center">
                <span>
                  <span class="wave-icon block mx-auto mt-5 mb-3"></span>
                  <span class="mts-wave font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span 
                    class="water-white-icon-2 block mx-auto mt-5">
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m 
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="time text-center pt-5">
                <span class="clock block mx-auto mb-1"></span>
                <span class="font-bold text-sm text-center uppercase">12:00</span>
              </div>
              <div class="uppercase status regular text-center text-white font-bold text-xs relative">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                regular
                </span>
              </div>
              <div class="mts-report border border-t-white text-white text-center">
                <span>
                  <span class="wave-icon block mx-auto mt-5 mb-3"></span>
                  <span class="mts-wave font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span 
                    class="water-white-icon-2 block mx-auto mt-5">
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m 
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="time text-center pt-5">
                <span class="clock block mx-auto mb-1"></span>
                <span class="font-bold text-sm text-center uppercase">13:00</span>
              </div>
              <div class="uppercase status corre5-6de10 text-center text-white font-bold text-xs relative">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                corre 5 de 10
                </span>
              </div>
              <div class="mts-report border border-t-white text-white text-center">
                <span>
                  <span class="wave-icon block mx-auto mt-5 mb-3"></span>
                  <span class="mts-wave font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span 
                    class="water-white-icon-2 block mx-auto mt-5">
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m 
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="time text-center pt-5">
                <span class="clock block mx-auto mb-1"></span>
                <span class="font-bold text-sm text-center uppercase">14:00</span>
              </div>
              <div class="uppercase status corre5-6de10 text-center text-white font-bold text-xs relative">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                corre 6 de 10
                </span>
              </div>
              <div class="mts-report border border-t-white text-white text-center">
                <span>
                  <span class="wave-icon block mx-auto mt-5 mb-3"></span>
                  <span class="mts-wave font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span 
                    class="water-white-icon-2 block mx-auto mt-5">
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m 
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="time text-center pt-5">
                <span class="clock block mx-auto mb-1"></span>
                <span class="font-bold text-sm text-center uppercase">15:00</span>
              </div>
              <div class="uppercase status corre4de10 text-center text-white font-bold text-xs relative">
                <span class="absolute -translate-x-1/2 -translate-y-1/2 transform left-1/2 top-1/2 w-7/12">
                corre 4 de 10
                </span>
              </div>
              <div class="mts-report border border-t-white text-white text-center">
                <span>
                  <span class="wave-icon block mx-auto mt-5 mb-3"></span>
                  <span class="mts-wave font-bold text-xs text-center uppercase text-white">1.20 mts</span>
                </span>
                <span>
                  <span 
                    class="water-white-icon-2 block mx-auto mt-5">
                  </span>
                  <span class="font-bold text-xs text-center uppercase text-white">
                    <span class="block mt-3 mb-1">
                      2.96m 
                    </span>
                    <span class="block my-1">
                      12s
                    </span>
                    <span class="block my-1">
                      242˚
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </li>
        </ul>
        <span class="yellow-carret-right absolute translate-y-1/2 transform top-1/2 right-0"></span>
      </div>
    </div>
    <div class="w-8/12 mx-auto my-5 ">
      <div class="head-title w-9/12 text-blue font-bold uppercase pb-1">
        MAREAS
      </div>
      <div class="flex">
        <div class="w-9/12 mr-10">
          <div class="flex justify-between w-full">
            <div class="flex pt-6 pb-2 border-b border-color-brown">
              <span class="flex">
                <span class="wave-icon-blue block"></span>
                <span class="uppercase text-blue -mt-0.5 ml-2 mr-10">alta</span>
              </span>
              <span class="flex">
                <span class="clock-blue block"></span>
                <span class="font-bold text-sm text-center lowercase text-brown ml-2 mr-10">08:00</span>
              </span>
              <span class="flex">
                <span class="arrow-up-down-blue block"></span>
                <span class="font-bold text-sm text-center lowercase text-brown ml-2 whitespace-nowrap">1.12 m</span>
              </span>
            </div>
            <div class="flex pt-6 pb-2 border-b border-color-brown">
              <span class="flex">
                <span class="wave-icon-yellow block"></span>
                <span class="uppercase text-yellow -mt-0.5 ml-2 mr-10">alta</span>
              </span>
              <span class="flex">
                <span class="clock-yellow block"></span>
                <span class="font-bold text-sm text-center lowercase text-yellow ml-2 mr-10">08:00</span>
              </span>
              <span class="flex">
                <span class="arrow-up-down-yellow block"></span>
                <span class="font-bold text-sm text-center lowercase text-yellow ml-2 whitespace-nowrap">1.12 m</span>
              </span>
            </div>
          </div>
          <div class="flex justify-between w-full">
            <div class="flex pt-6 pb-2 border-b border-color-brown">
              <span class="flex">
                <span class="wave-icon-blue block"></span>
                <span class="uppercase text-blue -mt-0.5 ml-2 mr-10">alta</span>
              </span>
              <span class="flex">
                <span class="clock-blue block"></span>
                <span class="font-bold text-sm text-center lowercase text-brown ml-2 mr-10">08:00</span>
              </span>
              <span class="flex">
                <span class="arrow-up-down-blue block"></span>
                <span class="font-bold text-sm text-center lowercase text-brown ml-2 whitespace-nowrap">1.12 m</span>
              </span>
            </div>
            <div class="flex pt-6 pb-2 border-b border-color-brown">
              <span class="flex">
                <span class="wave-icon-blue block"></span>
                <span class="uppercase text-blue -mt-0.5 ml-2 mr-10">alta</span>
              </span>
              <span class="flex">
                <span class="clock-blue block"></span>
                <span class="font-bold text-sm text-center lowercase text-brown ml-2 mr-10">08:00</span>
              </span>
              <span class="flex">
                <span class="arrow-up-down-blue block"></span>
                <span class="font-bold text-sm text-center lowercase text-brown ml-2 whitespace-nowrap">1.12 m</span>
              </span>
            </div>
          </div>
        </div>
        <div class="w-2/12 mx-auto">
          <div class="flex pb-3.5">
            <span class="sunrise block"></span>
            <span class="font-bold text-2xl text-center lowercase text-brown w-8/12 ml-2">07:15</span>
          </div>
          <div class="flex pt-3.5 border-t border-color-brown">
            <span class="sunset block"></span>
            <span class="font-bold text-2xl text-center lowercase text-brown w-8/12 ml-2">18:25</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-9/12 mx-auto my-14">
      <ul class="border-blue">
        <li class="" v-for="(day, index) in days" :key="index">
          <div class="block w-full border-blue h-12">
            <div class="flex">
              <span class="carret-down mt-5 mr-5"></span>
              <span class="uppercase pt-2.5 text-blue text-lg">
                REPORTE <span class="font-bold">{{ day.name }}</span>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="w-9/12 mx-auto my-3">
      <div class="title font-bold uppercase">
        COMENTARIOS DESTACADOS
      </div>
      <div>
        <div class="mt-7 mb-10">
          <div class="flex">
            <span class="green-blue-box">
              <span class="comment-icon block mt-2.5 ml-2"></span>
            </span>
            <span class="name font-bold text-white pt-2 pl-3">Nombre Usuario</span>
          </div>
          <div class="px-10 gray-box rounded-sm text-justify relative">
            <div class="pt-8 mb-12">
              <p class="mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <span class="number absolute bottom-20 right-10 font-bold text-center uppercase">
                02
              </span>
            </div>
            <div class="border-top-gray gray-box h-10">
              <div class="float-right mr-10">
                <div class="date text-black uppercase flex">
                  <span class="mt-3 mr-10">
                    <span class="font-bold">25 DICIEMBRE</span> 2020
                  </span>
                  <span class="flex">
                    <span class="like-icon block mt-2 mr-2"></span>
                    <span class="mt-3">25</span>
                  </span>
                  <span class="flex">
                    <span class="unlike-icon block mt-3 mr-2 ml-3"></span>
                    <span class="mt-3">0</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-10">
          <div class="flex">
            <span class="green-blue-box">
              <span class="comment-icon block mt-2.5 ml-2"></span>
            </span>
            <span class="name font-bold text-white pt-2 pl-3">Nombre Usuario</span>
          </div>
          <div class="px-10 gray-box rounded-sm text-justify relative">
            <div class="pt-8 mb-12">
              <p class="mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <span class="number absolute bottom-20 right-10 font-bold text-center uppercase">
                02
              </span>
            </div>
            <div class="border-top-gray gray-box h-10">
              <div class="float-right mr-10">
                <div class="date text-black uppercase flex">
                  <span class="mt-3 mr-10">
                    <span class="font-bold">25 DICIEMBRE</span> 2020
                  </span>
                  <span class="flex">
                    <span class="like-icon block mt-2 mr-2"></span>
                    <span class="mt-3">25</span>
                  </span>
                  <span class="flex">
                    <span class="unlike-icon block mt-3 mr-2 ml-3"></span>
                    <span class="mt-3">0</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative h-10 mb-10">
        <div class="total-number-comments-box absolute right-0 rounded-sm flex px-10">
          <span class="comment-icon block mt-2 mr-4"></span>
          <span class="bg-white rounded-full text-black white-circle uppercase text-center font-bold mt-2 mr-5">525</span>
          <span class="font-bold text-sm text-white text-center mt-2.5">
            COMENTARIOS
          </span>
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
        days: [
          {
            id: 1,
            name: 'LUNES'
          },
          {
            id: 2,
            name: 'MARTES'
          },
          {
            id: 3,
            name: 'Miércoles'
          },
          {
            id: 4,
            name: 'JUEVES'
          },
          {
            id: 5,
            name: 'VIERNES'
          },
          {
            id: 6,
            name: 'sábado'
          },
          {
            id: 7,
            name: 'domingo'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  // shorten next push and use tailwind JusInTime
  .error {
    background-color: #C8142E;
  }
  .warning {
    background-color: #FFA800;
  }
  .text-blue {
    color: #1C496B;
  }
  .text-blue-1 {
    color: #1c496b99;
  }
  .text-brown {
    color: #3C3C3B;
  }
  .text-yellow {
    color: #FFA800;
  }
  .bg-blue {
    background: #1c496b99;
  }
  .bg-dark-blue {
    background: #1C496B;
  }
  .bg-brown {
    background: #3C3C3B;
  }
  .bg-yellow {
    background: #FFA800;
  }
  .bg-light-blue {
    background: #7792A6;
  }
  .bg-gray {
    background: #E5E5E5;
  }
  .border-color-brown {
    border-color: #3C3C3B;
  }
  .text-sm-1 {
    font-size: 15px;
  }
  .text-xxs {
    font-size: 10px;
  }
  .la-boca{  
    background: linear-gradient(111.71deg, #1C496B 0%, #00A99D 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
  .abstract-weekly {
    .box {
      width: 120px;
      height: 150px;
      &:hover {
        background: #3c3c3b40;
      }
    }
  }
  .general-conditons {
    .box {
      height: 240px;
    }
  }
  .panel {
    line-height: 35px;
    letter-spacing: 0.1em;
    height: 40px;
  }
  .alert-icon{
    background: url('~/static/img/icon/alert_icon.png');
    width: 32px;
    height: 30px;
  }
  .cam-icon{
    background: url('~/static/img/icon/cam_icon.png');
    width: 27px;
    height: 20px;
  }
  .calendar {
    background: url('~/static/img/icon/calendar.png');
    width: 20px;
    height: 20px;
  }
  .mts {
    width: 137px;
    height: 20px;
    text-align: center;
  }
  .wind-white-icon{
    width: 20px;
    height: 20px;
    background: url('~/static/img/icon/windy_1_white.png');
  }
  .kmh{
    width: 96px;
    height: 20px;
  }
  .ms {
    width: 137px;
    height: 20px;
  }
  .water-white-icon {
    width: 20px;
    height: 20px;
    background: url('~/static/img/icon/bx-water-2_1_white.png');
  }
  .water-white-icon-2 {
    width: 25px;
    height: 20px;
    background: url('~/static/img/icon/bx-water-2_1_25px-20px.png');
  }
  .border-blue {
    border-top: 1px solid #1C496B;
    border-bottom: 1px solid #1C496B;
  }
  .carret-down {
    width: 20px;
    height: 12px;
    background: url('~/static/img/icon/Flecha_der_yellow.png') no-repeat;
  }
  .title {
    font-size: 36px;
  }
  .green-blue-box{
    background-color: #00A99D;
    width: 40px;
    height: 40px;
  }
  .comment-icon {
    width: 25px;
    height: 25px;
    background-image: url('~/static/img/icon/comment_icon_25px.png');
  }
  .name {
    background: #1C496B;
    width: 280px;
    height: 40px;
    font-size: 15px;
    line-height: 22px;
  }
  .gray-box {
    background: #F0F0F0;
  }
  .border-top-gray {
    border-top: 1px solid #3C3C3B;
  }
  .number {
    font-size: 10px;
    line-height: 15px;
    color: #3C3C3B;
  }
  .date {
    font-size: 10px;
    line-height: 15px;
  }
  .like-icon {
    background-image: url('~/static/img/icon/like_icon.png');
    width: 24px;
    height: 20px;
  }
  .unlike-icon {
    background-image: url('~/static/img/icon/unlike_icon.png');
    width: 24px;
    height: 20px;
  }
  .total-number-comments-box {
    background-color: #FFA800;
    width: 280px;
    height: 40px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  }
  .white-circle {
    font-size: 10px;
    line-height: 25px;
    width: 25px;
    height: 25px;
  }
  .main-title {
    font-size: 36px;
  }
  .date-day {
    font-size: 15px;
    line-height: 22px;
  }
  .clock {
    background-image: url('~/static/img/icon/ios-clock-outline_1_.png');
    width: 22px;
    height: 22px;
  }
  .time {
    width: 80px;
    height: 80px;
    color: #3C3C3B;
  }
  .status {
    width: 80px;
    height: 80px;
  }
  .regular {
    background-color: #3C3C3B;
  }
  .buena {
    background-color: #FFA800;
  }
  .corre2de10{
    background-color: #1c496b99;
  }
  .corre5-6de10 {
    background-color: #1C496B;
  }
  .corre4de10 {
    background-color: #7792A6;
  }
  .mts-report {
    background-color: #1C496B;
    width: 82px;
    height: 200px;
    margin: 0 0 0 -1px;
  }
  .wave-icon {
    background-image: url('~/static/img/icon/wave_icon.png');
    width: 29px;
    height: 20px;
  }
  .yellow-carret-left {
    width: 21px;
    height: 44px;
    background-image: url('~/static/img/icon/big_yellow_carret_left.png');
  }
  .yellow-carret-right {
    width: 21px;
    height: 44px;
    background-image: url('~/static/img/icon/big_yellow_carret_right.png');
  }
  .head-title {
    font-size: 25px;
    line-height: 37px;
    border-bottom: 1px solid #3C3C3B;
  }
  .wave-icon-blue {
    background-image: url('~/static/img/icon/bx-water-2_1_blue.png');
    width: 27px;
    height: 20px;
  }
  .clock-blue {
    background-image: url('~/static/img/icon/ios-clock-outline_1_blue.png');
    width: 22px;
    height: 22px;
  }
  .arrow-up-down-blue {
    background-image: url('~/static/img/icon/arrow-up-down_icon.png');
    width: 20px;
    height: 20px;
  }
  .wave-icon-yellow {
    background-image: url('~/static/img/icon/bx-water-2_1_yellow.png');
    width: 27px;
    height: 20px;
  }
  .clock-yellow {
    background-image: url('~/static/img/icon/ios-clock-outline_1_yellow.png');
    width: 22px;
    height: 22px;
  }
  .arrow-up-down-yellow {
    background-image: url('~/static/img/icon/arrow-up-down_icon_yellow.png');
    width: 20px;
    height: 20px;
  }
  .sunrise {
    background-image: url('~/static/img/icon/sunrise_1_.png');
    width: 40px;
    height: 40px;
  }
  .sunset {
    background-image: url('~/static/img/icon/sunset_1_.png');
    width: 40px;
    height: 40px;
  }
  .sound-icon{
    background-image: url('~/static/img/icon/sound_icon.png');
    width: 25px;
    height: 20px;
  }
  .play-button {
    background-image: url('~/static/img/icon/play_78px_78px.png');
    width: 78px;
    height: 78px;
  }
</style>