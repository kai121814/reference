<template>
  <div>
    <Header/>
    <div class="gradient-color">
      <div class="hero-container lg:flex mx-auto lg:w-10/12">
        <div class="bg-white lg:w-1/2">
          <div class="curved-corner-topright bottom-0 absolute lg:visible invisible"></div>
          <div class="lg:w-96 lg:ml-12">
            <img src="~/static/img/logo/Ellipse9.png" class="mx-auto lg:mt-14 mt-10 mb-7"/>
            <div class="font-bold text-4xl leading-10 text-center uppercase text-gray mt-3 lg:mb-0 mb-8">
                SurfLogic
            </div>  
          </div>
        </div>
        <div class="w-1/2 float-right rounded-tr-full image-container lg:visible invisible">
          <img src="~/static/img/banner/Rectangle194-1.png" class="image-banner"/>
        </div>
      </div>
    </div>
    <div class="lg:flex lg:w-10/12 w-11/12 mx-auto mt-10 mb-20">
      <div class="lg:w-1/3 lg:border-r border-blue lg:pr-32">
        <h1 class="font-bold uppercase lg:text-4xl text-2xl text-blue mb-10 whitespace-nowrap">Mis Datos</h1>
        <ul>
            <li class="mb-5">
                <h4 class="font-bold text-base uppercase text-blue">Nombre Tienda</h4>
                <p class="text-sm uppercase text-gray text-blue">Escuela de surf maitencillo</p>
            </li>
            <li class="mb-5 flex">
                <h4 class="font-bold text-base uppercase text-blue mt-7">Logo:</h4>
                <img src="~/static/img/logo/Ellipse9.png" class="ml-12 w-20 h-20"/>
            </li>
            <li class="mb-5">
                <h4 class="font-bold text-base uppercase text-blue">Horario</h4>
                <ul class="text-sm uppercase text-gray text-blue">
                    <li>
                        <span>Martes a viernes</span>
                        <span>09:00 - 13:00 hrs / 15:00 - 19:00 hrs.</span>
                    </li>
                    <li>
                        <span>Sábado y domingo</span>
                        <span>10:00 - 13:00 hrs / 15:00 - 20 hrs.</span>
                    </li>
                </ul>
            </li>
            <li class="mb-5">
                <h4 class="font-bold text-base uppercase text-blue">WEB</h4>
                <p class="text-sm uppercase text-gray text-blue">www.ESCUELADESURFMAITENCILLO.CL</p>
            </li>
            <li class="mb-5">
                <h4 class="font-bold text-base uppercase text-blue">DIRECCIÓN</h4>
                <p class="text-sm uppercase text-gray text-blue">AVENIDA DEL MAR 1466, MAITENCILLO</p>
            </li>
            <li class="border-t border-blue mb-5 pt-5">
                <h4 class="font-bold text-base uppercase text-blue">Nombre Representante</h4>
                <p class="text-sm uppercase text-gray text-blue">Contacto@contacto.cl</p>
            </li>
            <li class="mb-5">
                <h4 class="font-bold text-base uppercase text-blue">Email</h4>
                <p class="text-sm uppercase text-gray text-blue">Contacto@contacto.cl</p>
            </li>
        </ul>
        <button class="rounded-sm border border-gray font-bold text-base uppercase text-gray text-center tracking-widest-1 w-44 py-2.5 mx-auto block lg:mt-20 mt-10">Editar</button>
      </div>
      <div class="lg:w-2/3 lg:pl-10">
        <h1 class="font-bold uppercase lg:text-4xl text-2xl text-blue mb-7 whitespace-nowrap lg:mt-0 mt-14">mis Descuentos</h1>
        <ul>
            <li class="flex mb-10">
                <span class="block shadow-md rounded-sm bg-green-blue p-4">
                    <span class="lg:flex justify-between">
                        <p class="text-base uppercase text-white lg:w-5/12">
                            <span class="font-bold">20% DE DESCUENTO</span> EN CLASES DE SURF, FORMATO GRUPAL O PARTICULAR
                            (NO INCLUYE CURSOS EXTENSOS)
                        </p>
                        <p class="lg:w-3/12 text-center text-base uppercase text-white font-bold">
                            <span class="font-bold text-base mb-1 uppercase text-white block lg:mt-0 mt-8">Codigos validados</span>
                            <span class="font-bold text-4xl uppercase text-white block mt-1.5">52</span>
                        </p>
                        <p class="lg:w-1/12 flex lg:block">
                            <span class="power-off-icon block mx-auto lg:mt-0 mt-7"></span>
                            <span class="edit-icon block mx-auto lg:mt-2 mt-7"></span>
                        </p>
                    </span>
                </span>
                <!-- <span>
                    <button class="rounded-sm border border-gray font-bold text-base uppercase text-gray text-center tracking-widest-1 w-40 py-2.5 ml-2">Editar</button>
                    <label class="switch mt-5 block mx-auto">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </span> -->
            </li>
            <li class="flex mb-10">
                <span class="block shadow-md rounded-sm bg-green-blue p-4">
                    <span class="lg:flex justify-between">
                        <p class="text-base uppercase text-white lg:w-5/12">
                            <span class="font-bold">20% DE DESCUENTO</span> EN CLASES DE SURF, FORMATO GRUPAL O PARTICULAR
                            (NO INCLUYE CURSOS EXTENSOS)
                        </p>
                        <p class="lg:w-3/12 text-center text-base uppercase text-white font-bold">
                            <span class="font-bold text-base mb-1 uppercase text-white block lg:mt-0 mt-8">Codigos validados</span>
                            <span class="font-bold text-4xl uppercase text-white block mt-1.5">52</span>
                        </p>
                        <p class="lg:w-1/12 flex lg:block">
                            <span class="power-off-icon block mx-auto lg:mt-0 mt-7"></span>
                            <span class="edit-icon block mx-auto lg:mt-2 mt-7"></span>
                        </p>
                    </span>
                </span>
            </li>
            <li class="flex mb-10">
                <span class="block shadow-md rounded-sm bg-green-blue p-4">
                    <span class="lg:flex justify-between">
                        <p class="text-base uppercase text-white lg:w-5/12">
                            <span class="font-bold">20% DE DESCUENTO</span> EN CLASES DE SURF, FORMATO GRUPAL O PARTICULAR
                            (NO INCLUYE CURSOS EXTENSOS)
                        </p>
                        <p class="lg:w-3/12 text-center text-base uppercase text-white font-bold">
                            <span class="font-bold text-base mb-1 uppercase text-white block lg:mt-0 mt-8">Codigos validados</span>
                            <span class="font-bold text-4xl uppercase text-white block mt-1.5">52</span>
                        </p>
                        <p class="lg:w-1/12 flex lg:block">
                            <span class="power-off-icon block mx-auto lg:mt-0 mt-7"></span>
                            <span class="edit-icon block mx-auto lg:mt-2 mt-7"></span>
                        </p>
                    </span>
                </span>
            </li>
            <li class="flex mb-10">
                <span class="block shadow-md rounded-sm bg-gray p-4">
                    <span class="lg:flex justify-between">
                        <p class="text-base uppercase text-white lg:w-5/12">
                            <span class="font-bold">20% DE DESCUENTO</span> EN CLASES DE SURF, FORMATO GRUPAL O PARTICULAR
                            (NO INCLUYE CURSOS EXTENSOS)
                        </p>
                        <p class="lg:w-3/12 text-center text-base uppercase text-white font-bold">
                            <span class="font-bold text-base mb-1 uppercase text-white block lg:mt-0 mt-8">Codigos validados</span>
                            <span class="font-bold text-4xl uppercase text-white block mt-1.5">52</span>
                        </p>
                        <p class="lg:w-1/12 flex lg:block">
                            <span class="power-off-icon block mx-auto lg:mt-0 mt-7"></span>
                            <span class="edit-icon block mx-auto lg:mt-2 mt-7"></span>
                        </p>
                    </span>
                </span>
            </li>
        </ul>
        <button class="rounded-sm border border-gray font-bold text-base uppercase text-gray text-center tracking-widest-1 w-72 py-2.5 mx-auto block">Agregar Nuevo</button>
      </div>
    </div>
    <div class="lg:w-10/12 w-11/12 mx-auto">
        <h1 class="font-bold uppercase lg:text-4xl text-2xl text-blue lg:mb-12 mb-8">Estadisticas</h1>
        <table class="w-full">
            <tr class="">
                <th class="font-bold lg:text-xl text-sm text-blue lg:text-left text-center lg:pb-7 lg:pl-7">N<span class="underline">o</span></th>
                <th class="font-bold lg:text-xl text-sm text-blue lg:text-left text-center lg:pb-7">Ads</th>
                <th class="font-bold lg:text-xl text-sm text-blue uppercase text-center lg:pb-7">URL</th>
                <th class="font-bold lg:text-xl text-sm text-blue text-center lg:pb-7">Clicks</th>
                <th class="font-bold lg:text-xl text-sm text-blue text-center lg:pb-7 lg:pl-0 pl-4">Impresiones</th>
            </tr>
            <tr class="border border-l-0 border-r-0 border-color" v-for="(list, index) in lists" :key="index">
                <td class="font-bold text-xs text-gray-blue lg:text-left text-center lg:py-4 lg:pl-7">1</td>
                <td class="lg:text-left text-center font-bold lg:text-sm text-xs text-blue-grey lg:py-4">Home Page</td>
                <td class="text-center font-bold lg:text-sm text-xs text-green-blue lg:py-4">/home-page</td>
                <td class="text-center font-bold lg:text-sm text-xs text-gray lg:py-4">11,845</td>
                <td class="text-center font-bold lg:text-sm text-xs text-gray lg:py-4 pl-4">2.564</td>
            </tr>
        </table>
        <button class="mx-auto block rounded-sm border border-gray font-bold lg:text-base text-xs uppercase tracking-widest-1 text-gray box-border lg:w-36 w-28 h-10 return text-center pl-7 lg:mt-20 mt-10 mb-20">VOLVER</button>
    </div>
    <Footer/>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                lists: [
                    {
                        id: 1,
                    },
                    {
                        id: 2,
                    },
                    {
                        id: 3,
                    },
                    {
                        id: 4,
                    },
                    {
                        id: 5,
                    },
                    {
                        id: 6,
                    },
                    {
                        id: 7,
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    p {
        margin: 0;
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
    .image-container{
        margin: 0 0 0 -80px;
    }
    .border-blue {
        border-color: #1C496B;
    }
    .bg-green-blue {
        background: #00A99D;    
    }
    .text-blue-grey {
        color: #6B7A99;
    }
    .text-green-blue {
        color: #00A99D;
    }
    .bg-gray {
        background: #C4C4C4;
    }
    .text-blue {
        color: #1C496B;
    }
    .border-gray {
        border-color: #3C3C3B;
    }
    .border-color {
        border-color: #F5F6F7;
    }
    .tracking-widest-1 {
        letter-spacing: 0.25em;
    }
    .text-gray {
        color: #3C3C3B;
    }
    .text-gray-blue {
        color: #ADB8CC;
    }
    .return {
        background: url('~/static/img/icon/Flecha_der_brown.png') no-repeat 10% 50%;
    }
    .power-off-icon {
        background-image: url('~/static/img/icon/power-off-1.png');
        width: 32px;
        height: 32px;
    }
    .power-off-icon-black {
        background-image: url('~/static/img/icon/power-off-2.png');
        width: 32px;
        height: 32px;
    }
    .edit-icon {
        background-image: url('~/static/img/icon/edit-1.png');
        width: 32px;
        height: 35px;
    }
</style>