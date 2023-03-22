<template>
  <div>
    <Header :registerPremium="register1" @CloseRegisterEvent="register1=false"/>
    <div class="lg:flex">
        <img src="~/static/img/banner/image5.png" class="h-96 w-5/12 lg:inline-block hidden"/>
        <div class="gradient w-full">
            <div class="box lg:h-96 lg:p-10 p-8">
                <div class="font-black uppercase text-white text-4xl">
                    CORRE MEJORES OLAS, MUCHO MÁS SEGUIDO.
                </div>
                <div class="font-bold text-sm uppercase text-white lg:my-8 my-2">
                    <span class="flex flex-wrap lg:w-10/12">
                        <span class="lg:border-r border-white pr-3 lg:whitespace-nowrap">Cámaras exclusivas</span>
                        <span class="lg:border-r border-white pr-3 lg:pl-3 lg:whitespace-nowrap">Reportes personalizados</span>
                        <span class="lg:border-r border-white pr-3 lg:pl-3 lg:whitespace-nowrap">Videos sin anuncios</span>
                        <span class="lg:whitespace-nowrap">Descuentos exclusivos</span>
                    </span>
                </div>
                <div class="font-bold uppercase text-white text-2xl lg:mb-10 mb-5 lg:text-left text-center lg:mt-0 mt-5">
                    <h3 class="lg:inline-block block">POR SOLO</h3>
                    <h3 class="lg:inline-block block">$5.000 MENSUALES</h3>
                </div>
                <div class="">
                    <button class="lg:inline-block block blue-green rounded-sm font-bold text-sm-1 text-center uppercase text-white py-2 px-5 shadow lg:mx-0 mx-auto lg:my-0 my-3" @click="ToRegister()">PRUEBA GRATIS</button>
                    <span class="lg:inline-block block text-white font-bold uppercase text-center text-xs pl-5">( por 14 días )</span>
                </div> 
            </div>
        </div>
    </div>
    <div class="lg:flex flex-wrap lg:w-10/12 mx-auto lg:mt-24 mt-14 lg:mb-16 mb-10">
        <div class="lg:w-1/2 text-blue lg:pr-10 w-10/12 mx-auto lg:mb-16 mb-10">
            <div class="graph block mx-auto mb-2"></div>
            <div class="uppercase lg:text-4xl md:text-2xl text-xl leading-loose-1 mb-5">
                <span class="lg:font-bold font-black whitespace-nowrap">Reportes extendidos</span>
                y únicos por playa
            </div>
            <div class="uppercase text-sm">
                <p class="mb-5">
                    CONSIDERANDO TODAS LAS VARIABLES GEOGRÁFICAS, MORFOLÓGICAS, Y CON AYUDA DE NUESTRAS CÁMARAS DESARROLLAMOS PRONÓSTICOS REALES CON MÁS DE UN 95% DE PRECISIÓN.
                </p>
                <p>
                    ESTO ES LO QUE NOS DIFERENCIA DE PORTALES COMO MSW O WINDGURU,
                </p>
            </div>
        </div>
        <div class="lg:w-1/2 text-blue lg:pr-10 w-10/12 mx-auto lg:mb-16 mb-10">
            <div class="camera block mx-auto mb-2"></div>
            <div class="uppercase lg:text-4xl md:text-2xl text-xl leading-loose-1 mb-5">
                <span class="lg:font-bold font-black">cámaras</span> 
                exclusivas
            </div>
            <div class="uppercase text-sm">
                <p class="mb-5">
                    MIRA OTROS PUNTOS DE VISTA DE LAS PLAYAS CON CÁMARAS ADICIONALES APUTANDO OTROS SECTORES DEL MAR.
                </p>
                <p>NO TE PIERDAS NINGÚN RINCÓN DE TUS PLAYAS.</p>
            </div>
        </div>
        <div class="lg:w-1/2 text-blue lg:pr-10 w-10/12 mx-auto lg:mb-16 mb-10">
            <div class="no-audio block mx-auto mb-2"></div>
            <div class="uppercase lg:text-4xl md:text-2xl text-xl leading-loose-1 mb-5 lg:whitespace-normal whitespace-nowrap">
                VIdeo <span class="lg:font-bold font-black">ads free</span>+<span class="lg:font-bold font-black">zoom</span>
            </div>
            <div class="uppercase text-sm">
                <p class="mb-5">
                    VE LAS OLAS SIN AVISOS, CON ALTA DEFINICIÓN Y SIN INTERRUPCIONES.
                </p>
                <p>
                    APROVECHA DE LOS BENEFICIOS DE TU PROPIO ZOOM Y VISTAS MULTICÁMARA PANORÁMICAS DE TUS PLAYAS.
                </p>
            </div>
        </div>
        <div class="lg:w-1/2 text-blue lg:pr-10 w-10/12 mx-auto lg:mb-16 mb-10">
            <div class="percent block mx-auto mb-2"></div>
            <div class="uppercase lg:text-4xl md:text-2xl text-xl leading-loose-1 mb-5 lg:whitespace-normal whitespace-nowrap">
                <span class="lg:font-bold font-black">descuentos</span> exclusivos
            </div>
            <div class="uppercase text-sm">
                <p class="mb-5">ACCEDE AL CLUB DE DESCUENTOS PREMIUM DE BUSCAOLAS.</p>
                <p>BENEFICIOS EXCLUSIVOS EN EQUIPAMIENTO, COMIDAS Y TODO LO NECESARIO PARA HACER MEJORES TUS SESIONES.</p>
            </div>
        </div>
    </div>
    <div class="gradient2">
        <div class="lg:flex box lg:w-9/12 lg:mx-auto">
            <div class="uppercase lg:w-1/2 mt-16 mb-20">
                <div class="text-4xl text-center text-white px-16 mt-2 mb-16 leading-snug">
                    ACCEDE A ESTOS BENEFICIOS <span class="font-bold">POR SOLO $5.000/MES</span> ¡PRUEBALO POR 14 DIAS <span class="font-bold">GRATIS</span>!
                </div>
                <!-- <button class="block mx-auto bg-white font-bold text-base text-center uppercase tracking-wide blue-green-text shadow mb-10 py-2 px-3 w-44">hazte premium</button> -->
                <button class="block mx-auto blue-green rounded-sm font-bold text-base text-center tracking-wide uppercase shadow text-white py-2 px-3 w-44" @click="ToRegister()">PRUEBA GRATIS</button>
            </div>
            <div class="lg:order-2 order-1 uppercase lg:w-1/2 lg:mt-16 lg:pt-0 pt-10 text-white pb-14">
                <ul class="lg:w-9/12 w-11/12 mx-auto">
                    <li class="h-7">
                        <span class="float-right font-bold text-sm text-center uppercase">
                            <span class="mx-2">Gratis</span>
                            <span class="mx-2">premium</span>
                        </span>
                    </li>
                    <li class="border-t border-white flex">
                        <span class="w-7/12 h-10 relative">
                            <span class="leading-tight absolute -translate-y-1/2 transform top-1/2">
                                cámaras full hd
                            </span>
                        </span>
                        <span class="x-icon m-auto"></span>
                        <span class="check-icon m-auto"></span>
                    </li>
                    <li class="border-t border-white flex">
                        <span class="w-7/12 h-10 relative">
                            <span class="leading-tight absolute -translate-y-1/2 transform top-1/2">
                                video sin anuncio
                            </span>
                        </span>
                        <span class="x-icon m-auto"></span>
                        <span class="check-icon m-auto"></span>
                    </li>
                    <li class="border-t border-white flex">
                        <span class="w-7/12 h-10 relative">
                            <span class="leading-tight absolute -translate-y-1/2 transform top-1/2">
                                cámaras exclusivas
                            </span>
                        </span>
                        <span class="x-icon m-auto"></span>
                        <span class="check-icon m-auto"></span>
                    </li>
                    <li class="border-t border-white flex">
                        <span class="w-7/12 h-10 relative">
                            <span class="leading-tight absolute -translate-y-1/2 transform top-1/2">
                                multicam
                            </span>
                        </span>
                        <span class="x-icon m-auto"></span>
                        <span class="check-icon m-auto"></span>
                    </li>
                    <li class="border-t border-white flex">
                        <span class="w-7/12 h-10 relative">
                            <span class="leading-tight absolute -translate-y-1/2 transform top-1/2">
                                zoom
                            </span>
                        </span>
                        <span class="x-icon m-auto"></span>
                        <span class="check-icon m-auto"></span>
                    </li>
                    <li class="border-t border-white flex">
                        <span class="w-7/12 h-10 relative">
                            <span class="leading-tight absolute -translate-y-1/2 transform top-1/2">
                                reportes únicos
                            </span>
                        </span>
                        <span class="x-icon m-auto"></span>
                        <span class="check-icon m-auto"></span>
                    </li>
                    <li class="border-t border-white flex">
                        <span class="w-7/12 h-10 relative">
                            <span class="leading-tight absolute -translate-y-1/2 transform top-1/2">
                                +3 días reporte
                            </span>
                        </span>
                        <span class="check-icon m-auto"></span>
                        <span class="check-icon m-auto"></span>
                    </li>
                    <li class="border-t border-white flex">
                        <span class="w-7/12 h-10 relative">
                            <span class="leading-tight absolute -translate-y-1/2 transform top-1/2">
                                +7 días reporte
                            </span>
                        </span>
                        <span class="x-icon m-auto"></span>
                        <span class="check-icon m-auto"></span>
                    </li>
                    <li class="border-t border-white flex">
                        <span class="w-7/12 h-10 relative">
                            <span class="leading-tight absolute -translate-y-1/2 transform top-1/2">
                                alertas y reportes vía correo
                            </span>
                        </span>
                        <span class="x-icon m-auto"></span>
                        <span class="check-icon m-auto"></span>
                    </li>
                    <li class="border-t border-white flex">
                        <span class="w-7/12 h-10 relative">
                            <span class="leading-tight absolute -translate-y-1/2 transform top-1/2">
                                descuentos club buscaolas
                            </span>
                        </span>
                        <span class="x-icon m-auto"></span>
                        <span class="check-icon m-auto"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default { 
      data () {
          return {
              register1: false
          }
      },
      methods: {
          ToRegister() {
              this.register1 = true
          }
      }
  }
</script>

<style lang="scss" scoped>
    .gradient {
        background: linear-gradient(163.41deg, #1C496B 0%, #00A99D 100%);
        transform: rotate(-180deg);
        .box {
            transform: rotate(-180deg);
        }
    }
    .gradient2 {
        background: linear-gradient(163.41deg, #1C496B -8.9%, #00A99D 91.1%);
        background-blend-mode: multiply;
        transform: rotate(-180deg);
        .box {
            transform: rotate(180deg);
        }
    }
    .text-sm-1 {
        font-size: 15px;
        letter-spacing: 0.25em;
    }
    .blue-green {
        background: #00A99D;
    }
    .text-blue {
        color: #1C496B;
    }
    .leading-loose-1 {
        line-height: 54px;
    }
    .leading-10-1 {
        line-height: 46px;
    }
    .blue-green-text {
        color: #00A99D;
    }
    .x-icon {
        background: url('~/static/img/icon/x-icon.png');
        width: 25px;
        height: 25px;
    }
    .check-icon {
        background: url('~/static/img/icon/check-icon.png');
        width: 25px;
        height: 20px;
    }
    .graph {
        background: url('~/static/img/icon/graph.png');
        width: 58px;
        height: 58px;
    }
    .camera {
        background: url('~/static/img/icon/camera.png');
        width: 90px;
        height: 60px;
    }
    .no-audio {
        background: url('~/static/img/icon/no-audio.png');
        width: 72px;
        height: 68px;
    }
    .percent {
        background: url('~/static/img/icon/percent.png');
        width: 72px;
        height: 69px;
    }
    @media only screen and (max-width: 1023px) {
        .gradient {
            background: url('~/static/img/background/Rectangle-12.png') no-repeat;
            background-size: 100% auto;
            transform: none;
            .box {
                transform: none;
            }
        }
        .leading-loose-1 {
            line-height: 30px;
        }
    }
</style>