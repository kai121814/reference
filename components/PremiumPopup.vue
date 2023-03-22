<template>
    <div class="mx-auto w-800 bg-gradient shadow-md z-1 mt-10">
        <div class="relative">
            <button class="absolute right-8 lg:top-7 top-16 block flex text-sm text-white leading-7" @click="Close()">cerrar
                <span class="close-btn block ml-2"></span>
            </button>
            <img src="~/static/img/banner/surfing-VGSBTXB_3.png" class="w-800 h-474 lg:block hidden" />
        </div>
        <div class="lg:px-10 px-8 lg:pt-20 pt-32 pb-20">
            <div class="mx-auto text-white lg:w-min">
                <span class="leading-relaxed uppercase font-bold lg:text-4xl text-3xl mb-1 block lg:whitespace-nowrap">{{title}}</span>
                <span class="uppercase lg:text-2xl text-xl font-light">Para que cada sesión valga la pena</span>
                <span class="uppercase border-2 border-white mt-2 block w-24"></span>
                <span class="text-sm block mt-2 mb-20">{{mainText}}</span>
            </div>
            <div class="mx-auto w-min flex">
                <NuxtLink to="/premium"><button class="font-bold text-base text-center letter-spacing-0-25-em uppercase text-blue-green bg-white rounded-sm w-52 py-1.5 whitespace-nowrap lg:mr-10 mx-auto shadow-md">PRUEBA GRATIS</button></NuxtLink>
                <!-- <button class="whitespace-nowrap font-bold text-base py-1.5 text-center letter-spacing-0-25-em text-white bg-blue-green shadow-md w-52">PRUEBA GRATIS</button> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            mainText: String,
            title: String
        },
        methods: {
            Close() {
                this.$emit('ClosePopup')
            },
        }
    }
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
    .w-800{
        width: 800px;
    }
    .text-blue-green {
        color: #00A99D;
    }
    .bg-blue-green {
        background: #00A99D;
    }
    .h-474 {
        height: 474px;
    }
    .letter-spacing-0-25-em {
        letter-spacing: 0.25em;
    }
    @media only screen and (max-width: 1023px) {
        .w-800 {
            width: auto;
        }
    }
</style>