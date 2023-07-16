<template>
  <Header />
  <div class="flex">
    <Sidebar class="hidden sm:block" />

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
import movieCategory from "../components/movieCategory.vue";
import movieCard from "../components/movieCard.vue";
import image01 from "../assets/images/01.jpg";
import image02 from "../assets/images/02.jpg";
import image03 from "../assets/images/03.jpg";
import image04 from "../assets/images/04.jpg";
import image05 from "../assets/images/05.jpg";
import image06 from "../assets/images/06.jpg";
import image07 from "../assets/images/07.jpg";
import image08 from "../assets/images/08.jpg";
import image09 from "../assets/images/09.jpg";
import image10 from "../assets/images/10.jpg";
import image11 from "../assets/images/11.jpg";
import image12 from "../assets/images/12.jpg";
import SectionWrapper from "../components/SectionWrapper.vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<style scoped>
.movie-list-wrapper {
  @apply relative overflow-hidden -mb-5;
}

@media screen and (max-width: 600px) {
  .sidebar {
    display: none;
  }
  .sidebar.active {
    display: none;
  }
  .menu-list {
    display: none;
  }
  .navbar-container {
    padding: 0 15px;
  }
  .profile-picture {
    display: none;
  }
  .profile-text {
    display: none;
  }
  .fa-solid.fa-caret-down {
    display: none;
  }
  .container {
    min-height: calc(450vh - 50px);
  }
  .content-container {
    margin-left: 0px;
  }
  .featured-content {
    height: 50vh;
  }
  .featured-content:nth-last-child(2) {
    height: 50vh;
  }
  .featured-title {
    width: 300px;
    line-height: 1.2;
    font-size: 25px;
    text-align: center;
  }
  .featured-desc {
    font-size: 20px;
  }
  .featured-button {
    font-size: 15px;
    padding: 12px 20px;
  }
  .movie-list-container {
    padding: 0 15px;
  }
  .movie-list-title {
    font-size: 22px;
    margin-bottom: 0px;
  }
  .movie-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 130vh;
  }
  .movie-list-item {
    margin-right: 0px;
  }
  .movie-list-item-img {
    margin: 10px;
    width: 360px;
    height: 200px;
    border-radius: 15px;
  }
}
</style>
