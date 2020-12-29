export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "storybook-nuxt-tailwind",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode/
    "@nuxtjs/color-mode",
    // https://github.com/nuxt-community/fontawesome-module#readme
    "@nuxtjs/fontawesome",
    // https://github.com/nuxt-community/google-fonts-module
    "@nuxtjs/google-fonts",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // https://storybook.nuxtjs.org
  storybook: {
    addons: [
      "@storybook/addon-docs",
      "@storybook/addon-notes",
      "@storybook/addon-controls",
      "storybook-dark-mode",
    ],
    parameters: {
      darkMode: {
        stylePreview: true,
      },
    },
  },

  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    classSuffix: "",
  },

  fontawesome: {
    component: "fa",
    suffix: false,
    icons: {
      solid: ["faLightbulb"],
    },
  },

  googleFonts: {
    families: {
      // Inter: {
      //   wght: [300, 500, 700],
      //   bold: [700],
      // },
      "Fira Code": true,
    },
  },
}
