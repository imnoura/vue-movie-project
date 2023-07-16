<template>
  <div class="w-[50px] h-full bg-white dark:bg-black fixed top-0 items-center flex-col pt-[60px] flex">
    <i class="left-menu-icon fas fa-search"></i>
    <i class="left-menu-icon fas fa-home"></i>
    <i class="left-menu-icon fas fa-users"></i>
    <i class="left-menu-icon fas fa-bookmark"></i>
    <i class="left-menu-icon fas fa-tv"></i>
    <i class="left-menu-icon fas fa-hourglass-start"></i>
    <i class="left-menu-icon fas fa-shopping-cart"></i>
  </div>
</template>

<script setup></script>

<style scoped>
.left-menu-icon {
  @apply text-black dark:text-white text-xl mb-10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-75;
}
</style>
