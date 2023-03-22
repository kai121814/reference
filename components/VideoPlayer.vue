<template>
    <video ref="videoPlayer" class="video-js vjs-16-9 visual"></video>
</template>

<script>
import { mapGetters} from 'vuex';
import videojs from "video.js";
import 'assets/skins/shaka/videojs.min.css';

if (process.client) {
  require('~/static/js/nuevo.js')
  require('~/static/js/offline.js')
  require('~/static/js/vroll.js')
  require('~/assets/videojs/es.js')
}
export default {
    props: {
        source: String,
        camera_num: Number,
        triggerSource: String,
        source_hd: String,
        Ads_data: Array,
        ratingvideo: String,
        colorrating: String,
        alturamax: Number,
        alturamin: Number,
        speedviento: Number,
        direvient: Number,
        premium_videoAdd: String
    },
    data () {
        return {
            htmlVideo: '<div class="absolute top-0 mt-0 px-5 w-full box-border">\
                          <div class="block mx-auto lg:mx-0 w-min lg:w-auto">\
                            <div class="flex mt-7">\
                              <div class="bg-black font-bold text-center text-xs text-blue-1 text-xs px-5 whitespace-nowrap" style="background:'+this.colorrating+';">'+this.ratingvideo+'</div>\
                                <div class="border border-white mts text-center text-white font-bold text-xs px-5">'+this.alturamin+' - '+this.alturamax+' mts</div>\
                                </div>\
                              </div>\
                              <div class="block mx-auto lg:mx-0 w-min lg:w-auto">\
                                <div class="flex">\
                                  <span class="water-white-icon"></span>\
                                    <span class="text-center kmh font-bold text-xs text-white pt-0.5 whitespace-nowrap ms">Viento actual: '+this.speedviento+'Km/h | '+this.direvient+'°</span>\
                                </div>\
                              </div>\
                            </div>\
                          </div>\
                        </div>',
            actionv: null,
            offsetv: '12',
            ads_video1: null,
            last_video: null,
        }
    },
    mounted () {
            if (this.IsPremium) {
                var videojs_options = {
                    controls: true,
                    preload: "auto",
                    playsinline: true,
                    language: 'es',
                    crossorigin: "anonymous",
                    poster: require("@/static/img/video_poster/fondovideopremium.png"),
                    sources: [
                        {
                        src: this.source,
                        type: "application/x-mpegURL",
                        res: "SD",
                        label: "SD"
                        }
                    ]
                    }
                var nuevo_options = {
                    rateMenu: false,
                    zoomMenu: true,
                    zoomInfo: true,
                    zoomWheel: true,
                    videoInfo: true,
                    title: this.htmlVideo
                };
            } else if (this.camera_num == 2 || this.camera_num == 3){
              if (this.premium_videoAdd == 'null'){
                this.premium_videoAdd = 'https://media-buscaolas.s3.sa-east-1.amazonaws.com/videos/multicam.mp4'
              }
              var videojs_options = {
                  controls: false,
                  language: 'es',
                  preload: "auto",
                  playsinline: true,
                  loop:'true',
                  autoplay: true,
                  crossorigin: "anonymous",
                  poster: require("@/static/img/video_poster/fondovideo.png"),
                  sources: [
                    {
                      src: this.premium_videoAdd,
                      type: "video/mp4",
                    }
                  ]
                }
              var nuevo_options = {
                    contextMenu: false,
                    relatedMenu: false,
                    shareMenu: false,
                    rateMenu: false,
                    zoomMenu: false,
                    title: this.htmlVideo
                };
            } else {
              var videojs_options = {
                  controls: true,
                  language: 'es',
                  preload: "auto",
                  playsinline: true,
                  crossorigin: "anonymous",
                  poster: require("@/static/img/video_poster/fondovideo.png"),
                  sources: [
                    {
                      src: this.source,
                      type: "application/x-mpegURL",
                    }
                  ]
                }
              var nuevo_options = {
                    contextMenu: false,
                    relatedMenu: false,
                    shareMenu: false,
                    rateMenu: false,
                    zoomMenu: false,
                    title: this.htmlVideo
                };
            }
        this.player = videojs(
            this.$refs.videoPlayer,
            videojs_options,
              // function onPlayerReady() {
              //   console.log("onPlayerReady", this);
              // }
              );
        this.player.nuevo(nuevo_options);
        document.body.addEventListener('click', this.player.autoplay('muted'))
        // this.player.autoplay('muted');

        if (!this.IsPremium && this.camera_num == 1) {
        this.ads_video1 = this.Ads_data.find(i => i.location === 'video-1' )
        this.player.vroll([
            {
              src: this.ads_video1.ads_url,
              type: "video/mp4",
              href: this.ads_video1.url_basic,
              offset: "0",
              skip: "0",
              id: this.ads_video1.id
            },
          ]);
         this.player.on('vroll', (event, data) => {
              this.VrollAction(data.action)
              var url_path = this.$route.path
             if (this.$device.isMobile) {
                 var device1 = 'mobile'
               } else if (this.$device.isTablet) {
                  var device1 = 'tablet'
                } else if (this.$device.isDesktop) {
                  var device1 = 'desktop'
                }
              if (data.action == 'start'){
               const DataAds = this.$axios.$post("/api/main/ads/tracking/", {
                                  url_adspage: url_path,
                                  type_tracking: "impression",
                                  device: device1,
                                  ads: data.id
                                  } )
              }
              if (data.action == 'clicked'){
               const DataAds = this.$axios.$post("/api/main/ads/tracking/", {
                                  url_adspage: url_path,
                                  device: device1,
                                  type_tracking: "click",
                                 ads: data.id
                                 } )
              }

          });
        }
    },
        beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },
    methods: {
      calledAds(){
          const DataAds = this.$axios.$get("/api/main/ads/?type=video")
            if (DataAds.length > 0){
              this.Ads_data = DataAds
              this.ads_video1 = this.Ads_data.find(i => i.location === 'video-1' )
              console.log(this.ads_video1)
          }
            
      },

      VrollAction(actionVroll) {
        this.actionv = actionVroll
        if (actionVroll == 'skipped' || actionVroll == 'completed'){
              if (this.last_video == null){
                this.ads_video1 = this.Ads_data.find(i => i.location === 'video-2' )
                this.last_video = 'video-2'
              } else if (this.last_video == 'video-2' ){
                if (this.Ads_data.find(i => i.location === 'video-3' )){
                  this.ads_video1 = this.Ads_data.find(i => i.location === 'video-3' )
                  this.last_video = 'video-3'
                } else {
                  this.ads_video1 = this.Ads_data.find(i => i.location === 'video-1' )
                  this.last_video = null
                }
              } else if (this.last_video == 'video-3'){
                this.ads_video1 = this.Ads_data.find(i => i.location === 'video-1' )
                this.last_video = null
              }
              this.player.vroll([
                  {
                    src: this.ads_video1.ads_url,
                    type: "video/mp4",
                    href: this.ads_video1.url_basic,
                    offset: this.offsetv,
                    skip: "6",
                    id: this.ads_video1.id
                  }
                ]);
              }
      },
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser', 'IsPremium'])
    },
    watch: {
      actionv (oldaction, newaction){
        if (newaction == 'skipped'){
          this.offsetv = "22"
        }

      },
       triggerSource(newvalue, oldvalue){
         if (newvalue == "HD" && oldvalue == "SD") {
           var newsource = {
                    controls: true,
                    preload: "auto",
                    playsinline: true,
                    language: 'es',
                    crossorigin: "anonymous",
                    title: this.htmlVideo,
                    poster: require("@/static/img/video_poster/fondovideopremium.png"),
                    sources: [
                        {
                        src: this.source_hd,
                        type: "application/x-mpegURL",
                        res: "SD",
                        label: "SD"
                        }
                    ]
                    }
         } else {
         var newsource = {
                    controls: true,
                    preload: "auto",
                    playsinline: true,
                    language: 'es',
                    crossorigin: "anonymous",
                    title: this.htmlVideo,
                    poster: require("@/static/img/video_poster/fondovideopremium.png"),
                    sources: [
                        {
                        src: this.source,
                        type: "application/x-mpegURL",
                        res: "SD",
                        label: "SD"
                        }
                    ]
                    }
        
         }        
        this.player.changeSource(newsource);
         

      }
    }
}
</script>
<style lang="scss" scoped>
.wind-white-icon{
    width: 5px;
    height: 5px;
    background: url('~/static/img/icon/windy_1_white.png');
  }
</style>