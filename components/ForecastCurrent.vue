<template>
  <div class="">
    <div class="premium">
      <div class="cover lg:pt-10 h-96">
        <Ads location="home-middle" />
      </div>
    </div>
    <div class="w-9/12 mx-auto text-center">
      <div
        class="
          uppercase
          font-bold
          heading
          text-4xl
          line-height-46px
          text-center
          lg:text-left
          mb-10
          lg:-mt-8
          md:-mt-16
        "
      >
        PRonóstico ACTUAL
      </div>
    </div>
    <div
      class="
        grid
        lg:grid-cols-3
        md:grid-cols-2
        grid-cols-1
        lg:w-9/12
        w-11/12
        mx-auto
        lg:bg-transparent
        bg-white
        gap-10
      "
    >
      <div
        class="box mb-3 mx-2 md:w-full"
        v-for="forecast in playa_info"
        :key="forecast.id"
      >
        <div class="flex">
          <div class="square rounded-sm lg:mr-6 mr-3">
            <NuxtLink :to="'playas/' + forecast.playa.path">
              <img
                src="~/static/img/icon/video.png"
                class="image mt-2.5 ml-2"
              />
            </NuxtLink>
          </div>
          <div class="mb-5">
            <div class="font-bold blue main-title">
              {{ forecast.playa.nombre }}
            </div>
            <div class="text-xs blue leading-none">
              {{ forecast.playa.ciudad }}
            </div>
          </div>
        </div>
        <div class="flex text-xs mb-1">
          <div class="w-1/2">
            <span class="font-bold">CONDICIÓN</span>
            <span>{{ forecast.condicion.toUpperCase() }}</span>
          </div>
          <div class="w-1/2">
            <span class="font-bold">AlTURA</span>
            <span>{{ forecast.alturamarea }}</span>
          </div>
        </div>
        <div class="flex">
          <div
            class="
              in-review
              w-1/2
              text-center
              uppercase
              text-white
              font-bold
              py-3
              text-xs
            "
            :style="{ 'background-color': forecast.current_rating.color }"
          >
            {{ forecast.current_rating.rating }}
          </div>
          <div class="text-center w-1/2 mts font-bold py-3 text-xs">
            {{ forecast.alturamin }} - {{ forecast.alturamax }} mts
          </div>
        </div>
        <div class="flex border-gray">
          <div class="w-1/2 flex py-2.5">
            <img src="~/static/img/icon/windy_1_.png" class="image w-5 h-5" />
            <span class="text-xs font-bold ml-1 mt-0.5"
              >{{ forecast.speedviento }} km/h</span
            >
          </div>
          <div class="w-1/2 flex py-2.5">
            <img
              src="~/static/img/icon/bx-water-2_1_.png"
              class="image w-5 h-5"
            />
            <span class="text-xs font-bold ml-1 mt-0.5"
              >{{ forecast.alturaswell1 }} / {{ forecast.periodoswell1 }}S /
              {{ forecast.direswell1 }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playa_info: Array,
  },
  data() {
    return {
      forecasts: [],
    };
  },
  methods: {
    // async fetchData() {
    //   await this.$axios.$get('/api/main/home')
    //     .then(response => {
    //       this.forecasts = response.query_altura;
    //     });
    // }
  },
};
</script>

<style lang="scss" scoped>
.blue {
  color: #1c496b;
}
.line-height-46px {
  line-height: 46px;
}
.premium {
  background: url("static/img/background/image1.png");
  background-size: 100% 100%;
  .cover {
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 100%
    );
  }
}
.heading {
  color: #1c496b;
}
.box {
  color: #3c3c3b;
  .square {
    background: #ffa800;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    width: 40px;
    height: 40px;
  }
  .main-title {
    font-size: 18px;
    line-height: 25px;
  }
  .sub-title {
    line-height: 14px;
  }
  .in-review {
    background: #808080;
  }
  .mts {
    border: 1px solid #808080;
  }
  .border-gray {
    border-bottom: 1px solid #808080;
  }
}
</style>