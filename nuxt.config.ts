// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      link:[
        
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/bootstrap.min.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/animate.min.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/magnific-popup.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/fontawesome-all.min.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/odometer.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/nice-select.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/swiper-bundle.min.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/flaticon.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/slick.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/slick-animate.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/default.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/style.css'},
        { rel: 'stylesheet', type: 'text/css', href:'/assets/css/responsive.css'},
    ],
      script:[
        {src:'/assets/js/vendor/jquery-3.6.0.min.js'},
        {src:"/assets/js/bootstrap.min.js"},
        {src:"/assets/js/imagesloaded.pkgd.min.js"},
        {src:"/assets/js/jquery.magnific-popup.min.js"},
        {src:"/assets/js/jquery.odometer.min.js"},
        {src:"/assets/js/jquery.appear.js"},
        {src:"/assets/js/nice-select.js"},
        {src:"/assets/js/swiper-bundle.min.js"},
        {src:"/assets/js/slick.min.js"},
        {src:"/assets/js/slick-animation.js"},
        {src:"/assets/js/wow.min.js"},
        {src:"/assets/js/main.js"}
      ]
    }
  }
})
