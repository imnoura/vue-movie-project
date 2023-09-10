<template>
  <div class="basis-[25%] mr-12">
    <div class="link-items text-white mb-1">{{ title }}</div>
    <div class="text-gray-400 text-sm">
      {{ subtitle }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
});
</script>
<style scoped>
.link-items {
  @apply hover:underline cursor-pointer;
}
</style>
