<template>
  <div class="w-full h-12 bg-white dark:bg-black flex justify-between items-center px-[50px] text-black">
    <div class="flex">
      <div class="grid items-center">
        <img src="../../assets/page-1-images/logo.png" class="w-[100px] h-[30px] cursor-pointer" />
      </div>
      <div class="flex flex-row items-center sm:block hidden">
        <ul class="flex list-none">
          <li class="font-bold">Home</li>
          <li><a href="https://www.netflix.com/browse/genre/34399">Movies</a></li>
          <li><a href="https://www.netflix.com/browse/genre/83">Series</a></li>
          <li><a href="https://www.netflix.com/tudum/top10/">Top 10</a></li>
        </ul>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <div class="flex justify-center items-center gap-4">
        <div>
          <img
            src="../../assets/page-1-images/profile.png"
            class="w-[35px] h-[35px] rounded-xl transition-all duration-300 ease-in-out hover:scale-75 cursor-pointer sm:block hidden"
          />
        </div>
        <div class="mr-5 text-black dark:text-white sm:block hidden">
          <span>Profile</span>
          <i class="fa-solid fa-caret-down cursor-pointer ml-2"></i>
        </div>
      </div>
      <div
        class="w-[40px] h-[20px] bg-black dark:bg-white rounded-[30px] flex items-center justify-around relative cursor-pointer"
        @click="changeTheme()"
      >
        <i class="fa-solid fa-moon toggle-icon"></i>
        <i class="fa-solid fa-lightbulb toggle-icon"></i>
        <div class="toggle-ball"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
function changeTheme() {
  document.body.classList.toggle("dark");
}
</script>

<style scoped>
li {
  @apply text-black dark:text-white m-8 cursor-pointer transition-all duration-300 ease-in-out hover:scale-75;
}
.toggle-icon {
  color: #daa520;
  font-size: 13px;
}
.toggle-ball {
  @apply w-[18px] h-[18px] bg-white dark:bg-black absolute right-[1px] rounded-[50%] cursor-pointer;
}
</style>
