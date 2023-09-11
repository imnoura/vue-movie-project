<template>
  <Header />
  <div class="flex">
    <Sidebar class="hidden sm:flex" />

    <div class="bg-white dark:bg-black w-full sm:ml-[50px]">
      <SectionWrapper
        text="Unlimited movies, TV shows and more."
        sub-text="Watch anywhere. Cancel anytime."
        button-text="GET STARTED"
        :is-top-image="true"
      />

      <div class="px-5 py-0">
        <movieCategory title="NEW RELEASE" />
        <div class="movie-list-wrapper">
          <div class="sm:flex sm:flex-row flex flex-col items-center sm:h-[250px]">
            <movieCard :image="image01" />
            <movieCard :image="image02" />
            <movieCard :image="image03" />
            <movieCard :image="image04" />
          </div>
        </div>
      </div>

      <div class="px-5 py-0 mb-5">
        <movieCategory title="TRENDING NOW" />
        <div class="movie-list-wrapper">
          <div class="sm:flex sm:flex-row flex flex-col items-center sm:h-[250px]">
            <movieCard :image="image05" />
            <movieCard :image="image06" />
            <movieCard :image="image07" />
            <movieCard :image="image08" />
          </div>
        </div>
      </div>

      <SectionWrapper
        text="Download your shows to watch offline."
        sub-text="Save your favourites easily to watch"
        button-text="BINGE WATCH"
        :is-top-image="false"
      />

      <div class="px-5 pb-12 pt-6">
        <movieCategory title="CONTINUE WATCHING" />
        <div class="movie-list-wrapper">
          <div class="sm:flex sm:flex-row flex flex-col items-center sm:h-[250px]">
            <movieCard :image="image09" />
            <movieCard :image="image10" />
            <movieCard :image="image11" />
            <movieCard :image="image12" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import movieCategory from "../components/page-1/movieCategory.vue";
import movieCard from "../components/page-1/movieCard.vue";
import image01 from "../assets/page-1-images/01.jpg";
import image02 from "../assets/page-1-images/02.jpg";
import image03 from "../assets/page-1-images/03.jpg";
import image04 from "../assets/page-1-images/04.jpg";
import image05 from "../assets/page-1-images/05.jpg";
import image06 from "../assets/page-1-images/06.jpg";
import image07 from "../assets/page-1-images/07.jpg";
import image08 from "../assets/page-1-images/08.jpg";
import image09 from "../assets/page-1-images/09.jpg";
import image10 from "../assets/page-1-images/10.jpg";
import image11 from "../assets/page-1-images/11.jpg";
import image12 from "../assets/page-1-images/12.jpg";
import SectionWrapper from "../components/page-1/SectionWrapper.vue";
import Header from "../components/page-1/Header.vue";
import Sidebar from "../components/page-1/Sidebar.vue";

function checkTheme() {
  const item = localStorage.getItem("theme");
  if (item) {
    if (item == "dark") {
      document.body.className = "dark";
    }
  } else {
    localStorage.setItem("theme", "dark");
    document.body.className = "dark";
  }
}

checkTheme();
</script>

<style scoped>
.movie-list-wrapper {
  @apply relative overflow-hidden -mb-5;
}
</style>
