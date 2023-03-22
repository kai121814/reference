<template>
  <div class="mt-6">
    <div class="lg:w-9/12 mx-auto lg:flex go-premium-banner p-10" v-if="premium">
      <div class="heading mb-8 lg:mb-0 font-bold uppercase text-center lg:text-left">
        Con premium puedes ver hasta 7 dias de pronostico.
      </div>
      <div class="mx-auto">
        <NuxtLink to="/premium">
          <button class="go-premium text-white uppercase rounded-sm font-bold block mx-auto lg:mt-8 mb-5">
            hazte premium
          </button>
        </NuxtLink>
        <div class="text text-center">
          Prueba 14 dias gratis y disfruta de los multiples beneficios de premium
        </div>
      </div>
    </div>
    <div class="lg:w-9/12 mx-auto lg:flex go-premium-banner" v-if="!premium">
      <a :href="ads_info.url_basic" v-on:click="track(ads_info.id, ads_info.clicks)">
        <img :src="ads_info.ads_url" alt="" class="">
      </a>
    </div>
  </div>
</template>
<script>
export default {
    props: {
      location: String,
      ismobile: Boolean,
    },
    data () {
      return {
        Ads_data: null,
        premium: true,
        mobile: false
      }
    },
    async fetch(){
      try {
          const DataAds  = await this.$axios.$get("/api/main/ads/?location=" + this.location).then(
            (res) => {this.Ads_data = res}
          )
          if (this.Ads_data.length > 0) {
            this.premium = false
          }
        var url_path = this.$route.path
        if (this.$device.isMobile) {
            var device1 = 'mobile'
            var ads_infot = this.Ads_data.find(i => i.mobile === true )
          } else if (this.$device.isTablet) {
            var device1 = 'tablet'
            var ads_infot = this.Ads_data.find(i => i.mobile === true )
          } else if (this.$device.isDesktop) {
            var device1 = 'desktop'
            var ads_infot = this.Ads_data.find(i => i.type === 'banner' )
          }
        //  const DataAdstracking = await this.$axios.$post("/api/main/ads/tracking/", {
        //                           url_adspage: url_path,
        //                           type_tracking: "impression",
        //                           device: device1,
        //                           ads: ads_infot.id
        //                           } );    
        return { DataAds }
       }
       catch (e) {
         console.log(e)
        return 
       }
    },
    mounted (){
        if (screen.width < 769){
          this.mobile = true
        }
    },
    methods: {
        async track(ads_id, clicks){
           var url_path = this.$route.path
              if (this.$device.isMobile) {
                  var device1 = 'mobile'
                } else if (this.$device.isTablet) {
                  var device1 = 'tablet'
                } else if (this.$device.isDesktop) {
                  var device1 = 'desktop'
                }
          // const DataAdstracking = await this.$axios.$post("/api/main/ads/tracking/", {
          //                         url_adspage: url_path,
          //                         type_tracking: "click",
          //                         device: device1,
          //                         ads: ads_id
          //                         } );
        }
    },
    computed: {
     ads_info(){
      if (this.mobile) {
        var ads = this.Ads_data.find(i => i.mobile === true )
        return ads
      } else {
        var ads = this.Ads_data.find(i => i.type === 'banner' && i.mobile === false)
        return ads
      }
     }
  }

}
</script>

<style lang="scss" scoped>
 .go-premium-banner {
    background: #F0F0F0;
  }
  .heading {
    color: #1C496B;
    width: 440px;
    height: 120px;
    font-size: 25px;
  }
  .go-premium {
    background: #FFA800;
    width: 200px;
    height: 40px;
  }
  .text {
    color: #3C3C3B;
    width: 360px;
    height: 40px;
  }
  @media only screen and (max-width: 1023px) {
    .heading {
      width: 100%;
      height: auto;
    }
    .text {
      width: 100%;
      height: auto;
    }
  }
</style>