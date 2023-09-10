<template>
  <li class="link-items footer-items">{{ title }}</li>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
.footer-items {
  @apply box-border inline-block mb-4 min-w-[100px] align-top w-[25%];
}
</style>
