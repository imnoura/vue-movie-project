<template>
  <section class="image-wrapper">
    <div class="left-side-wrapper">
      <img src="../../assets/page-2-images/02.png" alt="Nimona" class="w-96" />
      <div class="pt-16">
        <h1 class="text-2xl my-2">Nimona</h1>
        <div class="text-gray-400 text-sm mt-4">
          <span>2023</span>
          <span> | </span>
          <span>6</span>
          <span> | </span>
          <span>1h 42m</span>
          <span> | </span>
          <span class="cursor-pointer">Kids</span>
        </div>
        <div class="my-1 text-base items-start flex flex-col justify-evenly w-[450px]">
          <span class="mt-4 mb-2"
            >A knight framed for a tragic crime teams with a scrappy, shape-shifting teen to prove his innocence. But what if
            she's the monster he's sworn to destroy?
          </span>
          <div>
            <span class="text-gray-400">Starring:</span>
            <span class="text-white text">Chloë Grace Moretz, Riz Ahmed, Eugene Lee Yang</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.left-side-wrapper {
  @apply text-white flex flex-col items-start h-full justify-center;
  background: linear-gradient(
    90deg,
    #181818 10%,
    hsla(0, 0%, 9%, 0.98) 20%,
    hsla(0, 0%, 9%, 0.97) 25%,
    hsla(0, 0%, 9%, 0.95) 35%,
    hsla(0, 0%, 9%, 0.94) 40%,
    hsla(0, 0%, 9%, 0.92) 45%,
    hsla(0, 0%, 9%, 0.9) 50%,
    hsla(0, 0%, 9%, 0.87) 55%,
    hsla(0, 0%, 9%, 0.82) 60%,
    hsla(0, 0%, 9%, 0.75) 65%,
    hsla(0, 0%, 9%, 0.63) 70%,
    hsla(0, 0%, 9%, 0.45) 75%,
    hsla(0, 0%, 9%, 0.27) 80%,
    hsla(0, 0%, 9%, 0.15) 85%,
    hsla(0, 0%, 9%, 0.08) 90%,
    hsla(0, 0%, 9%, 0.03) 95%,
    hsla(0, 0%, 9%, 0)
  );
}

.image-wrapper {
  @apply h-screen flex items-center justify-start;
  background: linear-gradient(
      0deg,
      #181818 0,
      hsla(0, 0%, 9%, 0.987) 1.62%,
      hsla(0, 0%, 9%, 0.951) 3.1%,
      hsla(0, 0%, 9%, 0.896) 4.5%,
      hsla(0, 0%, 9%, 0.825) 5.8%,
      hsla(0, 0%, 9%, 0.741) 7.06%,
      hsla(0, 0%, 9%, 0.648) 8.24%,
      hsla(0, 0%, 9%, 0.55) 9.42%,
      hsla(0, 0%, 9%, 0.45) 10.58%,
      hsla(0, 0%, 9%, 0.352) 11.76%,
      hsla(0, 0%, 9%, 0.259) 12.94%,
      hsla(0, 0%, 9%, 0.175) 14.2%,
      hsla(0, 0%, 9%, 0.104) 15.5%,
      hsla(0, 0%, 9%, 0.049) 16.9%,
      hsla(0, 0%, 9%, 0.013) 18.38%,
      hsla(0, 0%, 9%, 0) 20%
    ),
    url(../../assets/page-2-images/01.jpg);
  background-size: cover;
}
</style>
