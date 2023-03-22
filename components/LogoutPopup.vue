<template>
    <div class="mx-auto w-800 shadow-md">
        <div class="relative">
            <button class="absolute right-8 top-7 block flex text-sm text-white leading-7">cerrar
                <span class="close-btn block ml-2"></span>
            </button>
            <img src="~/static/img/logo/Marca560-106.png" class="absolute bottom-10 absolute -translate-x-1/2 transform left-1/2" />
            <img src="~/static/img/banner/surfing-2021-08-28-21-59-31-utc 2.png" class="w-800 h-480" />
        </div>
        <div class="w-8/12 pt-12 pb-20 mx-auto">
            <div class="text-4xl uppercase text-blue mb-16 mx-auto">
                ¿<span class="font-bold">estas seguro</span> de cerrar tu sesión?
            </div>
            <button class="mx-auto block bg-white border border-red rounded-sm font-bold text-base text-center letter-spacing-0-25-em uppercase text-red px-10 py-2">CERRAR SESIÓN</button>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .bg-gradient {
        background: linear-gradient(163.41deg, rgba(28, 73, 107, 0.9) 0%, rgba(0, 169, 157, 0.9) 100%);
    }
    .close-btn {
        background-image: url('~/static/img/icon/close_icon.png');
        width: 35px;
        height: 28px;
    }
    .w-800 {
        width: 800px;
    }
    .h-480 {
        height: 480px;
    }
    .text-blue-green {
        color: #00A99D;
    }
    .bg-blue-green {
        background: #00A99D;
    }
    .text-blue {
        color: #1C496B;
    }
    .letter-spacing-0-25-em {
        letter-spacing: 0.25em;
    }
    .border-red {
        border-color:#C8142E;
    }
    .text-red {
        color: #C8142E;
    }
</style>