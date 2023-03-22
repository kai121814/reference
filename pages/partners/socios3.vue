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
    <div class="mt-10 lg:mb-20 mb-12">
        <h1 class="lg:w-9/12 w-11/12 mx-auto font-bold uppercase lg:text-4xl text-2xl whitespace-nowrap text-blue mb-3">mis Datos</h1>
        <div class="block shadow-1 h-5 mb-10"></div>
        <div class="lg:w-9/12 w-11/12 mx-auto lg:flex justify-between">
            <div class="lg:w-1/2 lg:pr-10">
                <div>
                    <label class="font-bold text-sm tracking-widest uppercase text-gray mb-3 block">Nombre Tienda</label>
                    <input class="rounded-sm w-full text-center uppercase text-gray tracking-widest-1 text-xs-1 py-3 shadow-inner lg:mb-7 mb-3"
                        placeholder="Escuela de Sur Maintencillo"/>
                </div>
                <div class="flex">
                    <label class="font-bold text-sm tracking-widest uppercase text-gray mb-3 mt-7 mr-3">Logo</label>
                    <img src="~/static/img/logo/Ellipse9.png" class="mb-7 w-20 h-20"/>
                </div>
                <div>
                    <label class="font-bold text-sm tracking-widest uppercase text-gray mb-3 block">Horario</label>
                    <input class="rounded-sm w-full text-center uppercase text-gray tracking-widest-1 text-xs-1 py-3 shadow-inner lg:mb-7 mb-3"/>
                </div>
                <div>
                    <label class="font-bold text-sm tracking-widest uppercase text-gray mb-3 block">Web</label>
                    <input class="rounded-sm w-full text-center uppercase text-gray tracking-widest-1 text-xs-1 py-3 shadow-inner lg:mb-7 mb-3"/>
                </div>
                <div class="font-bold text-sm tracking-widest uppercase text-gray mb-3">
                    <label class="font-bold text-sm tracking-widest uppercase text-gray mb-3 block">Direccion Casa Matriz</label>
                    <input class="rounded-sm w-full text-center uppercase text-gray tracking-widest-1 text-xs-1 py-3 shadow-inner lg:mb-7 mb-3"/>
                </div>
            </div>
            <div class="lg:w-1/2 lg:pl-10">
                <div>
                    <label class="font-bold text-sm tracking-widest uppercase text-gray mb-3 block">Nombre Representante</label>
                    <input class="rounded-sm w-full text-center uppercase text-gray tracking-widest-1 text-xs-1 py-3 shadow-inner lg:mb-7 mb-3" 
                        placeholder="Ej: 10% trajes de Surf"/>
                </div>
                <div>
                    <label class="font-bold text-sm tracking-widest uppercase text-gray mb-3 block">Correo Representante</label>
                    <input class="rounded-sm w-full text-center uppercase text-gray tracking-widest-1 text-xs-1 py-3 shadow-inner lg:mb-7 mb-3" 
                        placeholder="Ej: 10% trajes de Surf"/>
                </div>
            </div>
        </div>
        <button class="text-gray uppercase tracking-widest-1 text-center border-gray border rounded-sm font-bold text-base px-10 py-2 block mx-auto lg:mt-10 mt-7">Guardar</button>
    </div>
    <Footer/>
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
    .bg-gray {
        background: #C4C4C4;
    }
    .text-blue {
        color: #1C496B;
    }
    .switch {
        position: relative;
        width: 60px;
        height: 34px;
    }
    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
    input:checked + .slider {
        background-color: #2196F3;
    }
    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }
    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }
    .slider.round:before {
        border-radius: 50%;
    }
    .border-gray {
        border-color: #3C3C3B;
    }
    .tracking-widest-1 {
        letter-spacing: 0.25em;
    }
    .shadow-1 {
        background: linear-gradient(180deg, rgba(196, 196, 196, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
    }
    .text-gray {
        color: #3C3C3B;
    }
    .return {
        background: url('~/static/img/icon/Flecha_der_brown.png') no-repeat 10% 50%;
    }
    .text-xs-1 {
        font-size: 10px;
    }
    .tracking-widest-1 {
        letter-spacing: 0.25em;
    }
</style>