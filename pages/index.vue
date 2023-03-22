<template>
  <div class="overflow-x-hidden">
    <client-only>
    <Header/>
    <Detect />
    </client-only>
    <Alertas/>
    <!-- <div class="lg:w-9/12 mx-auto hidden sm:block">
      <NuxtLink to="/torneos/viejos-lobos"><img src="https://media-buscaolas.s3.sa-east-1.amazonaws.com/torneos/viejos-lobos/buscaolas-viejos-lobos-de-mar-transmision-mobile.jpg" alt="viejos-lobos-2022"></NuxtLink>
    </div>
    <div class="lg:w-9/12 mx-auto lg:hidden">
      <NuxtLink to="/torneos/viejos-lobos"><img src="https://media-buscaolas.s3.sa-east-1.amazonaws.com/torneos/viejos-lobos/buscaolas-viejos-lobos-de-mar-transmision-web.jpg" alt="viejos-lobos-2022"></NuxtLink>
    </div> -->
    <Hero :articles="art"/>
    <Ads location="home-top"/>
    <CamerasAndSurfForecast :cameras_forecast="ArticuloData.lugares"/>
    <JoinTheClub/>
    <ForecastCurrent :playa_info="ArticuloData.query_altura"/>
    <LatestArticles :articles="ArticuloData.articulos1"/>
    <!-- <LastAlert/> -->
    <Partners :partners="ArticuloData.sociosall"/>
    <Footer/>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Camaras de surf en vivo - Buscaolas',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Camaras de surf en las principales playas de Chile'
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'Buscaolas - camaras en vivo en las principales playas'
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: 'Camaras de surf en las principales playas de Chile'
          },
            {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://buscaolas.cl'
          },
        ]
      }
    },
    async asyncData({ $axios }) {
      const ArticuloData = await $axios.$get("/api/main/home");
      const art = ArticuloData.articulos1.slice(0,3);
      //console.log('art', art)
      //console.log('ArticuloData', ArticuloData)
      return { ArticuloData, art};
    },
    data(){
      return {
        alert: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
.video-container { 
  position: relative; 
  padding-bottom: 56.25%; 
  padding-top: 30px; 
  height: 0; 
  overflow: hidden; 
  }

.video-container iframe, .video-container object, .video-container embed { 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; }
</style>