<template>
    <div>
        <Header/>
        <div class="shadow-1">
            <div class="flex pt-9 h-28 relative mx-auto lg:w-10/12">
                <div class="flex w-full">
                    <span
                        class="font-bold text-lg rounded-full tracking-widest-1 uppercase text-white bg-green-blue h-9 w-9 py-1 px-3 mr-4"
                        >D</span
                    >
                    <span>
                        <span
                        class="block font-bold text-sm tracking-widest uppercase text-blue"
                        >Diego berríos</span
                        >
                        <span class="block text-xs text-blue">diegoberriosm@gmail.com</span>
                    </span>
                </div>
                <div class="flex">
                    <button
                        class="rounded-sm border border-gray font-bold text-sm uppercase tracking-widest-1 text-gray box-border lg:w-32 lg:h-10 return text-right pr-2.5"
                    >
                        VOLVER
                    </button>
                    <button
                        class="border border-red h-10 rounded-sm text-xs text-center uppercase text-red ml-8 pt-0 tracking-widest-1 px-4 whitespace-nowrap"
                    >
                        CERRAR SESIÓN
                    </button>
                </div>
            </div>
        </div>
        <div class="bg-gray">
            <div class="lg:w-10/12 mx-auto flex pt-9 pb-44">
                <div class="w-1/2 pr-10 border-r border-gray">
                    <form class="pb-11">
                        <label class="block font-bold text-sm py-3 tracking-widest uppercase text-gray">
                            cambiar contraseña
                        </label>
                        <input class="block bg-white shadow rounded-sm text-xs p-3 text-center tracking-widest-1 uppercase text-gray w-full mb-10" placeholder="actual contraseña"/>
                        <input class="block bg-white shadow rounded-sm text-xs p-3 text-center tracking-widest-1 uppercase text-gray w-full mb-10" placeholder="Nueva contraseña"/>
                        <span class="flex">
                            <button class="rounded-sm font-bold text-base py-1 px-7 h-10 text-center tracking-widest-1 uppercase text-gray border border-gray mr-10">cambiar</button>
                            <span class="uppercase text-gray text-note pt-2">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</span>
                        </span>
                    </form>
                     <form class="border-t border-gray pt-9">
                        <label class="block font-bold text-sm py-3 tracking-widest uppercase text-gray">
                            cambiar correo electrónico
                        </label>
                        <input class="block bg-white shadow rounded-sm text-xs p-3 text-center tracking-widest-1 uppercase text-gray w-full mb-10" placeholder="correo actual"/>
                        <input class="block bg-white shadow rounded-sm text-xs p-3 text-center tracking-widest-1 uppercase text-gray w-full mb-10" placeholder="nuevo correo"/>
                        <span class="flex">
                            <button class="rounded-sm font-bold text-base py-1 px-7 h-10 text-center tracking-widest-1 uppercase text-gray border border-gray mr-10">cambiar</button>
                            <span class="uppercase text-gray text-note pt-2">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</span>
                        </span>
                    </form>
                </div>
                <div class="w-1/2 pl-10">
                    <div class="">
                        <img src="~/static/img/banner/surfing-VGSBTXB_2.png" class="w-full h-64 object-cover" />
                        <div class="bg-yellow p-10">
                            <span class="block font-bold text-4xl uppercase line-height-46px text-blue mb-16">
                                Lorem Ipsum is simply dummy text of the printing.
                            </span>
                            <button class="block bg-white rounded-sm py-2 px-3.5 font-bold text-base text-center uppercase text-blue tracking-widest-1">
                                hazte premium
                            </button>
                            <span class="block text-xs text-white uppercase leading-5 mt-1">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <RegisterPopup class="my-20"/>
            <LoginPopup class="my-20"/>
            <LogoutPopup class="my-20"/>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .shadow-1 {
        box-shadow: 5px 10px 8px 10px #888888;
    }
    .border-red {
        border-color: #C8142E;
    }
    .border-gray {
        border-color: #3C3C3B;
    }
    .text-red {
        color: #C8142E;
    }
    .text-note {
        font-size: 9px;
        line-height: 13px;
    }
    .text-gray {
        color: #3C3C3B;
    }
    .text-blue {
        color: #1C496B;
    }
    .tracking-widest-1 {
        letter-spacing: 0.25em;
    }
    .bg-yellow {
        background: #FFA800;
    }
    .bg-gray {
        background: #E5E5E5;
    }
    .bg-green-blue {
        background: #00A99D;
    }
    .line-height-46px {
        line-height: 46px;
    }
    .return {
        background: url('~/static/img/icon/Flecha_der_brown.png') no-repeat 10% 50%;
    }
</style>