export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // server: {
  //   host: '0'
  // },
  head: {
    title: 'buscaolas',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Camaras en vivo en las principales playas de Chile' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
      }
    ],
    script: [{src: 'js/head/hotjar.js'}
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ { src: "~plugins/freshchat.js", mode: "client" }
   
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    '@nuxtjs/google-analytics',
    '@nuxtjs/device',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // '@nuxtjs/i18n',
    '@nuxtjs/auth-next',
    '@nuxtjs/sentry',
    '@nuxtjs/toast'
  ],
  sentry: {
    dsn: 'https://743388c7b3bb4d9b834a2eaee24e28b9@o319134.ingest.sentry.io/6082760', // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    publishRelease: {
      authToken: 'f836c2c7da4648edb3b6ee43738cd5958fe896cb8bfe4ea0874c5ac3de32f339',
      org: 'buscaolas',
      project: 'buscaolas-frontend'
    },
    tracesSampleRate: 0.3,
    vueOptions: {
      tracing: true,
      tracingOptions: {
        hooks: [ 'mount', 'update' ],
        timeout: 2000,
        trackComponents: true
      }
    },
    config: {
      release: '1.2'
         // Add native Sentry config here
         // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  },
  googleAnalytics: {
    id: 'UA-134171606-1'
  },

  toast: {
    position: 'top-center',

  },

  moment: {
    defaultLocale: 'es',
    locales: ['es']
  },

  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
    strategy: 'no_prefix',
    vueI18n: {
      dateTimeFormats: {
        es: {
          short: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          },
          timeO: {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          }
        }
      }
    }
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token'
          // required: false,
          // type: "Bearer"
        },
        user: {
          property: ''
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 15
        },
        endpoints: {
          login: { url: 'api/main/auth/login/', method: 'post'},
          user: { url: 'api/main/auth/user/', method: 'get'},
          logout: { url: 'api/main/auth/logout/', method: 'post'},
          refresh: { url: '/api/main/auth/token/refresh/', method: 'post' },
        }
      }
    },
    redirect: {
      home: false,
      login: '/?login=true'
      
    }
  },

  axios: {
    baseURL: 'http://api.buscaolas.cl/',
    proxy: true,
    credentials: false
  },

  proxy: {
    '/api/': 'http://api.buscaolas.cl/'
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}