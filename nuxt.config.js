export default {
  mode: "universal",

  head: {
    title: process.env.npm_package_description,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: { color: "#141361" },

  buildModules: ["@nuxtjs/pwa"],

  modules: ["bootstrap-vue/nuxt", "nuxt-webfontloader"],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  webfontloader: {
    google: {
      families: ["Share+Tech+Mono&display=swap"]
    }
  },

  pwa: {
    meta: {
      nativeUI: true,
      title: "Radio Lagos",
      description: "Radio Lagos — 104.7 FM"
    }
  },

  build: {
    extend(config, ctx) {}
  },

  generate: {
    // Use'404.html'
    fallback: true
  }
};
