<template>
  <div class="overflow-x-hidden">
    <Header/>
    <div>
        <div class="gradient-color">
            <div class="hero-container lg:flex mx-auto lg:w-9/12 bg-white">
                <div class="lg:order-2 order-1 lg:w-1/2 lg:float-right lg:rounded-tr-full lg:visible invisible">
                    <img src="~/static/img/banner/Rectangle194-1.png" class="w-full lg:h-60 h-52"/>
                </div>
                <div class="lg:w-1/2 lg:order-1 order-2">
                    <div class="curved-corner-topright lg:bottom-0 lg:absolute"></div>
                        <div class="lg:w-96 lg:ml-12">
                            <img src="https://media-buscaolas.s3.sa-east-1.amazonaws.com/torneos/big-toto/IMG-20220610-WA0032.jpg" class="mx-auto lg:mt-5 -mt-24 mb-7"/>  
                        <h1 class="text-gray font-bold text-3xl leading-10 text-center uppercase">
                           Big Toto
                        </h1> 
                        <span class="flex text-xs w-min mx-auto lg:mt-0 mt-10">
                            <span class="calendar"></span>
                            <span class="uppercase text-black ml-4 mt-0.5 whitespace-nowrap">
                                Lunes 13 de
                                <span class="font-bold">Junio</span>
                                2022
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="lg:w-9/12 mx-auto pt-14">
         <div class="uppercase text-4xl font-bold my-12 text-black">
            Estado: It's on! 
         </div>
          <p class="lg:w-full w-11/12 mx-auto mt-10 text-black"></p>
        <div class=" video-container"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCusJ3LN7-_H4x-Z7LItoHxQ" frameborder="0" allowfullscreen></iframe></div>
         <div class="uppercase text-4xl font-bold my-12 text-blue">
            Sistema de competencia del Big Toto 2022
         </div>
        <p class="lg:w-full w-11/12 mx-auto mt-10 text-black">El formato de competencia de Big Toto 2022 está basado en las reglas de los torneos de 
        olas grandes, con algunas diferencias respecto a los torneos tradicionales de la WSL</p>
        <p class="lg:w-full w-11/12 mx-auto mt-10 text-black">En concreto, son 24 competidores (23 hombres y una mujer), que están divididos en 4 
            series de 6 competidores</p>
        <p class="lg:w-full w-11/12 mx-auto mt-10 text-black">Los heats son de 40 minutos y pasarán a la siguiente ronda los tres que tengan mejor 
        puntaje de cada heat</p>
        <p class="lg:w-full w-11/12 mx-auto mt-10 text-black">Hay podio para los seis primeros lugares</p>
         <div class="uppercase text-4xl font-bold my-12 text-blue">
           Puntuación
         </div>
          <p class="lg:w-full w-11/12 mx-auto mt-10 text-black">Los puntajes van del 0 al 10, y para calcular el resultado final de cada surfista en el heat, se 
            usarán los dos mejores puntajes obtenidos: el primero se multiplicará por dos, mientras que 
            el segundo se mantendrá igual. Esos dos números se sumarán para obtener el total.</p>
           <p class="lg:w-full w-11/12 mx-auto mt-10 text-black">Para que los jueces evalúen, será primordial la altura de la ola que surfeen, más allá de la 
            técnica que presenten</p>
    </div>
    <div class="lg:w-9/12 w-11/12 mx-auto mt-10 lg:mb-24 mb-10">
<div class="relative overflow-x-auto sm:rounded-lg" v-for=" heat in HeatsData" :key="heat.heat_name">
    <div class="uppercase text-xl font-bold my-8 text-black">
            {{heat.heat_name}} : {{heat.heat_time}}
    </div>
    <table class="w-8/12 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    #
                </th>
                <th scope="col" class="px-6 py-3">
                    Competidor
                </th>
                <th scope="col" class="px-6 py-3">
                   Puntaje
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="comp in heat.heats" :key="comp.position">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                   {{comp.position}}
                </th>
                <td class="px-6 py-4">
                   {{comp.competitor}}
                </td>
                <td class="px-6 py-4">
                   {{comp.score}}
                </td>
            </tr>
        </tbody>
    </table>
</div>
        <!-- <ul class="flex flex-wrap lg:justify-between justify-evenly lg:gap-5 w-full">
            <li class="mb-5">
                <img src="~/static/img/banner/Rectangle194-1.png" class="w-28 h-28 rounded-full mx-auto">
            </li>
            <li class="mb-5">
                <img src="~/static/img/banner/Rectangle194-1.png" class="w-28 h-28 rounded-full mx-auto">
            </li>
            <li class="mb-5">
                <img src="~/static/img/banner/Rectangle194-1.png" class="w-28 h-28 rounded-full mx-auto">
            </li>
            <li class="mb-5">
                <img src="~/static/img/banner/Rectangle194-1.png" class="w-28 h-28 rounded-full mx-auto">
            </li>
            <li class="mb-5">
                <img src="~/static/img/banner/Rectangle194-1.png" class="w-28 h-28 rounded-full mx-auto">
            </li>
            <li class="mb-5">
                <img src="~/static/img/banner/Rectangle194-1.png" class="w-28 h-28 rounded-full mx-auto">
            </li>
            <li class="mb-5">
                <img src="~/static/img/banner/Rectangle194-1.png" class="w-28 h-28 rounded-full mx-auto">
            </li>
        </ul> -->
    </div>
    <div class="go-premium lg:flex">
        <div class="premium lg:w-1/2 lg:pb-0 pb-12 relative">
            <div class="text lg:absolute lg:left-0 lg:bottom-0 lg:w-2/3 w-9/12 lg:mx-0 mx-auto lg:ml-10">
                <div class="font-bold uppercase text-dark-blue lg:text-4xl text-2xl mt-10 lg:mb-10 mb-8 lg:text-left text-center">
                    CORRE MEJORES OLAS, MUCHO MÁS SEGUIDO
                </div>
                <button class="font-bold text-sm text-center tracking-widest-1 uppercase text-dark-blue-hazte lg:bg-white bg-green-blue px-5 lg:py-3 py-2 lg:mb-8 mb-6 rounded-sm shadow-md lg:mx-0 mx-auto block">hazte premium</button>
                <div class="text-sm lg:text-white text-gray-600 lg:h-20 lg:text-left text-center lg:pb-0 pb-10 block">
                    Cámaras exclusivas | Reportes personalizados | Videos sin anuncios | Descuentos exclusivos
                </div>
            </div>
        </div>
        <div class="overflow-hidden lg:inline-block hidden">
            <img src="~/static/img/banner/surfing-VGSBTXB1.png" class="h-max" />
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default {
      head() {
    return {
      title:
        "Big Toto 2022 - Buscaolas",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Big toto torneo de surf en Totoralillo"
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Big Toto 2022 - Buscaolas",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Big toto torneo de surf en Totoralillo "
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://media-buscaolas.s3.sa-east-1.amazonaws.com/torneos/big-toto/IMG-20220610-WA0032.jpg"
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://buscaolas.cl/torneo/big-toto"
        },
      ],
    };
  },
      data() {
          return {
              url: "https://c75a7e79204e539d.mediapackage.us-east-1.amazonaws.com/out/v1/ae4f3de03af941b093da2455d934df95/index.m3u8"
          }
      },
        async asyncData({ $axios }) {
      const HeatsData = await $axios.$get("/api/torneo/torneo");
      return { HeatsData };
    }
  }
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
    .text-dark-blue-hazte {
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
    .go-premium {
        .premium {
            background: #FFA800;
            transform: rotate(-180deg);
            .text {
                transform: rotate(-180deg);
            }
        }
    }
    .text-blue {
        color: #1C496B;
    }
    .text-gray {
        color: #3C3C3B;
    }
    .gradient-color{
        background: linear-gradient(163.41deg, #1C496B 0%, #00A99D 100%);
        transform: rotate(-180deg);
        .hero-container{
            transform: rotate(180deg);
        }
    }
    .curved-corner-topright {
        width: 100px;
        height: 100px;
        overflow: hidden;
        background: none;
        transform: rotate(90deg);
        margin: 0 0 0 -99.5px;
    }
    .curved-corner-topright:before {
        content: "";
        display: block;
        width: 200%;
        height: 200%;
        position: absolute;
        border-radius: 50%;
        top: 0;
        right: 0;
        box-shadow: 50px -50px 0 0 #fff;
    }
    .calendar {
        background: url('~/static/img/icon/calendar.png');
        width: 20px;
        height: 20px;
    }
    .circle{
        width: 120px;
        height: 120px;
    }
    .video-container { position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden; }
    .video-container iframe, .video-container object, .video-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
    @media only screen and (max-width: 1023px) {
        .gradient-color{
            background: none;
        }
        .curved-corner-topright{
            width: 0;
            height: 0;
        }
        .go-premium {
            .premium {
                background: #F0F0F0;
            }
        }
        .bg-green-blue {
            background: #00A99D;
        }
        .text-dark-blue-hazte {
            color: #fff;
        }
    }
</style>