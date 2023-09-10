<template>
  <div class="movie-list-item">
    <img class="movie-list-item-img" :src="image" />
    <span class="movie-list-item-title">Netflix Original</span>
    <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
    <Button class="btn" :is-large="false" title="Watch Now" />
  </div>
</template>

<script setup>
defineProps({
  image: String,
});
</script>

<style scoped>
.movie-list-item {
  @apply mr-[20px] relative;
}
.movie-list-item-img {
  @apply sm:w-[300px] sm:h-[200px] object-cover rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-75;
}
.movie-list-item:hover .movie-list-item-img {
  transform: scale(0.9);
  opacity: 0.5;
  filter: blur(1px);
}
.movie-list-item:hover .movie-list-item-title,
.movie-list-item:hover .movie-list-item-desc,
.movie-list-item:hover .btn {
  opacity: 1;
}
.movie-list-item-title {
  @apply bg-white dark:bg-black px-3 py-0 text-black dark:text-white text-xl font-bold top-[15px] left-6 rounded-md cursor-pointer opacity-0 transition-all duration-500 ease-in-out hover:scale-75;
}
.movie-list-item-desc {
  @apply bg-[#151515] p-[12px] text-white text-sm absolute top-[32%] left-6 w-[250px] rounded-md cursor-pointer opacity-0 transition-all duration-500 hover:scale-75;
}
</style>
