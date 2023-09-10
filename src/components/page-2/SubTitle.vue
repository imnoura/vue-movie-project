<template>
  <div class="text-white text-3xl mt-6 mb-4 pb-4">
    <h2 class="leading-8">{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
