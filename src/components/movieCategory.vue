<template>
  <div>
    <h1 class="font-poppins text-black dark:text-white font-semibold text-2xl mb-2 mt-10">
      {{ title }}
    </h1>
  </div>
</template>
<script setup>
defineProps({ title: String });
</script>
