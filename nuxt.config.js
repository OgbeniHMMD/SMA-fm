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

  loading: { color: "#fff" },

  modules: ["@nuxtjs/pwa", "bootstrap-vue/nuxt", "nuxt-webfontloader"],

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
      title: "Radio Lagos",
      author: "Olajide A. Hammed"
    },

    manifest: {
      name: "Radio Lagos — 104.7 FM",
      short_name: "Radio Lagos",
      display: "standalone",
      description: "A simply readable Hacker News app."
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
