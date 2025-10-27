// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  routeRules: {
    // Generated at build time for SEO purpose
    // '/': { prerender: true },
    // Cached for 1 hour
    // '/api/*': { cache: { maxAge: 60 * 60 } },
    // Redirection to avoid 404    
  },
  css: ['~/assets/main.css'],
  app: {
    head: {
      // link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }],
    },
  },
  nitro: {
    experimental: {
      websocket: true
    }
  }
})
