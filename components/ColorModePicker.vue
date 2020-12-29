<template>
  <div>
    <label for="colorMode"><fa icon="lightbulb" class="mr-1" /></label>
    <select
      id="colorMode"
      v-model="$colorMode.preference"
      name="colorMode"
      class="border w-24 h-8 dark:bg-dark dark:border-gray-700"
    >
      <option v-for="color of colors" :key="color">
        {{ color }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["system", "light", "dark"],
    }
  },
}
</script>
