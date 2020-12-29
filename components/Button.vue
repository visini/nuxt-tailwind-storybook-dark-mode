<template>
  <button class="base" :class="buttonClass">
    <slot name="text">{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    square: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "Button",
    },
  },
  computed: {
    buttonClass() {
      const c = []
      // Square
      if (!this.square) {
        c.push("rounded-md")
      }
      // Variant
      if (this.variant === "primary") {
        c.push("bg-primary-500 hover:bg-primary-600")
        c.push("dark:bg-primary-900 dark-hover:bg-primary-800")
      } else if (this.variant === "secondary") {
        c.push("bg-gray-500 hover:bg-gray-600")
        c.push("dark:bg-gray-700 dark-hover:bg-gray-600")
      }
      return c.join(" ")
    },
  },
}
</script>

<style lang="postcss" scoped>
.base {
  @apply font-bold py-2 px-4 text-white;
}
</style>
