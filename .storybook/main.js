const { nuxifyStorybook } = require("../.nuxt-storybook/storybook/main.js")

module.exports = nuxifyStorybook({
  webpackFinal(config, options) {
    // extend config here
    return config
  },
  stories: ["~/components/**/*.stories.mdx"],
  addons: [
    // Add your addons here
  ],
})
