<template>
  <button :class="isLarge ? 'large-button' : 'small-button'">{{ title }}</button>
</template>

<script setup>
defineProps({
  isLarge: Boolean,
  title: String,
});
</script>

<style scoped>
.small-button {
  @apply px-2.5 py-2 bg-[#c70913] text-white cursor-pointer rounded-md outline-none border-none text-sm font-medium absolute bottom-[18%] left-6 opacity-0 transition-all duration-500 ease-in-out hover:scale-75;
}

.large-button {
  @apply bg-[#f40612] text-white text-sm sm:text-xl rounded-xl px-4 sm:px-8 py-2 sm:py-4 border-none outline-none mt-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-75;
}
</style>
