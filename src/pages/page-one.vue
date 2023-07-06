<script></script>

<template>
  <div class="w-full h-12 bg-white dark:bg-black flex justify-between items-center px-[50px] text-black">
    <div class="flex">
      <div class="grid items-center">
        <img src="../assets/images/logo.png" class="w-[100px] h-[30px] cursor-pointer" />
      </div>
      <div class="flex flex-row items-center">
        <ul class="flex list-none">
          <li class="font-bold">Home</li>
          <li>Movies</li>
          <li>Series</li>
          <li>Popular</li>
          <li>Trends</li>
        </ul>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <div class="flex justify-center items-center gap-4">
        <div>
          <img
            src="../assets/images/profile.png"
            class="w-[35px] h-[35px] rounded-xl transition-all duration-300 ease-in-out hover:scale-75 cursor-pointer"
          />
        </div>
        <div class="mr-5 text-black dark:text-white">
          <span>Profile</span>
          <i class="fa-solid fa-caret-down cursor-pointer ml-2"></i>
        </div>
      </div>
      <div class="w-[40px] h-[20px] bg-black dark:bg-white rounded-[30px] flex items-center justify-around relative">
        <i class="fa-solid fa-moon toggle-icon"></i>
        <i class="fa-solid fa-lightbulb toggle-icon"></i>
        <div class="toggle-ball"></div>
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="w-[50px] h-full bg-white dark:bg-black fixed top-0 items-center flex-col pt-[60px] flex">
      <i class="left-menu-icon fas fa-search"></i>
      <i class="left-menu-icon fas fa-home"></i>
      <i class="left-menu-icon fas fa-users"></i>
      <i class="left-menu-icon fas fa-bookmark"></i>
      <i class="left-menu-icon fas fa-tv"></i>
      <i class="left-menu-icon fas fa-hourglass-start"></i>
      <i class="left-menu-icon fas fa-shopping-cart"></i>
    </div>

    <div class="bg-white dark:bg-black w-full ml-[50px]">
      <div
        class="featured-content"
        style="
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515), url(../src/assets/images/f-1.jpg);
          background-size: cover;
        "
      >
        <h1 class="font-poppins w-[500px] text-center font-bold text-white text-5xl">Unlimited movies, TV shows and more.</h1>
        <p class="font-poppins text-center text-white text-2xl mt-[25px]">Watch anywhere. Cancel anytime.</p>
        <button
          class="bg-[#f40612] text-white text-xl rounded-xl px-8 py-4 border-none outline-none mt-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-75"
        >
          GET STARTED
        </button>
      </div>

      <div class="px-5 py-0">
        <h1 class="font-poppins text-black dark:text-white font-semibold text-2xl mb-2 mt-10">NEW RELEASES</h1>
        <div class="movie-list-wrapper">
          <div class="flex items-center h-[250px]">
            <div class="movie-list-item">
              <img src="../assets/images/01.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
            <div class="movie-list-item">
              <img src="../assets/images/02.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
            <div class="movie-list-item">
              <img src="../assets/images/03.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
            <div class="movie-list-item">
              <img src="../assets/images/04.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
          </div>
        </div>
      </div>

      <div class="px-5 py-0 mb-5">
        <h1 class="font-poppins text-black dark:text-white font-semibold text-2xl mb-2 mt-6">TRENDING NOW</h1>
        <div class="movie-list-wrapper">
          <div class="flex items-center h-[250px]">
            <div class="movie-list-item">
              <img src="../assets/images/05.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
            <div class="movie-list-item">
              <img src="../assets/images/06.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
            <div class="movie-list-item">
              <img src="../assets/images/07.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
            <div class="movie-list-item">
              <img src="../assets/images/08.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="featured-content"
        style="
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515), url(../src/assets/images/f-2.jpg);
          background-size: cover;
        "
      >
        <h1 class="font-poppins w-[500px] text-center font-bold text-white text-5xl">Download your shows to watch offline.</h1>
        <p class="font-poppins text-center text-white text-2xl mt-[25px]">Save your favourites easily to watch.</p>
        <button
          class="bg-[#f40612] text-white text-xl rounded-xl px-8 py-4 border-none outline-none mt-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-75"
        >
          BINGE WATCH <i class="fa-solid fa-angle-right btn-icon"></i>
        </button>
      </div>

      <div class="px-5 pb-12 pt-6">
        <h1 class="font-poppins text-black dark:text-white font-semibold text-2xl mb-2 mt-8">CONTINUE WATCHING</h1>
        <div class="movie-list-wrapper">
          <div class="flex items-center h-[250px]">
            <div class="movie-list-item">
              <img src="../assets/images/09.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
            <div class="movie-list-item">
              <img src="../assets/images/10.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
            <div class="movie-list-item">
              <img src="../assets/images/11.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
            <div class="movie-list-item">
              <img src="../assets/images/12.jpg" class="movie-list-item-img" />
              <span class="movie-list-item-title">Netflix Original</span>
              <p class="movie-list-item-desc">Ready to watch? Enter your email to create or restart your membership.</p>
              <button class="movie-list-item-button">Watch Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
.left-menu-icon {
  @apply text-black dark:text-white text-xl mb-10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-75;
}
.featured-content {
  @apply h-[92vh] flex flex-col items-center justify-center;
}
.movie-list-wrapper {
  @apply relative overflow-hidden -mb-5;
}
.movie-list-item {
  @apply mr-[20px] relative;
}
.movie-list-item-img {
  @apply w-[300px] h-[200px] object-cover rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-75;
}
.movie-list-item:hover .movie-list-item-img {
  transform: scale(0.9);
  opacity: 0.5;
  filter: blur(1px);
}
.movie-list-item:hover .movie-list-item-title,
.movie-list-item:hover .movie-list-item-desc,
.movie-list-item:hover .movie-list-item-button {
  opacity: 1;
}
.movie-list-item-title {
  @apply bg-white dark:bg-black px-3 py-0 text-black dark:text-white text-xl font-bold top-[15px] left-6 rounded-md cursor-pointer opacity-0 transition-all duration-500 ease-in-out hover:scale-75;
}
.movie-list-item-desc {
  @apply bg-[#151515] p-[12px] text-white text-sm absolute top-[32%] left-6 w-[250px] rounded-md cursor-pointer opacity-0 transition-all duration-500 hover:scale-75;
}
.movie-list-item-button {
  @apply px-2.5 py-2 bg-[#c70913] text-white cursor-pointer rounded-md outline-none border-none text-sm font-medium absolute bottom-[18%] left-6 opacity-0 transition-all duration-500 ease-in-out hover:scale-75;
}

.container.active {
  background-color: white;
}
.movie-list-title.active {
  color: #151515;
}
.navbar-container.active {
  background-color: #fff;
  color: #151515;
}
.toggle.active {
  background-color: #151515;
}
.toggle-ball.active {
  background-color: #fff;
  transform: translateX(-20px);
}
.sidebar.active {
  background-color: #fff;
}
.left-menu-icon.active {
  color: #151515;
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
  .logo {
    width: 80px;
    height: 25px;
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
