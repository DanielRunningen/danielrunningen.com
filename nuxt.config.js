export default {
   // Target: https://go.nuxtjs.dev/config-target
   target: 'static',

   generate: {
      fallback: true
   },

   env: {
      baseUrl: process.env.BASE_URL || 'https://www.danielrunningen.com'
   },

   // Global page headers: https://go.nuxtjs.dev/config-head
   head() {
      const path = this.$route ? process.env.baseUrl + this.$route.path : process.env.baseUrl;
      const meta = {
         title: 'Daniel Runningen',
         description: 'I like to make things.'
      };
      return {
         title: meta.title,
         htmlAttrs: {
            lang: 'en',
         },
         meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1', },
            { name: 'format-detection', content: 'telephone=no', },
            { hid: 'description', name: 'description', content: meta.description, },
            { hid: 'author', name: 'author', content: meta.title, },
            { hid: 'og:title', name: 'og:title', content: meta.title, },
            { hid: 'og:type', name: 'og:type', content: 'website', },
            { hid: 'og:url', name: 'og:url', content: path, },
            { hid: 'og:image:height', name: 'og:image:height', content: 800, },
            { hid: 'og:image:width', name: 'og:image:width', content: 1200, },
            { hid: 'og:site_name', name: 'og:site_name', content: meta.title, },
            { hid: 'og:description', name: 'og:description', content: meta.description, },
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image', },
            { hid: 'twitter:description', name: 'twitter:description', content: meta.description, },
            { hid: 'twitter:title', name: 'twitter:title', content: meta.title, },
         ],
         link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', },
            { hid: 'canonical', rel: 'canonical', href: path, },
         ],
         script: [
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js', },
         ],
      };
   },

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: [
      { src: '~/assets/style/site.scss', lang: 'sass', },
      { src: '~/node_modules/bootstrap-icons/font/bootstrap-icons.css', lang: 'css', },
      { src: '~/node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css', lang: 'css', },
      { src: '~/node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css', lang: 'css', },
   ],

   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: true,

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: [],

   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      // https://go.nuxtjs.dev/content
      '@nuxt/content',
   ],

   // Content module configuration: https://go.nuxtjs.dev/config-content
   content: {
      markdown: {
         prism: {
            theme: 'prism-themes/themes/prism-material-oceanic.css'
         }
      }
   },

   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {},

   router: {
      routeNameSplitter: '/',
   },
}
