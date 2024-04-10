export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  modules: [
    'nuxt-primevue',
    '@sidebase/nuxt-auth'
  ],
  auth:{
    baseURL:process.env.BACKEND_URL,
    provider:{
      type:"local",
      endpoints:{
        signIn:{path:"/token/login",method:"post"},
        signOut:{path:"/token/logout",method:"post"},
        signUp:undefined,
        getSession:{path:"/users",method:"get"},
      },
      token:{signInResponseTokenPointer:"/auth_token",type:"Token"},
      pages:{login:"/"}
    }
  },
  primevue: {
    components: {
      include: ['Button']
    }
  },
  css: [
    'primeicons/primeicons.css', //css dos ícones do primevue
    'primevue/resources/themes/aura-light-green/theme.css', // css tema dos componentes primevue
    '~/assets/style/global-variables.scss',  //variáveis css global customizado para toda a aplicação
    '~/assets/style/global-project.scss',  //css global customizado para toda a aplicação
  ]
})
