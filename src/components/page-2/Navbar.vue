<template>
  <div class="gradient-bg">
    <div class="flex items-center">
      <img src="../../assets/page-2-images/prop-logo.png" alt="prop-logo-netflix" class="h-10" />
      <div class="text-base text-white font-semibold ml-1">Watch all you want.</div>
    </div>
    <button
      class="bg-[#f40612] text-white justify-end rounded-sm px-6 py-1.5 text-[13px] border-none outline-none cursor-pointer"
    >
      JOIN NOW
    </button>
  </div>
</template>
<style scoped>
.gradient-bg {
  @apply mx-14 flex relative items-center py-2 px-6 mb-8 justify-between;
  margin-top: -120px;
  background-image: linear-gradient(90deg, #333 5%, #181818 95%);
  box-shadow: 8px 5px 16px 0 rgba(0, 0, 0, 0.37);
}
</style>
