<template>
  <!-- separate sub components next push -->
  <div class="overflow-x-hidden">
    <client-only>
      <Detect />
      <div
        class="
          fixed
          inset-0
          z-20
          bg-gray-600 bg-opacity-50
          overflow-y-auto
          h-full
          w-full
        "
        v-if="premiumPopup"
      >
        <LazyPremiumPopup
          :title="popup_title"
          :mainText="popup_maintext"
          @ClosePopup="premiumPopup = false"
        />
      </div>
      <Header />
    </client-only>
    <Alertas />
    <!--<div class="lg:w-9/12 mx-auto hidden sm:block">
      <NuxtLink to="/torneos/viejos-lobos"><img src="https://media-buscaolas.s3.sa-east-1.amazonaws.com/torneos/viejos-lobos/buscaolas-viejos-lobos-de-mar-transmision-mobile.jpg" alt="viejos-lobos-2022"></NuxtLink>
    </div>
    <div class="lg:w-9/12 mx-auto lg:hidden">
      <NuxtLink to="/torneos/viejos-lobos"><img src="https://media-buscaolas.s3.sa-east-1.amazonaws.com/torneos/viejos-lobos/buscaolas-viejos-lobos-de-mar-transmision-web.jpg" alt="viejos-lobos-2022"></NuxtLink>
    </div>-->
    <div>
      <div
        class="
          flex
          space-x-4
          justify-center
          items-center
          lg:visible lg:h-10 lg:w-9/12 lg:my-4
          panel
          w-0
          h-0
          mx-auto
        "
        role="group"
      >
        <div
          class="
            lg:visible
            invisible
            w-0
            lg:h-10
            h-0
            warning
            panel
            lg:w-9/12
            uppercase
            text-white
            mx-auto
            rounded-sm
            lg:my-4
          "
        >
          <span
            class="
              flex
              w-min
              mx-auto
              whitespace-nowrap
              font-bold
              text-sm
              inline-block
              align-middle
            "
          >
            <span class="cam-icon mr-3 mt-2.5"></span>
            <button
              class="flex mt-2.5"
              @click="ChangeVideoSource()"
              v-if="qualityVideo == 'SD'"
            >
              <span class="lg:visible invisible w-0 h-0 lg:w-auto lg:h-auto">
              </span>
              CAMARAS EN HD
            </button>
            <button
              class="flex mt-2.5"
              @click="ChangeVideoSource()"
              v-if="qualityVideo == 'HD'"
            >
              <span class="lg:visible invisible w-0 h-0 lg:w-auto lg:h-auto">
              </span>
              CAMARAS EN SD
            </button>
          </span>
        </div>
        <div
          class="
            lg:visible
            invisible
            w-0
            lg:h-10
            h-0
            bg-green-blue
            panel
            lg:w-9/12
            uppercase
            text-white
            mx-auto
            rounded-sm
            lg:my-4
          "
        >
          <span
            class="
              flex
              w-min
              mx-auto
              whitespace-nowrap
              font-bold
              text-sm
              inline-block
              align-middle
            "
          >
            <span class="cam-icon mr-3 mt-2.5"></span>
            <button class="flex mt-2.5" @click="history()">
              <span class="lg:visible invisible w-0 h-0 lg:w-auto lg:h-auto">
              </span>
              VER HISTORIAL
            </button>
          </span>
        </div>
      </div>
      <div
        class="place-items-center flex mx-auto lg:w-9/12"
        v-if="PlayaData.playa.urlvideo2 == 'null'"
      >
        <div class="relative flex-1 lg:w-4/12" v-show="ShowOffline">
          <img :src="offline_url" alt="buscaolas" class="mx-auto" />
        </div>
        <div
          class="flex-1 lg:w-4/12"
          v-if="!ShowOffline && PlayaData.playa.mswlink == 'Premium'"
        >
          <client-only>
            <VideoPlayer
              :source="PlayaData.playa.urlvideo"
              :camera_num="3"
              :source_hd="PlayaData.playa.urlvideo_HD"
              :Ads_data="DataAds"
              :triggerSource="qualityVideo"
              :ratingvideo="current_rating.rating"
              :colorrating="current_rating.color"
              :alturamax="forecast_day.alturamax"
              :alturamin="forecast_day.alturamin"
              :speedviento="forecast_day.speedviento"
              :direvient="forecast_day.dirviento"
              :premium_videoAdd="PlayaData.playa.mswreport"
            />
          </client-only>
        </div>
        <div
          class="flex-1 lg:w-4/12"
          v-if="!ShowOffline && PlayaData.playa.mswlink != 'Premium'"
        >
          <client-only>
            <VideoPlayer
              :source="PlayaData.playa.urlvideo"
              :camera_num="1"
              :source_hd="PlayaData.playa.urlvideo_HD"
              :Ads_data="DataAds"
              :triggerSource="qualityVideo"
              :ratingvideo="current_rating.rating"
              :colorrating="current_rating.color"
              :alturamax="forecast_day.alturamax"
              :alturamin="forecast_day.alturamin"
              :speedviento="forecast_day.speedviento"
              :direvient="forecast_day.dirviento"
              :premium_videoAdd="PlayaData.playa.mswreport"
            />
          </client-only>
        </div>
      </div>
      <div
        class="lg:w-9/12 mx-auto lg:mt-0.5 lg:flex"
        v-if="PlayaData.playa.urlvideo2 !== 'null'"
      >
        <div class="relative lg:w-1/2" v-if="!ShowOffline">
          <client-only>
            <VideoPlayer
              :source="PlayaData.playa.urlvideo"
              :camera_num="1"
              :source_hd="PlayaData.playa.urlvideo_HD"
              :Ads_data="DataAds"
              :triggerSource="qualityVideo"
              :ratingvideo="current_rating.rating"
              :colorrating="current_rating.color"
              :alturamax="forecast_day.alturamax"
              :alturamin="forecast_day.alturamin"
              :speedviento="forecast_day.speedviento"
              :direvient="forecast_day.dirviento"
              :premium_videoAdd="PlayaData.playa.mswreport"
            />
          </client-only>
        </div>
        <div class="relative lg:w-1/2" v-if="ShowOffline">
          <img :src="offline_url" class="visual" />
        </div>
        <div class="relative lg:w-1/2" v-if="!ShowOffline">
          <client-only>
            <VideoPlayer
              :source="PlayaData.playa.urlvideo2"
              :camera_num="2"
              :Ads_data="DataAds"
              :source_hd="PlayaData.playa.urlvideo2_HD"
              :triggerSource="qualityVideo"
              :ratingvideo="current_rating.rating"
              :colorrating="current_rating.color"
              :alturamax="forecast_day.alturamax"
              :alturamin="forecast_day.alturamin"
              :speedviento="forecast_day.speedviento"
              :direvient="forecast_day.dirviento"
              :premium_videoAdd="PlayaData.playa.mswreport"
            />
          </client-only>
        </div>
      </div>
      <div class="space-y-0">
        <div
          class="
            lg:invisible
            visible
            h-10
            lg:h-0
            buena
            panel
            lg:w-9/12
            w-full
            uppercase
            text-white
            mx-auto
            rounded-sm
          "
        >
          <span
            class="
              flex
              w-min
              mx-auto
              whitespace-nowrap
              font-bold
              text-sm
              inline-block
              align-middle
            "
          >
            <span class="cam-icon mr-3 mt-2.5"></span>
            <button
              class="mt-2.5"
              @click="ChangeVideoSource()"
              v-if="qualityVideo == 'SD'"
            >
              CAMARAS EN HD
            </button>
            <button
              class="mt-2.5"
              @click="ChangeVideoSource()"
              v-if="qualityVideo == 'HD'"
            >
              CAMARAS EN SD
            </button>
          </span>
        </div>
        <div
          class="
            lg:invisible
            visible
            h-10
            lg:h-0
            warning
            panel
            lg:w-9/12
            w-full
            uppercase
            text-white
            mx-auto
            rounded-sm
          "
        >
          <span
            class="
              flex
              w-min
              mx-auto
              whitespace-nowrap
              font-bold
              text-sm
              inline-block
              align-middle
            "
          >
            <span class="cam-icon mr-3 mt-2.5"></span>
            <button class="mt-2.5" @click="history()">VER HISTORIAL</button>
          </span>
        </div>
      </div>
      <div v-if="RepairData.data.length">
        <div class="lg:w-9/12 mx-auto lg:rounded-sm bg-orange lg:mt-10 mt-5">
          <span class="block mx-auto w-min whitespace-nowrap">
            <span class="alert-icon inline-block mt-1.5"></span>
            <h1
              class="
                text-sm text-white
                uppercase
                text-center
                tracking-widest
                mx-3
                align-top
                mt-2.5
                inline-block
              "
            >
              INFO camara en reparacion
            </h1>
          </span>
        </div>
        <div
          v-for="(rep, index) in RepairData.data"
          :key="index"
          class="lg:w-9/12 w-11/12 mx-auto mt-10 text-justify"
        >
          <div class="flex mb-6">
            <h1
              class="
                bg-orange
                text-sm text-center
                uppercase
                text-white
                px-7
                h-5
              "
            >
              Actualización
            </h1>
            <h1
              class="
                uppercase
                text-xs text-brown
                border-t border-orange
                lg:pl-5
                pl-2
                pt-0.5
                w-full
              "
            >
              {{ $moment(rep.date_repair).format("DD MMMM YYYY HH:mm") }}
            </h1>
          </div>
          <p class="text-sm text-brown">
            {{ rep.repair_info }}
          </p>
        </div>
      </div>
      <!-- <Ads location="playa-player"/> -->
      <div class="lg:w-9/12 w-11/12 mx-auto mt-16 mb-3 pt-5">
        <div class="lg:flex lg:pr-2 pb-4 border-b border-color-brown">
          <div class="lg:w-11/12">
            <div class="font-light uppercase text-blue text-2xl">
              {{ PlayaData.playa.nombreescuela }}
            </div>
            <div
              class="
                font-black
                text-5xl
                uppercase
                la-boca
                mb-5
                pb-2
                lg:border-none
              "
            >
              {{ PlayaData.playa.nombre }}
            </div>
          </div>
          <div
            class="flex lg:border-0 lg:pt-0 pt-4 border-t border-color-brown"
          >
            <span class="">
              <img
                :src="PlayaData.playa.logoescuela"
                class="bg-gray lg:h-20 lg:mt-2 w-24 h-24 rounded-full"
              />
            </span>
            <span>
              <span class="inline-block mt-7 ml-5">
                <img
                  src="~static/img/icon/instagram_black-n-white.png"
                  class=""
                />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="lg:flex lg:w-9/12 mx-auto pt-3 lg:mb-0 mb-5">
        <div class="lg:w-1/2 w-11/12 mx-auto lg:border-color-brown lg:pr-5">
          <div class="block">
            <div class="flex lg:mb-5 mb-3">
              <div
                class="
                  text-2xl
                  font-bold
                  lg:text-center
                  uppercase
                  text-blue
                  mt-1
                  lg:w-auto
                  w-1/2
                "
              >
                Condiciones generales
              </div>
            </div>
          </div>
          <div class="block text-black text-sm lg:mb-5">
            <p
              class="mb-5 block-ellipsis"
              v-if="!isAuthenticated || !IsPremium"
            >
              {{ PlayaData.playa.forecast_text[0].pronostico }}
            </p>
            <p v-if="isAuthenticated && IsPremium">
              {{ PlayaData.playa.forecast_text[0].pronostico_premium }}
            </p>
            <div class="mx-auto" v-if="!isAuthenticated || !IsPremium">
              <button
                class="
                  text-white
                  uppercase
                  rounded-sm
                  font-bold
                  block
                  mx-auto
                  lg:mt-8
                  mb-5
                  bg-yellow
                  py-2
                  px-4
                  tracking-widest-1
                "
                @click="premium()"
              >
                hazte premium
              </button>
              <div class="text text-center text-xs text-brown lg:mb-0 mb-5">
                <p>
                  Revisa todo el pronostico premium, pruebalo 14 dias gratis
                </p>
              </div>
            </div>
          </div>
          <!-- <button class="lg:invisible lg:w-0 lg:h-0 visible w-32 h-10 rounded block bg-green-blue mx-auto lg:mt-0 mt-10 lg:mb-0 mb-5 shadow-md">
           <span class="sound-icon block mx-auto"></span>
         </button> -->
        </div>
        <div
          class="
            border-t border-b border-color-brown
            lg:border-0 lg:w-1/2
            w-11/12
            mx-auto
            pl-0
            lg:pl-5
            pb-5
          "
        >
          <div class="border-b border-color-brown py-3">
            <div class="font-bold text-sm-1 uppercase text-blue">
              TABLA RECOMENDADA:
            </div>
            <div class="font-bold text-sm text-black">
              <span v-if="isAuthenticated">{{
                PlayaData.playa.forecast_text[0].tabla_recomendada
              }}</span>
              <span v-if="!isAuthenticated">Disponible solo para Premium</span>
            </div>
          </div>
          <div>
            <div class="font-bold text-sm uppercase text-blue mt-6 mb-4">
              Indicadores por nivel
            </div>
            <div>
              <ul>
                <li class="flex">
                  <span
                    class="font-bold text-sm text-black mt-2 mb-1 block w-24"
                    >Principiante</span
                  >
                  <ul class="flex justify-evenly lg:w-6/12 w-8/12 h-4 mt-2.5">
                    <li
                      class="rounded-full lg:mt-0 mt-1.5 w-8 h-4"
                      :class="{
                        'bg-gray': !Color(
                          i,
                          PlayaData.playa.forecast_text[0].np
                        ),
                        'bg-dark-blue': Color(
                          i,
                          PlayaData.playa.forecast_text[0].np
                        ),
                      }"
                      v-for="i in 5"
                      :key="i"
                    ></li>
                  </ul>
                </li>
                <li class="flex" v-if="isAuthenticated">
                  <span
                    class="font-bold text-sm text-black mt-2 mb-1 block w-24"
                    >Intermedio</span
                  >
                  <ul class="flex justify-evenly lg:w-6/12 w-8/12 h-4 mt-2.5">
                    <li
                      class="rounded-full lg:mt-0 mt-1.5 w-8 h-4"
                      :class="{
                        'bg-gray': !Color(
                          i,
                          PlayaData.playa.forecast_text[0].ni
                        ),
                        'bg-dark-blue': Color(
                          i,
                          PlayaData.playa.forecast_text[0].ni
                        ),
                      }"
                      v-for="i in 5"
                      :key="i"
                    ></li>
                  </ul>
                </li>
                <li class="flex" v-if="isAuthenticated">
                  <span
                    class="font-bold text-sm text-black mt-2 mb-1 block w-24"
                    >Avanzado</span
                  >
                  <ul class="flex justify-evenly lg:w-6/12 w-8/12 h-4 mt-2.5">
                    <li
                      class="rounded-full lg:mt-0 mt-1.5 w-8 h-4"
                      :class="{
                        'bg-gray': !Color(
                          i,
                          PlayaData.playa.forecast_text[0].na
                        ),
                        'bg-dark-blue': Color(
                          i,
                          PlayaData.playa.forecast_text[0].na
                        ),
                      }"
                      v-for="i in 5"
                      :key="i"
                    ></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-9/12 w-11/12 mx-auto my-10">
        <div class="overflow-x-scroll">
          <div class="w-min mx-auto block">
            <ul class="text-center uppercase flex">
              <li
                v-for="(forecast, i) in PlayaData.playa.forecast_day"
                :key="i"
              >
                <ul class="w-44 border-white">
                  <li class="gray-box border border-white">
                    <div
                      class="border-b-4"
                      :class="[i === 0 ? 'border-yellow' : '']"
                    >
                      <span class="flex mx-auto w-min py-0.5">
                        <span class="clock-icon mr-5 mt-1.5"></span>
                        <span class="uppercase text-lg font-bold text-blue">
                          {{ $moment(forecast.tiempo).format("HH:mm") }}
                        </span>
                      </span>
                    </div>
                  </li>
                  <li class="bg-light-gray border border-white">
                    <span class="relative block h-20 overflow-hidden">
                      <span
                        class="
                          absolute
                          top-1/2
                          left-1/2
                          transform
                          -translate-x-1/2 -translate-y-1/2
                          h-min
                          whitespace-nowrap
                          font-bold
                          text-base text-black
                        "
                      >
                        {{ forecast.alturamin }} - {{ forecast.alturamax }}
                        <span class="text-xs">mts</span></span
                      >
                      <span
                        class="
                          bg-blue-gray
                          bottom-0
                          absolute
                          left-0
                          transform
                          w-full
                        "
                        :style="
                          'height:' +
                          (forecast.alturamax * 100) /
                            forecast.playa.nivelmarea +
                          '%'
                        "
                      >
                      </span>
                    </span>
                  </li>
                  <li class="border border-white border-t-0 h-16 relative">
                    <span class="relative block h-16">
                      <span
                        class="
                          bg-blue-gray
                          bottom-0
                          absolute
                          left-0
                          transform
                          w-full
                          h-full
                        "
                        :style="
                          forecast.playa.tipo_playa === 'Beachbreak'
                            ? 'background-color: green' +
                              ';' +
                              'opacity: ' +
                              '0.' +
                              forecast.ranking.rating.charAt(0)
                            : 'background-color:' + forecast.ranking.color
                        "
                      >
                      </span>
                      <span
                        class="
                          absolute
                          top-1/2
                          left-1/2
                          transform
                          -translate-x-1/2 -translate-y-1/2
                          text-xl
                          font-medium
                          text-white
                        "
                        :class="
                          forecast.ranking.rating.charAt(0) < 6
                            ? 'text-black'
                            : ''
                        "
                      >
                        {{ forecast.ranking.rating }}
                      </span>
                    </span>
                  </li>
                  <li
                    class="relative border border-white bg-light-gray py-1 h-8"
                  >
                    <span class="flex float-right w-min whitespace-nowrap pb-2">
                      <span class="wind-icon mt-1 mr-2"></span>
                      <span class="mr-2 font-light text-sm">
                        {{ forecast.speedviento }} kph
                      </span>
                      <span class="arrow-icon-area mt-1 ml-3 mr-7">
                        <span
                          @click="toggleClose = !toggleClose"
                          class="green-arrow-icon block"
                          :style="
                            'transform: rotate(' + forecast.dirviento + 'deg)'
                          "
                        ></span>
                        <span
                          v-show="toggleClose"
                          class="
                            sw-info
                            absolute
                            z-10
                            h-16
                            w-32
                            bg-white
                            border border-blue
                            rounded
                            p-2
                            -ml-24
                          "
                        >
                          <span
                            @click="toggleClose = !toggleClose"
                            class="close-icon absolute right-2 top-2"
                          ></span>
                          <span class="text-left block h-full w-full">
                            <span
                              class="
                                block
                                font-semibold
                                text-sm
                                mb-2
                                text-gray
                                capitalize
                              "
                              >Viento Dir.</span
                            >
                            <span class="block text-xs text-gray capitalize"
                              >{{ forecast.dirviento }}°
                              {{ direction_calc(forecast.dirviento) }}
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="relative border border-white bg-light-gray py-1">
                    <span class="flex mx-auto w-min whitespace-nowrap">
                      <span class="font-medium text-sm text-brown w-28">
                        {{ forecast.alturaswell1 }} m /
                        {{ forecast.periodoswell1 }} s</span
                      >
                      <span class="arrow-icon-area mt-1 ml-5">
                        <span
                          @click="toggleClose = !toggleClose"
                          class="gray-arrow-icon block"
                          :style="
                            'transform: rotate(' + forecast.direswell1 + 'deg)'
                          "
                        ></span>
                        <span
                          v-show="toggleClose"
                          class="
                            sw-info
                            absolute
                            z-10
                            h-16
                            w-28
                            bg-white
                            border border-blue
                            rounded
                            p-2
                            -ml-24
                          "
                        >
                          <span
                            @click="toggleClose = !toggleClose"
                            class="close-icon absolute right-2 top-2"
                          ></span>
                          <span class="text-left block h-full w-full">
                            <span
                              class="
                                block
                                font-semibold
                                text-sm
                                mb-2
                                text-gray
                                capitalize
                              "
                              >Swell Dir.</span
                            >
                            <span class="block text-xs text-gray capitalize"
                              >{{ forecast.direswell1 }}°
                              {{ direction_calc(forecast.direswell1) }}</span
                            >
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="relative border border-white bg-light-gray py-1">
                    <span class="flex mx-auto w-min whitespace-nowrap">
                      <span class="font-medium text-sm text-brown w-28">
                        {{ forecast.alturaswell2 }} m /
                        {{ forecast.periodoswell2 }} s</span
                      >
                      <span class="arrow-icon-area mt-1 ml-5">
                        <span
                          @click="toggleClose = !toggleClose"
                          class="gray-arrow-icon block"
                          :style="
                            'transform: rotate(' + forecast.direswell2 + 'deg)'
                          "
                        ></span>
                        <span
                          v-show="toggleClose"
                          class="
                            sw-info
                            absolute
                            z-10
                            h-16
                            w-28
                            bg-white
                            border border-blue
                            rounded
                            p-2
                            -ml-24
                          "
                        >
                          <span
                            @click="toggleClose = !toggleClose"
                            class="close-icon absolute right-2 top-2"
                          ></span>
                          <span class="text-left block h-full w-full">
                            <span
                              class="
                                block
                                font-semibold
                                text-sm
                                mb-2
                                text-gray
                                capitalize
                              "
                              >Swell Dir.</span
                            >
                            <span class="block text-xs text-gray capitalize"
                              >{{ forecast.direswell2 }}°
                              {{ direction_calc(forecast.direswell2) }}</span
                            >
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="relative border border-white bg-light-gray py-1">
                    <span class="flex mx-auto w-min whitespace-nowrap">
                      <span class="font-sm font-light text-brown w-28">
                        {{ forecast.alturaswell3 }} m /
                        {{ forecast.periodoswell3 }} s
                      </span>
                      <span class="arrow-icon-area mt-1 ml-5">
                        <span
                          @click="toggleClose = !toggleClose"
                          class="gray-arrow-icon block"
                          :style="
                            'transform: rotate(' + forecast.direswell3 + 'deg)'
                          "
                        ></span>
                        <span
                          v-show="toggleClose"
                          class="
                            sw-info
                            absolute
                            -top-1
                            z-10
                            h-16
                            w-28
                            bg-white
                            border border-blue
                            rounded
                            p-2
                            -ml-24
                          "
                        >
                          <span
                            @click="toggleClose = !toggleClose"
                            class="close-icon absolute right-2 top-2"
                          ></span>
                          <span class="text-left block h-full w-full">
                            <span
                              class="
                                block
                                font-semibold
                                text-sm
                                mb-2
                                text-gray
                                capitalize
                              "
                              >Swell Dir.</span
                            >
                            <span class="block text-xs text-gray capitalize"
                              >{{ forecast.direswell3 }}°
                              {{ direction_calc(forecast.direswell3) }}</span
                            >
                          </span>
                        </span>
                      </span>
                    </span>
                  </li>
                  <li class="relative border border-white bg-light-gray py-1">
                    <span class="flex mx-auto w-min whitespace-nowrap">
                      <span
                        class="mt-1 mr-4"
                        :class="{
                          CLEAR: 'CLEAR' === forecast.condicion,
                          NIGHT_CLEAR: 'NIGHT_CLEAR' === forecast.condicion,
                          CLOUDY: 'CLOUDY' === forecast.condicion,
                        }"
                      >
                      </span>
                      <span class="font-sm font-light text-brown"
                        >{{ forecast.temp.toFixed(2) }}
                        <sup class="text-xs">&#8451;</sup></span
                      >
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="lg:w-11/12 w-min mx-auto lg:mb-10 mt-10 mb-3">
          <div class="head-title lg:w-9/12 text-blue font-bold uppercase pb-1">
            MAREAS
          </div>
          <div class="lg:flex">
            <div class="lg:w-9/12 lg:mr-10">
              <div class="lg:flex justify-between w-full">
                <div class="flex pt-6 pb-2 border-b border-color-brown">
                  <span class="flex">
                    <span class="wave-icon-yellow block"></span>
                    <span class="uppercase text-yellow -mt-0.5 ml-2 mr-10"
                      >alta</span
                    >
                  </span>
                  <span class="flex">
                    <span class="clock-yellow block"></span>
                    <span
                      class="
                        font-bold
                        text-sm text-center
                        lowercase
                        text-yellow
                        ml-2
                        mr-10
                      "
                      >{{
                        $moment(PlayaData.marea_today[0].pleamar1hora).format(
                          "HH:mm"
                        )
                      }}</span
                    >
                  </span>
                  <span class="flex">
                    <span class="arrow-up-down-yellow block"></span>
                    <span
                      class="
                        font-bold
                        text-sm text-center
                        lowercase
                        text-yellow
                        ml-2
                        whitespace-nowrap
                      "
                      >{{ PlayaData.marea_today[0].pleamar1 }} m</span
                    >
                  </span>
                </div>
                <div class="flex pt-6 pb-2 border-b border-color-brown">
                  <span class="flex">
                    <span class="wave-icon-blue block"></span>
                    <span class="uppercase text-blue -mt-0.5 ml-2 mr-10"
                      >baja</span
                    >
                  </span>
                  <span class="flex">
                    <span class="clock-blue block"></span>
                    <span
                      class="
                        font-bold
                        text-sm text-center
                        lowercase
                        text-brown
                        ml-2
                        mr-10
                      "
                      >{{
                        $moment(PlayaData.marea_today[0].bajamar1hora).format(
                          "HH:mm"
                        )
                      }}</span
                    >
                  </span>
                  <span class="flex">
                    <span class="arrow-up-down-blue block"></span>
                    <span
                      class="
                        font-bold
                        text-sm text-center
                        lowercase
                        text-brown
                        ml-2
                        whitespace-nowrap
                      "
                      >{{ PlayaData.marea_today[0].bajamar1 }} m</span
                    >
                  </span>
                </div>
              </div>
              <div class="lg:flex justify-between w-full">
                <div class="flex pt-6 pb-2 border-b border-color-brown">
                  <span class="flex">
                    <span class="wave-icon-yellow block"></span>
                    <span class="uppercase text-yellow -mt-0.5 ml-2 mr-10"
                      >alta</span
                    >
                  </span>
                  <span class="flex">
                    <span class="clock-yellow block"></span>
                    <span
                      class="
                        font-bold
                        text-sm text-center
                        lowercase
                        text-yellow
                        ml-2
                        mr-10
                      "
                      >{{
                        $moment(PlayaData.marea_today[0].pleamar2hora).format(
                          "HH:mm"
                        )
                      }}</span
                    >
                  </span>
                  <span class="flex">
                    <span class="arrow-up-down-yellow block"></span>
                    <span
                      class="
                        font-bold
                        text-sm text-center
                        lowercase
                        text-yellow
                        ml-2
                        whitespace-nowrap
                      "
                      >{{ PlayaData.marea_today[0].pleamar2 }} m</span
                    >
                  </span>
                </div>
                <div class="flex pt-6 pb-2 border-b border-color-brown">
                  <span class="flex">
                    <span class="wave-icon-blue block"></span>
                    <span class="uppercase text-blue -mt-0.5 ml-2 mr-10"
                      >baja</span
                    >
                  </span>
                  <span class="flex">
                    <span class="clock-blue block"></span>
                    <span
                      class="
                        font-bold
                        text-sm text-center
                        lowercase
                        text-brown
                        ml-2
                        mr-10
                      "
                      >{{
                        $moment(PlayaData.marea_today[0].bajamar2hora).format(
                          "HH:mm"
                        )
                      }}</span
                    >
                  </span>
                  <span class="flex">
                    <span class="arrow-up-down-blue block"></span>
                    <span
                      class="
                        font-bold
                        text-sm text-center
                        lowercase
                        text-brown
                        ml-2
                        whitespace-nowrap
                      "
                      >{{ PlayaData.marea_today[0].bajamar2 }} m</span
                    >
                  </span>
                </div>
              </div>
            </div>
            <div class="lg:block flex lg:w-2/12 lg:mx-auto ml-1 lg:py-0 pt-5">
              <div class="flex lg:pb-3.5 lg:pr-0 pr-10">
                <span class="sunrise block"></span>
                <span
                  class="
                    font-bold
                    text-2xl text-center
                    lowercase
                    text-brown
                    w-8/12
                    ml-2
                  "
                >
                  {{
                    $moment(PlayaData.marea_today[0].sunrise).format("HH:mm")
                  }}
                </span>
              </div>
              <div
                class="
                  flex
                  lg:pt-3.5 lg:pl-0
                  pl-10
                  lg:border-t
                  border-l
                  lg:border-l-0
                  border-color-brown
                "
              >
                <span class="sunset block"></span>
                <span
                  class="
                    font-bold
                    text-2xl text-center
                    lowercase
                    text-brown
                    w-8/12
                    ml-2
                  "
                  >{{
                    $moment(PlayaData.marea_today[0].sunset).format("HH:mm")
                  }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-5" v-if="!isAuthenticated || !IsPremium">
        <GoPremium class="lg:my-20 mb-5" />
      </div>
      <!-- <div
        v-if="isAuthenticated && IsPremium"
        class="lg:flex lg:w-10/12 w-11/12 mx-auto lg:pt-5 lg:pb-10 pb-5"
      > -->
      <!-- <div class="lg:w-1/2 lg:pt-2">
          <div
            class="
              font-bold
              uppercase
              text-base
              lg:text-2xl
              text-blue
              lg:mb-1
              mb-5
            "
          >
            Reporte de la región
          </div>
          <div class="relative lg:w-96 lg:mx-0 mx-auto lg:h-60">
            <img src="https://media-buscaolas.s3.sa-east-1.amazonaws.com/reportes/Chile.gif" class="visual" />

          </div>
          <div class="lg:mt-10 mt-1 lg:w-96 flex">
            <button class="lg:visible invisible w-0 h-0 lg:w-1/2 font-bold text-sm text-center bg-yellow uppercase text-white lg:h-8 mt-3">
             Ver pronostico region
           </button>
            <div class="flex mt-2 mx-auto">
              <span class="flex">
                <span class="like-icon block mt-2 mr-2"></span>
                <span class="mt-3 font-bold text-center uppercase text-brown text-xxs">525</span>
              </span>
              <span class="flex">
                <span class="unlike-icon block mt-3 mr-2 ml-3"></span>
                <span class="mt-3 font-bold text-center uppercase text-brown text-xxs">69</span>
              </span>
            </div>
          </div>
        </div>
        <div
          class="
            lg:visible
            invisible
            w-0
            h-0
            lg:h-auto
            relative
            lg:w-1/2
            text-sm text-black text-justify
          "
        >
          <div class="absolute -translate-y-1/2 transform top-1/2">
            {{ PlayaData.playa.forecast_text[0].pronostico_premium }}
          </div>
        </div>
        <div class="w-11/12 lg:invisible visible lg:h-0 lg:w-0 h-auto">
          <canvas id="chart1" class="my-5"></canvas>
        </div>
      </div> -->
      <div class="w-11/12 lg:w-9/12 mx-auto border-color-brown border-t pb-5">
        <div
          class="
            w-full
            mt-4
            mb-5
            font-bold
            uppercase
            text-blue
            lg:leading-9 lg:text-4xl
            text-sm
            whitespace-nowrap
            lg:text-center
          "
        >
          REPORTE Semanal
        </div>
      </div>
      <div
        class="lg:w-9/12 w-full mx-auto lg:mb-14 flex"
        style="max-height: 415px"
      >
        <div class="lg:w-1/3 overflow-x-scroll">
          <div>
            <ul class="flex gap-0.5">
              <li
                class="
                  alternate-color-for-day
                  text-center
                  border-r border-dashed border-black
                  px-0.5
                "
                v-for="(n, i) in PlayaData.chart_data_weekly"
                :key="i"
              >
                <h1 class="font-bold text-sm uppercase text-brown mb-2">
                  {{ n.day }}
                </h1>
                <ul class="flex gap-0.5 mt-3">
                  <li
                    class="w-5 h-52 relative"
                    style="width: 18.25px"
                    v-for="(nn, i) in n.data"
                    :key="i"
                  >
                    <h1 class="bg-white -mt-2 text-xxs uppercase text-brown">
                      {{ $moment(nn.tiempo).format("HH") }}
                    </h1>
                    <span class="graphline-container w-12">
                      <span
                        class="
                          w-5
                          bottom-0
                          block
                          absolute
                          text-xxs
                          uppercase
                          text-brown
                          font-semibold
                        "
                        :style="
                          'height:' +
                          ((nn.alturamax * 100) / PlayaData.playa.nivelmarea +
                            20) +
                          'px; width: 18.3px;'
                        "
                      >
                        {{ parseFloat(nn.alturamax).toFixed(1) }}
                      </span>
                      <span
                        class="dynamic-graphline block absolute bottom-0"
                        :style="
                          'height:' +
                          (nn.alturamax * 100) / PlayaData.playa.nivelmarea +
                          'px; width: 18.3px;'
                        "
                      >
                      </span>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- Chart -->
          <!-- <div>
          <h1 class="text-sm uppercase text-brown font-bold my-3">Swell (m)</h1>
          <div class="relative">
            <ul class="flex gap-1.5">
              <li
                class="
                  alternate-color-for-day
                  text-center
                  border-r border-dashed border-black
                  pr-1.5
                "
                v-for="(n, i) in PlayaData.chart_data_weekly"
                :key="i"
              >
                <ul class="flex gap-1.5">
                  <li
                    class="w-16 h-52 relative"
                    v-for="(nn, i) in n.data"
                    :key="i">
                  </li>
                </ul>
              </li>
            </ul>

            <svg 
              class="bottom-0 absolute z-10" 
              id="blue-path">
            </svg>

            <svg
              class="bottom-0 absolute z-10" 
              id="yellow-path">
            </svg>
          </div>
        </div> -->
          <div class="border-l-4 border-white">
            <h1 class="text-sm uppercase text-brown font-bold mt-4 mb-2">
              Viento (Kph)
            </h1>
            <ul class="flex gap-0.5">
              <li
                class="
                  alternate-color-for-day
                  text-center
                  border-r border-dashed border-black
                "
                v-for="(n, i) in PlayaData.chart_data_weekly"
                :key="i"
              >
                <ul class="flex">
                  <li
                    class="py-0.5"
                    style="margin: 0 1px; width: 39.1px; height: 114px"
                    v-for="(nn, i) in n.wind"
                    :key="i"
                  >
                    <h1
                      class="
                        text-xs
                        mt-1.5
                        mb-2
                        mx-auto
                        block
                        uppercase
                        text-gray
                      "
                    >
                      {{ nn.speedviento }}
                    </h1>
                    <span
                      class="viento-arrow-icon mx-auto block"
                      :style="
                        'transform: rotate(' +
                        nn.dirviento +
                        'deg); background-size: ' +
                        nn.speedviento * 1.5 +
                        '%;'
                      "
                    ></span>
                    <h1
                      class="
                        text-xxs
                        mx-auto
                        block
                        uppercase
                        text-gray
                        pt-2
                        font-semibold
                      "
                    >
                      {{ nn.dirviento }}&deg;
                    </h1>
                    <h1
                      class="
                        text-xxs
                        mx-auto
                        block
                        uppercase
                        text-gray
                        font-semibold
                      "
                    >
                      {{ direction_calc(nn.dirviento) }}
                    </h1>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="lg:w-1/3 lg:block hidden bg-ocean-blue pt-7 pb-7 px-6 border-l-4 border-white"
          v-if="!isAuthenticated || !IsPremium"
        >
          <p
            class="
              font-bold
              lg:text-4xl
              text-lg
              uppercase
              text-blue
              mb-12
              block
            "
            style="min-height: 250px !important; text-overflow: ellipsis; line-height: 50px!important;"
          >
            CON PREMIUM PUEDES VER HASTA 7 DIAS DE PRONOSTICO
          </p>
          <button
            class="
              bg-white
              shadow-md
              rounded-sm
              font-bold
              text-sm
              py-3
              px-4
              uppercase
              text-blue
              tracking-widest
              mx-auto
              block
            "
          >
            hazte premium
          </button>
        </div>
        <div
          class="lg:w-1/3 lg:block hidden"
          v-if="!isAuthenticated || !IsPremium"
        >
          <img
            src="~static/img/banner/surfing-VGSBTXB 1.png"
            class="w-full h-full"
          />
        </div>
      </div>
      <div class="lg:w-9/12 mx-auto lg:mb-14">
        <ul class="">
          <li class="" v-for="(day, index) in PlayaData.weeks" :key="index">
            <div
              :class="[
                day.isActive
                  ? 'hidden h-0'
                  : 'block w-full border-t border-b border-blue h-12',
              ]"
              @click="isToggle(day)"
            >
              <div class="flex">
                <span class="carret-down mt-5 mr-5 lg:order-1 order-2"></span>
                <span
                  class="
                    w-11/12
                    lg:w-auto
                    pl-7
                    lg:pl-0
                    uppercase
                    pt-2.5
                    text-blue text-lg
                    lg:order-2
                    order-1
                  "
                >
                  REPORTE <span class="font-bold">{{ day.name }}</span>
                </span>
              </div>
            </div>
            <div
              :class="[
                day.isActive
                  ? 'block w-full visible border-t border-b border-blue border-b'
                  : 'hidden h-0',
              ]"
              v-if="day.mareas[0]"
            >
              <div class="relative">
                <div
                  @click="isToggle(day)"
                  class="absolute right-0 top-0 cursor-pointer"
                >
                  X
                </div>
                <div class="pt-7 mt-5">
                  <div class="px-0 px-5">
                    <div class="uppercase main-title text-blue font-bold">
                      REPORTE {{ day.name }}
                    </div>
                    <div class="flex mt-3">
                      <span class="calendar mr-5 mt-0.5 ml-0.5"></span>
                      <span class="uppercase date-day text-black mt-0.5"
                        >{{ day.name }}
                        <span class="font-bold">{{
                          $moment(day.datos[0].tiempo).format("DD MMMM YYYY")
                        }}</span></span
                      >
                    </div>
                  </div>
                  <div class="relative">
                    <div class="Weekly overflow-x-hidden py-5">
                      <div class="overflow-x-scroll">
                        <div class="w-min mx-auto block">
                          <ul class="text-center uppercase flex">
                            <li v-for="(forecast, i) in day.datos" :key="i">
                              <ul class="w-44 border-white">
                                <li class="gray-box border border-white">
                                  <div
                                    class="border-b-4"
                                    :class="[i === 0 ? 'border-yellow' : '']"
                                  >
                                    <span class="flex mx-auto w-min py-0.5">
                                      <span
                                        class="clock-icon mr-5 mt-1.5"
                                      ></span>
                                      <span
                                        class="
                                          uppercase
                                          text-lg
                                          font-bold
                                          text-blue
                                        "
                                      >
                                        {{
                                          $moment(forecast.tiempo).format(
                                            "HH:mm"
                                          )
                                        }}
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li class="bg-light-gray border border-white">
                                  <span
                                    class="relative block h-20 overflow-hidden"
                                  >
                                    <span
                                      class="
                                        absolute
                                        top-1/2
                                        left-1/2
                                        transform
                                        -translate-x-1/2 -translate-y-1/2
                                        h-min
                                        whitespace-nowrap
                                        font-bold
                                        text-base text-black
                                      "
                                    >
                                      {{ forecast.alturamin }} -
                                      {{ forecast.alturamax }}
                                      <span class="text-xs">mts</span></span
                                    >
                                    <span
                                      class="
                                        bg-blue-gray
                                        bottom-0
                                        absolute
                                        left-0
                                        transform
                                        w-full
                                      "
                                      :style="
                                        'height:' +
                                        (forecast.alturamax * 100) /
                                          parseInt(PlayaData.playa.nivelmarea) +
                                        '%'
                                      "
                                    >
                                    </span>
                                  </span>
                                </li>
                                <li
                                  class="
                                    border border-white border-t-0
                                    h-16
                                    relative
                                  "
                                >
                                  <span class="relative block h-16">
                                    <!-- <span class="bg-blue-gray bottom-0 absolute left-0 transform w-full h-full"
                                    :style="forecast.playa.tipo_playa === 'Beachbreak' ? 
                                    'background-color: green' + ';' + 'opacity: ' + '0.'+forecast.ranking.rating.charAt(0)
                                    :'background-color:' + forecast.ranking.color">
                                    </span> -->
                                    <span
                                      class="
                                        bg-blue-gray
                                        bottom-0
                                        absolute
                                        left-0
                                        transform
                                        w-full
                                        h-full
                                      "
                                      :style="
                                        'background-color:' +
                                        forecast.ranking.color
                                      "
                                    >
                                    </span>
                                    <span
                                      class="
                                        absolute
                                        top-1/2
                                        left-1/2
                                        transform
                                        -translate-x-1/2 -translate-y-1/2
                                        text-xl
                                        font-medium
                                        text-white
                                      "
                                      :class="
                                        forecast.ranking.rating.charAt(0) < 6
                                          ? 'text-black'
                                          : ''
                                      "
                                    >
                                      {{ forecast.ranking.rating }}
                                    </span>
                                  </span>
                                </li>
                                <li
                                  class="
                                    relative
                                    border border-white
                                    bg-light-gray
                                    py-1
                                    h-8
                                  "
                                >
                                  <span
                                    class="
                                      flex
                                      float-right
                                      w-min
                                      whitespace-nowrap
                                      pb-2
                                    "
                                  >
                                    <span class="wind-icon mt-1 mr-2"></span>
                                    <span class="mr-2 font-light text-sm"
                                      >{{ forecast.speedviento }} kph</span
                                    >
                                    <span
                                      class="arrow-icon-area mt-1 ml-3 mr-7"
                                    >
                                      <span
                                        @click="toggleClose = !toggleClose"
                                        class="green-arrow-icon block"
                                        :style="
                                          'transform: rotate(' +
                                          forecast.dirviento +
                                          'deg)'
                                        "
                                      ></span>
                                      <span
                                        v-show="toggleClose"
                                        class="
                                          sw-info
                                          absolute
                                          z-10
                                          h-16
                                          w-32
                                          bg-white
                                          border border-blue
                                          rounded
                                          p-2
                                          -ml-24
                                        "
                                      >
                                        <span
                                          @click="toggleClose = !toggleClose"
                                          class="
                                            close-icon
                                            absolute
                                            right-2
                                            top-2
                                          "
                                        ></span>
                                        <span
                                          class="text-left block h-full w-full"
                                        >
                                          <span
                                            class="
                                              block
                                              font-semibold
                                              text-sm
                                              mb-2
                                              text-gray
                                              capitalize
                                            "
                                            >Viento Dir.</span
                                          >
                                          <span
                                            class="
                                              block
                                              text-xs text-gray
                                              capitalize
                                            "
                                            >{{ forecast.dirviento }}°
                                            {{
                                              direction_calc(forecast.dirviento)
                                            }}</span
                                          >
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </li>
                                <li
                                  class="
                                    relative
                                    border border-white
                                    bg-light-gray
                                    py-1
                                  "
                                >
                                  <span
                                    class="flex mx-auto w-min whitespace-nowrap"
                                  >
                                    <span
                                      class="
                                        font-medium
                                        text-sm text-brown
                                        w-28
                                      "
                                    >
                                      {{ forecast.alturaswell1 }} m /
                                      {{ forecast.periodoswell1 }} s</span
                                    >
                                    <span class="arrow-icon-area mt-1 ml-5">
                                      <span
                                        @click="toggleClose = !toggleClose"
                                        class="gray-arrow-icon block mb-1"
                                        :style="
                                          'transform: rotate(' +
                                          forecast.direswell1 +
                                          'deg)'
                                        "
                                      ></span>
                                      <span
                                        v-show="toggleClose"
                                        class="
                                          sw-info
                                          absolute
                                          z-10
                                          h-16
                                          w-28
                                          bg-white
                                          border border-blue
                                          rounded
                                          p-2
                                          -ml-24
                                        "
                                      >
                                        <span
                                          @click="toggleClose = !toggleClose"
                                          class="
                                            close-icon
                                            absolute
                                            right-2
                                            top-2
                                          "
                                        ></span>
                                        <span
                                          class="text-left block h-full w-full"
                                        >
                                          <span
                                            class="
                                              block
                                              font-semibold
                                              text-sm
                                              mb-2
                                              text-gray
                                              capitalize
                                            "
                                            >Swell Dir.</span
                                          >
                                          <span
                                            class="
                                              block
                                              text-xs text-gray
                                              capitalize
                                            "
                                            >{{ forecast.direswell1 }}°
                                            {{
                                              direction_calc(
                                                forecast.direswell1
                                              )
                                            }}</span
                                          >
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </li>
                                <li
                                  class="
                                    relative
                                    border border-white
                                    bg-light-gray
                                    py-1
                                  "
                                >
                                  <span
                                    class="flex mx-auto w-min whitespace-nowrap"
                                  >
                                    <span
                                      class="
                                        font-medium
                                        text-sm text-brown
                                        w-28
                                      "
                                    >
                                      {{ forecast.alturaswell2 }} m /
                                      {{ forecast.periodoswell2 }} s</span
                                    >
                                    <span class="arrow-icon-area mt-1 ml-5">
                                      <span
                                        @click="toggleClose = !toggleClose"
                                        class="gray-arrow-icon block mb-1"
                                        :style="
                                          'transform: rotate(' +
                                          forecast.direswell2 +
                                          'deg)'
                                        "
                                      ></span>
                                      <span
                                        v-show="toggleClose"
                                        class="
                                          sw-info
                                          absolute
                                          z-10
                                          h-16
                                          w-28
                                          bg-white
                                          border border-blue
                                          rounded
                                          p-2
                                          -ml-24
                                        "
                                      >
                                        <span
                                          @click="toggleClose = !toggleClose"
                                          class="
                                            close-icon
                                            absolute
                                            right-2
                                            top-2
                                          "
                                        ></span>
                                        <span
                                          class="text-left block h-full w-full"
                                        >
                                          <span
                                            class="
                                              block
                                              font-semibold
                                              text-sm
                                              mb-2
                                              text-gray
                                              capitalize
                                            "
                                            >Swell Dir.</span
                                          >
                                          <span
                                            class="
                                              block
                                              text-xs text-gray
                                              capitalize
                                            "
                                            >{{ forecast.direswell2 }}° SW</span
                                          >
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </li>
                                <li
                                  class="
                                    relative
                                    border border-white
                                    bg-light-gray
                                    py-1
                                  "
                                >
                                  <span
                                    class="flex mx-auto w-min whitespace-nowrap"
                                  >
                                    <span
                                      class="
                                        font-medium
                                        text-sm text-brown
                                        w-28
                                      "
                                    >
                                      {{ forecast.alturaswell3 }} m /
                                      {{ forecast.periodoswell3 }} s</span
                                    >
                                    <span class="arrow-icon-area mt-1 ml-5">
                                      <span
                                        @click="toggleClose = !toggleClose"
                                        class="gray-arrow-icon block mb-1"
                                        :style="
                                          'transform: rotate(' +
                                          forecast.direswell3 +
                                          'deg)'
                                        "
                                      ></span>
                                      <span
                                        v-show="toggleClose"
                                        class="
                                          -top-1
                                          sw-info
                                          absolute
                                          z-10
                                          h-16
                                          w-28
                                          bg-white
                                          border border-blue
                                          rounded
                                          p-2
                                          -ml-24
                                        "
                                      >
                                        <span
                                          @click="toggleClose = !toggleClose"
                                          class="
                                            close-icon
                                            absolute
                                            right-2
                                            top-2
                                          "
                                        ></span>
                                        <span
                                          class="text-left block h-full w-full"
                                        >
                                          <span
                                            class="
                                              block
                                              font-semibold
                                              text-sm
                                              mb-2
                                              text-gray
                                              capitalize
                                            "
                                            >Swell Dir.</span
                                          >
                                          <span
                                            class="
                                              block
                                              text-xs text-gray
                                              capitalize
                                            "
                                            >{{ forecast.direswell3 }}° SW</span
                                          >
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </li>
                                <li
                                  class="
                                    relative
                                    border border-white
                                    bg-light-gray
                                    py-1
                                  "
                                >
                                  <span
                                    class="flex mx-auto w-min whitespace-nowrap"
                                  >
                                    <span
                                      class="mt-1 mr-4"
                                      :class="{
                                        CLEAR: 'CLEAR' === forecast.condicion,
                                        NIGHT_CLEAR:
                                          'NIGHT_CLEAR' === forecast.condicion,
                                        CLOUDY: 'CLOUDY' === forecast.condicion,
                                      }"
                                    >
                                    </span>
                                    <span class="font-sm font-light text-brown"
                                      >{{ forecast.temp.toFixed(2) }}
                                      <sup class="text-xs">&#8451;</sup></span
                                    >
                                  </span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="lg:w-11/12 w-min mx-auto lg:mb-10 mb-3"
                  v-if="day.mareas[0]"
                >
                  <div
                    class="
                      head-title
                      lg:w-9/12
                      text-blue
                      font-bold
                      uppercase
                      pb-1
                    "
                  >
                    MAREAS
                  </div>
                  <div class="lg:flex">
                    <div class="lg:w-9/12 lg:mr-10">
                      <div class="lg:flex justify-between w-full">
                        <div class="flex pt-6 pb-2 border-b border-color-brown">
                          <span class="flex">
                            <span class="wave-icon-blue block"></span>
                            <span class="uppercase text-blue -mt-0.5 ml-2 mr-10"
                              >alta</span
                            >
                          </span>
                          <span class="flex">
                            <span class="clock-blue block"></span>
                            <span
                              class="
                                font-bold
                                text-sm text-center
                                lowercase
                                text-brown
                                ml-2
                                mr-10
                              "
                            >
                              {{
                                $moment(day.mareas[0].pleamar1hora).format(
                                  "HH:mm"
                                )
                              }}
                            </span>
                          </span>
                          <span class="flex">
                            <span class="arrow-up-down-blue block"></span>
                            <span
                              class="
                                font-bold
                                text-sm text-center
                                lowercase
                                text-brown
                                ml-2
                                whitespace-nowrap
                              "
                              >{{ day.mareas[0].pleamar1 }}m</span
                            >
                          </span>
                        </div>
                        <div class="flex pt-6 pb-2 border-b border-color-brown">
                          <span class="flex">
                            <span class="wave-icon-blue block"></span>
                            <span class="uppercase text-blue -mt-0.5 ml-2 mr-10"
                              >alta</span
                            >
                          </span>
                          <span class="flex">
                            <span class="clock-blue block"></span>
                            <span
                              class="
                                font-bold
                                text-sm text-center
                                lowercase
                                text-brown
                                ml-2
                                mr-10
                              "
                              >{{
                                $moment(day.mareas[0].pleamar2hora).format(
                                  "HH:mm"
                                )
                              }}</span
                            >
                          </span>
                          <span class="flex">
                            <span class="arrow-up-down-blue block"></span>
                            <span
                              class="
                                font-bold
                                text-sm text-center
                                lowercase
                                text-brown
                                ml-2
                                whitespace-nowrap
                              "
                              >{{ day.mareas[0].pleamar2 }} m</span
                            >
                          </span>
                        </div>
                      </div>
                      <div class="lg:flex justify-between w-full">
                        <div class="flex pt-6 pb-2 border-b border-color-brown">
                          <span class="flex">
                            <span class="wave-icon-yellow block"></span>
                            <span
                              class="uppercase text-yellow -mt-0.5 ml-2 mr-10"
                              >baja</span
                            >
                          </span>
                          <span class="flex">
                            <span class="clock-yellow block"></span>
                            <span
                              class="
                                font-bold
                                text-sm text-center
                                lowercase
                                text-yellow
                                ml-2
                                mr-10
                              "
                              >{{
                                $moment(day.mareas[0].bajamar1hora).format(
                                  "HH:mm"
                                )
                              }}</span
                            >
                          </span>
                          <span class="flex">
                            <span class="arrow-up-down-yellow block"></span>
                            <span
                              class="
                                font-bold
                                text-sm text-center
                                lowercase
                                text-yellow
                                ml-2
                                whitespace-nowrap
                              "
                              >{{ day.mareas[0].bajamar1 }} m</span
                            >
                          </span>
                        </div>
                        <div class="flex pt-6 pb-2 border-b border-color-brown">
                          <span class="flex">
                            <span class="wave-icon-blue block"></span>
                            <span class="uppercase text-blue -mt-0.5 ml-2 mr-10"
                              >baja</span
                            >
                          </span>
                          <span class="flex">
                            <span class="clock-blue block"></span>
                            <span
                              class="
                                font-bold
                                text-sm text-center
                                lowercase
                                text-brown
                                ml-2
                                mr-10
                              "
                              >{{
                                $moment(day.mareas[0].bajamar2hora).format(
                                  "HH:mm"
                                )
                              }}</span
                            >
                          </span>
                          <span class="flex">
                            <span class="arrow-up-down-blue block"></span>
                            <span
                              class="
                                font-bold
                                text-sm text-center
                                lowercase
                                text-brown
                                ml-2
                                whitespace-nowrap
                              "
                              >{{ day.mareas[0].bajamar2 }} m</span
                            >
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="
                        lg:block
                        flex
                        lg:w-2/12 lg:mx-auto
                        ml-1
                        lg:py-0
                        pt-5
                      "
                    >
                      <div class="flex lg:pb-3.5 lg:pr-0 pr-10">
                        <span class="sunrise block"></span>
                        <span
                          class="
                            font-bold
                            text-2xl text-center
                            lowercase
                            text-brown
                            w-8/12
                            ml-2
                          "
                          >{{
                            $moment(day.mareas[0].sunrise).format("HH:mm")
                          }}</span
                        >
                      </div>
                      <div
                        class="
                          flex
                          lg:pt-3.5 lg:pl-0
                          pl-10
                          lg:border-t
                          border-l
                          lg:border-l-0
                          border-color-brown
                        "
                      >
                        <span class="sunset block"></span>
                        <span
                          class="
                            font-bold
                            text-2xl text-center
                            lowercase
                            text-brown
                            w-8/12
                            ml-2
                          "
                          >{{
                            $moment(day.mareas[0].sunset).format("HH:mm")
                          }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import WeekChart from "~/components/WeekChart.vue";

export default {
  components: { WeekChart },
  head() {
    return {
      title:
        "Camaras y reporte de surf en " +
        this.$route.params.name +
        " - Buscaolas",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Revisa el reporte y las condiciones de la ola en la playa" +
            this.$route.params.name,
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Camaras y reporte de surf en " +
            this.$route.params.name +
            " - Buscaolas",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Revisa el reporte y las condiciones de la ola en la playa " +
            this.$route.params.name,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.PlayaData.playa.imagen,
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://buscaolas.cl/playas/" + this.$route.params.name,
        },
      ],
    };
  },
  async asyncData({ $axios, params, store }) {
    if (params.name) {
      const PlayaData = await $axios.$get(
        "/api/main/playa/" +
          params.name +
          "/?premium=" +
          store.getters.IsPremium
      );
      const DataAds = await $axios.$get("/api/main/ads/?type=video");
      const RepairData = await $axios.$get(
        "/api/main/playa/repair/" + params.name + "/"
      );
      return { PlayaData, DataAds, RepairData };
    }
  },
  data() {
    return {
      qualityVideo: "SD",
      premiumPopup: false,
      offline_url: null,
      loaded: false,
      type: "category",
      toggleClose: false,
      popup_title: "Disfruta de Premium",
      popup_maintext: "Para que cada sesion valga la pena",
      forecast_day: [],
      current_rating: {},
    };
  },
  mounted() {
    this.loaded = true;
    const dataInitial = [];
    const data = [];
    for (let i = 0; i < this.PlayaData.chart_data_weekly.length; i++) {
      dataInitial.push(this.PlayaData.chart_data_weekly[i].data);
      for (var j = 0; j < dataInitial[i].length; j++) {
        data.push(dataInitial[i][j]);
      }
    }
    if (typeof this.PlayaData.playa.forecast_day[0] === "undefined") {
      this.forecast_day = {
        alturmax: "No data",
        alturamin: "No data",
        speedviento: 0,
        dirviento: "No data",
      };
      if (this.current_rating === null) {
        this.current_rating = "En revision";
      } else {
        this.current_rating = { rating: "revision", color: "#B6B6B7" };
      }
    } else {
      this.forecast_day = this.PlayaData.playa.forecast_day[0];
      this.current_rating = this.PlayaData.playa.forecast_day[0].current_rating;
    }
    console.log(
      "this.PlayaData.chart_data_weekly",
      this.PlayaData.chart_data_weekly
    );
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser", "IsPremium"]),
    ShowOffline() {
      // var date_now = new Date()
      // var time = date_now.getHours()
      if (this.PlayaData.playa.urlvideo == "None") {
        this.offline_url = require("@/static/images/proximamente.png");
        return true;
      } else if (this.PlayaData.playa.urlvideo.startsWith("R")) {
        this.offline_url = require("@/static/images/reparar.jpg");
        return true;
        // } else if (time > 20 || time < 6){
        //   this.offline_url = "https://media-buscaolas.s3.sa-east-1.amazonaws.com/videos/apagada_poster.jpg"
        //   return true;
      } else {
        return false;
      }
    },
    dateNow() {
      return Date.now();
    },
  },
  methods: {
    isToggle(day) {
      day.isActive = !day.isActive;
    },
    clickDayBar(e) {
      const activePoints = chart2.getElementsAtEventForMode(
        e,
        "index",
        { intersect: true },
        false
      );
      if (Object.keys(activePoints).length !== 0) {
        this.days[activePoints[0].index].isActive = true;
      }
    },
    Color(i, totalblue) {
      if (i <= totalblue) {
        return true;
      } else {
        return false;
      }
    },
    premium() {
      this.$router.push({ path: "/premium" });
    },
    history() {
      if (this.$store.getters.IsPremium) {
        this.$router.push({ path: "/historia/" + this.PlayaData.playa.path });
      } else {
        this.popup_title = "Historial Exclusivo para premium";
        this.popup_maintext =
          "Prueba premium por 14 días gratis y revisa hasta 3 días atrás las camaras";
        this.premiumPopup = true;
      }
    },
    ChangeVideoSource() {
      if (this.$store.getters.IsPremium) {
        if (this.qualityVideo == "SD") {
          this.qualityVideo = "HD";
        } else {
          this.qualityVideo = "SD";
        }
      } else {
        console.log("hrer");
        this.popup_title = "HD Exclusivo para premium";
        this.popup_maintext =
          "Prueba premium por 14 días gratis y ve todas las olas en alta definición'";
        this.premiumPopup = true;
      }
    },
    direction_calc(dir) {
      if (281 <= dir && dir < 303) {
        return "WNW";
      } else if (303 <= dir && dir < 326) {
        return "NW";
      } else if (326 <= dir && dir < 348) {
        return "NNW";
      } else if (258 <= dir && dir < 281) {
        return "W";
      } else if (236 <= dir && dir < 258) {
        return "WSW";
      } else if (213 <= dir && dir < 236) {
        return "SW";
      } else if (191 <= dir && dir < 213) {
        return "SSW";
      } else if (168 <= dir && dir < 191) {
        return "S";
      } else if (146 <= dir && dir < 168) {
        return "SSE";
      } else if (123 <= dir && dir < 146) {
        return "SE";
      } else if (101 <= dir && dir < 123) {
        return "ESE";
      } else if (78 <= dir && dir < 101) {
        return "E";
      } else if (56 <= dir && dir < 78) {
        return "ENE";
      } else if (33 <= dir && dir < 56) {
        return "NE";
      } else if (11 <= dir && dir < 33) {
        return "NNE";
      } else if (348 <= dir && dir < 11) {
        return "N";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.font-poppins {
  font-family: Poppins;
}
// video player

.play-parent {
  width: 100%; /* width depends on your layout and needs  */
  position: relative;
  overflow: hidden;
}
/* Semi-transparent DIV element to cover entire player */
.div-over {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  display: none;
  overflow: hidden;
}
/* Centered DIV element for our banner ad */
.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
}
/* Close button */
.over-close {
  width: 28px;
  height: 28px;
  position: absolute;
  top: 10px;
  right: 10px;
  line-height: 28px;
  text-align: center;
  font-size: 18px;
  font-family: sans-serif;
  background: #fff;
  cursor: pointer;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
}
.over-close:after {
  content: "";
  height: 16px;
  border-left: 2px solid #222;
  position: absolute;
  transform: rotate(45deg);
  left: 13px;
  top: 6px;
}
.over-close:before {
  content: "";
  height: 16px;
  border-left: 2px solid #222;
  position: absolute;
  transform: rotate(-45deg);
  left: 13px;
  top: 6px;
}
.div-over .no-click {
  pointer-events: none;
}
.div-over .no-click:before,
.div-over .no-click:after {
  border-width: 0;
}
.tracking-widest-1 {
  letter-spacing: 0.01em;
}
.error {
  background-color: #c8142e;
}
.warning {
  background-color: #ffa800;
}
.text-blue {
  color: #1c496b;
}
.text-blue-1 {
  color: #1c496b99;
}
.text-brown {
  color: #3c3c3b;
}
.text-yellow {
  color: #ffa800;
}
.border-orange {
  border-color: #ff7e00;
}
.text-gray {
  color: #373d3f;
}
.bg-dark-blue {
  background: #1c496b;
}
.bg-orange {
  background: #ff7e00;
}
.bg-brown {
  background: #3c3c3b;
}
.bg-gray {
  background: #c4c4c4;
}
.bg-ocean-blue {
  background: #e5fdfb;
}
.bg-yellow {
  background: #ffa800;
}
.bg-green-blue {
  background-color: #00a99d;
}
.bg-light-blue {
  background: #7792a6;
}
.bg-gray {
  background: #e5e5e5;
}
.comment-box {
  background: #ffa800;
}
.border-yellow {
  border-color: #ffa800;
}
.bg-dark-green {
  background: #00a99d;
}
.gray-box {
  background: #f0f0f0;
}
.bg-blue-gray {
  background: #1c496b4d;
}
.bg-light-green {
  background: #14c6084d;
}
.bg-green {
  background: #45aa14;
}
.bg-light-gray {
  background: #e5e5e53b;
  // background: #F9F9F9;
}
.border-top-gray {
  border-top: 1px solid #3c3c3b;
}
.time {
  color: #3c3c3b;
}
.regular {
  background: #3c3c3b;
}
.buena {
  background: #ffa800;
}
.corre2de10 {
  background: #1c496b99;
}
.corre5-6de10 {
  background: #1c496b;
}
.corre4de10 {
  background: #7792a6;
}
.mts-report {
  background: #1c496b;
}
.border-color-brown {
  border-color: #3c3c3b;
}
.text-sm-1 {
  font-size: 15px;
}
.text-xxs {
  font-size: 10px;
}
.green-blue-box {
  background-color: #00a99d;
  width: 40px;
  height: 40px;
}
.la-boca {
  background: linear-gradient(111.71deg, #1c496b 0%, #00a99d 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}
.arrow-icon-area {
  .sw-info {
    display: none;
  }
  &:hover {
    .sw-info {
      display: block;
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
}
.alert-icon {
  background: url("~/static/img/icon/alert_icon.png");
  width: 32px;
  height: 30px;
}
.cam-icon {
  background: url("~/static/img/icon/cam_icon.png");
  width: 27px;
  height: 20px;
}
.calendar {
  background: url("~/static/img/icon/calendar.png");
  width: 20px;
  height: 20px;
}
.mts {
  width: 137px;
  height: 20px;
  text-align: center;
}
.wind-white-icon {
  width: 20px;
  height: 20px;
  background: url("~/static/img/icon/windy_1_white.png");
}
.kmh {
  width: 96px;
  height: 20px;
  border: 1px solid red;
}
.ms {
  width: 137px;
  height: 20px;
}
.water-white-icon {
  width: 20px;
  height: 20px;
  background: url("~/static/img/icon/bx-water-2_1_white.png");
}
.water-white-icon-2 {
  width: 25px;
  height: 20px;
  background: url("~/static/img/icon/bx-water-2_1_25px-20px.png");
}
.border-blue {
  border-color: #1c496b;
}
.carret-down {
  width: 20px;
  height: 12px;
  background: url("~/static/img/icon/Flecha_der_yellow.png") no-repeat;
}
.title {
  font-size: 36px;
}
.comment-icon {
  width: 25px;
  height: 25px;
  background-image: url("~/static/img/icon/comment_icon_25px.png");
}
.name {
  background: #1c496b;
  width: 280px;
  height: 40px;
  font-size: 15px;
  line-height: 22px;
}
.number {
  font-size: 10px;
  line-height: 15px;
  color: #3c3c3b;
}
.date {
  font-size: 10px;
  line-height: 15px;
}
.like-icon {
  background-image: url("~/static/img/icon/like_icon.png");
  width: 24px;
  height: 20px;
}
.unlike-icon {
  background-image: url("~/static/img/icon/unlike_icon.png");
  width: 24px;
  height: 20px;
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
  background-image: url("~/static/img/icon/ios-clock-outline_1_.png");
  width: 22px;
  height: 22px;
}
.clock-icon {
  background-image: url("~/static/img/icon/ios-clock-outline_1_16x16.png");
  width: 16px;
  height: 16px;
}
.wind-icon {
  background-image: url("~/static/img/icon/wind16x16.png");
  width: 16px;
  height: 16px;
}
.red-arrow-icon {
  background-image: url("~/static/img/icon/red_arrow.png");
  width: 15px;
  height: 17px;
}
.green-arrow-icon {
  background-image: url("~/static/img/icon/green_arrow.png");
  width: 16px;
  height: 16px;
}
.gray-arrow-icon {
  background-image: url("~/static/img/icon/gray_arrow.png");
  width: 16px;
  height: 16px;
}
.swell-arrow-yellow-icon {
  background-position: center;
  display: block;
  background-size: 30px 20px;
  background-image: url("~/static/img/icon/swell_arrow_yellow.png");
  background-repeat: no-repeat;
  //padding: 30px 18px;
  //background-size: contain, cover;
}
.close-icon {
  background-image: url("~/static/img/icon/close-icon14x14.png");
  width: 14px;
  height: 14px;
}
.CLEAR {
  background-image: url("~/static/img/icon/sunny-day1.png");
  width: 16px;
  height: 16px;
}
.NIGHT_CLEAR {
  background-image: url("~/static/img/icon/sunny-day1.png");
  width: 16px;
  height: 16px;
}
.sunny-day {
  background-image: url("~/static/img/icon/sunny-day1.png");
  width: 16px;
  height: 16px;
}
.CLOUDY {
  background-image: url("~/static/img/icon/cloudy1.png");
  width: 16px;
  height: 16px;
}
.wave-icon {
  background-image: url("~/static/img/icon/wave_icon.png");
  width: 29px;
  height: 20px;
}
.yellow-carret-left {
  width: 21px;
  height: 44px;
  background-image: url("~/static/img/icon/big_yellow_carret_left.png");
}
.yellow-carret-right {
  width: 21px;
  height: 44px;
  background-image: url("~/static/img/icon/big_yellow_carret_right.png");
}
.head-title {
  font-size: 25px;
  line-height: 37px;
  border-bottom: 1px solid #3c3c3b;
}
.wave-icon-blue {
  background-image: url("~/static/img/icon/bx-water-2_1_blue.png");
  width: 27px;
  height: 20px;
}
.clock-blue {
  background-image: url("~/static/img/icon/ios-clock-outline_1_blue.png");
  width: 22px;
  height: 22px;
}
.arrow-up-down-blue {
  background-image: url("~/static/img/icon/arrow-up-down_icon.png");
  width: 20px;
  height: 20px;
}
.wave-icon-yellow {
  background-image: url("~/static/img/icon/bx-water-2_1_yellow.png");
  width: 27px;
  height: 20px;
}
.clock-yellow {
  background-image: url("~/static/img/icon/ios-clock-outline_1_yellow.png");
  width: 22px;
  height: 22px;
}
.arrow-up-down-yellow {
  background-image: url("~/static/img/icon/arrow-up-down_icon_yellow.png");
  width: 20px;
  height: 20px;
}
.sunrise {
  background-image: url("~/static/img/icon/sunrise_1_.png");
  width: 40px;
  height: 40px;
}
.sunset {
  background-image: url("~/static/img/icon/sunset_1_.png");
  width: 40px;
  height: 40px;
}
.sound-icon {
  background-image: url("~/static/img/icon/sound_icon.png");
  width: 25px;
  height: 20px;
}
.play-button {
  background-image: url("~/static/img/icon/play_78px_78px.png");
  width: 78px;
  height: 78px;
}
.block-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tracking-widest-1 {
  letter-spacing: 0.25em;
}
.alternate-color-for-day:nth-child(odd) > ul > li {
  background: #e5fdfb;
}
.alternate-color-for-day:nth-child(even) > ul > li {
  background: #eef8ff;
}
.alternate-color-for-day:nth-child(odd)
  > ul
  > li
  > .graphline-container
  > .dynamic-graphline {
  background: #00a99d;
}
.alternate-color-for-day:nth-child(even)
  > ul
  > li
  > .graphline-container
  > .dynamic-graphline {
  background: #1c496b;
}

.alternate-color-for-day:nth-child(odd) > ul > li > .viento-arrow-icon {
  background-image: url("~/static/img/icon/viento_arrow_green.png");
  background-repeat: no-repeat;
  padding: 20px 18px;
  background-size: contain, cover;
  background-position: center;
}
.alternate-color-for-day:nth-child(even) > ul > li > .viento-arrow-icon {
  background-image: url("~/static/img/icon/viento_arrow_blue.png");
  background-repeat: no-repeat;
  padding: 20px 18px;
  background-size: contain, cover;
  background-position: center;
}

.alternate-color-for-day:nth-child(odd)
  > ul
  > li
  > .swell-arrow-container
  > .swell-arrow-green-or-blue-icon {
  background-image: url("~/static/img/icon/swell_arrow_green.png");
  width: 12px;
  height: 18px;
}
.alternate-color-for-day:nth-child(even)
  > ul
  > li
  > .swell-arrow-container
  > .swell-arrow-green-or-blue-icon {
  background-image: url("~/static/img/icon/swell_arrow_blue.png");
  width: 12px;
  height: 18px;
}

.alternate-color-for-day:nth-child(odd)
  > ul
  > li
  > svg
  > .dynamic-color-polyline {
  stroke: #00a99d;
  stroke-width: 2;
}
.alternate-color-for-day:nth-child(even)
  > ul
  > li
  > svg
  > .dynamic-color-polyline {
  stroke: #1c496b;
  stroke-width: 2;
}

.polyline-yellow {
  stroke: #ffa800;
  stroke-width: 2;
}

@media only screen and (max-width: 1023px) {
  .warning {
    background: #00a99d;
  }
  .comment-box {
    background: #00a99d;
  }
}

@media only screen and (max-width: 374px) {
  .sm-320 {
    display: block;
  }
}
</style>