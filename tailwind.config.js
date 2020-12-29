/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: ".dark",
    extend: {
      colors: {
        primary: defaultTheme.colors.teal,
        dark: "#222222",
      },
      fontFamily: {
        // sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    backgroundColor: [
      "hover",
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
    ],
    borderColor: ["hover", "dark", "dark-focus", "dark-focus-within"],
    textColor: ["hover", "dark", "dark-hover", "dark-active"],
  },
  plugins: [require("tailwindcss-dark-mode")(), require("@tailwindcss/ui")],
}
