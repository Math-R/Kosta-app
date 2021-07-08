export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'kosta-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '@/plugins/localStorage.js',
      ssr: false
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }]
  ],

  auth: {
    redirect: {
      login: '/auth',
      logout: '/auth',
      callback: false,
      home: '/albums'
    },
    watchLoggedIn: true,
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.BASE_URL,
        endpoints: {
          login: {
            url: '/api/login',
          },
          user: {
            url: '/api/user',
            method: 'get',
            propertyName: false,
            withCredentials: true,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json'
            }
          }
        }
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    credentials: true
  },
  publicRuntimeConfig: {
    axios: {
      baseUrl: process.env.BASE_URL,
      browserBaseURL: process.env.BASE_URL,
      debug: process.env.AXIOS_DEBUG,
    },
  },
  privateRuntimeConfig: {
    axios: {
      debug: process.env.AXIOS_DEBUG,
      baseURL: process.env.BASE_URL
    }
  },
  proxy: {
    '/laravel': {
      target: process.env.BASE_URL,
      pathRewrite: { '^/laravel': '/' }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  router:{
    middleware: ['auth']
  }

}
