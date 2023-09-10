<template>
  <header />
  <div class="mx-14 mt-10">
    <section class="image-wrapper">
      <div class="left-side-wrapper">
        <img src="../assets/page-2-images/02.png" alt="Nimona" class="w-96" />
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
  </div>
  <section>
    <div class="gradient-bg">
      <div class="flex items-center">
        <img src="../assets/page-2-images/prop-logo.png" alt="prop-logo-netflix" class="h-10" />
        <div class="text-base text-white font-semibold ml-1">Watch all you want.</div>
      </div>
      <button
        class="bg-[#f40612] text-white justify-end rounded-sm px-6 py-1.5 text-[13px] border-none outline-none cursor-pointer"
      >
        JOIN NOW
      </button>
    </div>
  </section>
  <section class="mb-7 mt-20 mx-14">
    <div class="gradient-line"></div>
    <div class="text-gray-400 text-base my-6 text-center">
      Chloë Grace Moretz and Riz Ahmed lend their voices to this epic comedy adventure based on the bestselling graphic novel.
    </div>
    <div class="gradient-line"></div>
  </section>
  <section class="mx-14 mt-20 mb-3 flex justify-start">
    <div>
      <h2 class="text-white text-3xl inline-block">Videos</h2>
      <h2 class="text-gray-400 text-xl border-l border-solid border-white ml-2 pl-4 inline-block">Nimona</h2>
    </div>
  </section>
  <div class="text-white text-base mx-14 relative">
    <ul class="my-4 mx-0 flex justify-center">
      <movieCard :image="image03" />
      <movieCard :image="image04" />
      <movieCard :image="image05" />
      <movieCard :image="image06" />
    </ul>
  </div>
  <section class="mx-14 py-6 leading-5">
    <div class="text-white text-3xl mt-6 mb-4">
      <h2 class="leading-8">More Details</h2>
    </div>
    <div class="text-white items-center">
      <div class="flex justify-between my-1">
        <div class="basis-[25%] leading-6">
          <div class="text-gray-400 mb-1 leading-6">Watch offline</div>
          <div>
            <span>Downloads only available on ad-free plans.</span>
          </div>
        </div>
        <div class="basis-[25%] leading-6">
          <div class="text-gray-400 mb-1 leading-6">Genres</div>
          <div>
            <span class="link-items"> Family Movies, </span>
            <span class="link-items"> Kids & Family Movies, </span>
            <span class="link-items"> Family Adventure Movies, </span>
            <span class="link-items"> LGBTQ+ Movies, </span>
            <span class="link-items"> Comedy Movies, </span>
            <span class="link-items"> Animated Movies </span>
          </div>
        </div>
        <div class="basis-[25%] leading-6">
          <div class="text-gray-400 mb-1 leading-6">This movie is...</div>
          <div>
            <span>Heartfelt</span>
          </div>
        </div>
        <div class="basis-[25%] leading-6">
          <div class="text-gray-400 mb-1 leading-6">Audio</div>
          <div>
            <span
              >German - Audio Description, German, English - Audio Description, English [Original], French - Audio Description,
              French, Dutch, Turkish, Ukrainian
            </span>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <div class="basis-[25%]">
          <div class="text-gray-400 mb-1 leading-6">Subtitles</div>
          <div class="basis-[25%] leading-6">German, German, English, French, French, Russian, Turkish, Ukrainian</div>
        </div>
      </div>
      <div class="mt-4">
        <div class="text-gray-400 mb-1 leading-6">Cast</div>
        <div class="flex justify-between">
          <div class="basis-[25%] leading-6">
            Chloë Grace Moretz <br />
            Lorraine Toussaint <br />
            Julio Torres
          </div>
          <div class="basis-[25%] leading-6">
            Riz Ahmed <br />
            Beck Bennett <br />
            Sarah Sherman
          </div>
          <div class="basis-[25%] leading-6">
            Eugene Lee Yang <br />
            Indya Moore
          </div>
          <div class="basis-[25%] leading-6">
            Frances Conroy <br />
            RuPaul Charles
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="text-white text-base mx-14 mt-12 relative">
    <div>
      <h2 class="text-white text-3xl">More Like This</h2>
    </div>
    <div class="my-4 mx-0 flex w-full justify-center">
      <movieCard :image="image07" />
      <movieCard :image="image08" />
      <movieCard :image="image09" />
      <movieCard :image="image10" />
    </div>
  </section>
  <section class="mx-14 py-6 leading-5">
    <div class="text-white text-3xl mt-6 mb-4">
      <h2 class="leading-8">Coming Soon</h2>
    </div>
    <div class="text-white items-center">
      <div class="flex justify-between my-1">
        <div class="basis-[25%] mr-12">
          <div class="link-items text-white mb-1">Sonic Prime</div>
          <div class="text-gray-400 text-sm">
            When an explosive battle with Dr. Eggman shatters the universe, Sonic races through parallel dimensions to reconnect
            with his friends and save the world.
          </div>
        </div>
        <div class="basis-[25%] mr-12">
          <div class="link-items text-white mb-1">The Witcher</div>
          <div class="text-gray-400 text-sm">
            Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people
            often prove more wicked than beasts.
          </div>
        </div>
        <div class="basis-[25%] mr-12">
          <div class="link-items text-white mb-1">The Lincoln Lawyer</div>
          <div class="text-gray-400 text-sm">
            Sidelined after an accident, hotshot Los Angeles lawyer Mickey Haller restarts his career — and his trademark Lincoln
            — when he takes on a murder case.
          </div>
        </div>
        <div class="basis-[25%] mr-12">
          <div class="link-items text-white mb-1">Nineteen to Twenty</div>
          <div class="text-gray-400 text-sm">
            A group of young adults share their last week of teens and first week of twenties together — experiencing freedom and
            all the “firsts” of adulthood.
          </div>
        </div>
      </div>
    </div>
    <div class="text-white items-center mt-3">
      <div class="flex justify-between my-1">
        <div class="basis-[25%] mr-12">
          <div class="link-items text-white mb-1">Bird Box Barcelona</div>
          <div class="text-gray-400 text-sm">
            As a mysterious force decimates humanity, a sinister new threat grows in this Barcelona-set film that expands the
            story of the blockbuster "Bird Box."
          </div>
        </div>
        <div class="basis-[25%] mr-12">
          <div class="link-items text-white mb-1">Survival of the Thickest</div>
          <div class="text-gray-400 text-sm">
            After a bad breakup, passionate stylist Mavis Beaumont seizes the opportunity to start over in life and love while
            finding happiness on her own terms.
          </div>
        </div>
        <div class="basis-[25%] mr-12">
          <div class="link-items text-white mb-1">Record of Ragnarok</div>
          <div class="text-gray-400 text-sm">
            Before eradicating humankind from the world, the gods give them one last chance to prove themselves worthy of
            survival. Let the Ragnarok battles begin!
          </div>
        </div>
        <div class="basis-[25%] mr-12">
          <div class="link-items text-white mb-1">War Sailor</div>
          <div class="text-gray-400 text-sm">
            When WWII erupts, two sailors on a Norwegian merchant ship face brutal conditions as they fight to survive a conflict
            they were never asked to join.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mx-14 py-6 flex">
    <div class="text-gray-400 basis-[25%]">
      <span> Go behind the scenes of Netflix TV shows and movies, see what's coming soon and watch bonus videos on </span>
      <span class="link-items"> Tudum.com </span>
      <span> . </span>
    </div>
  </section>
  <footer class="mx-14 mt-20 pb-5">
    <div class="text-gray-500 pt-8">
      <p class="link-items mb-8">Questions? Contact us.</p>
      <ul class="text-[13px]">
        <li class="link-items footer-items">FAQ</li>
        <footerSubtitle title="Cancel Membership" />
        <footerSubtitle title="Help Center" />
        <footerSubtitle title="Account" />
        <footerSubtitle title="Media Center" />
        <footerSubtitle title="Investor Relations" />
        <footerSubtitle title="Jobs" />
        <footerSubtitle title="Netflix Shop" />
        <footerSubtitle title="Redeem Gift Cards" />
        <footerSubtitle title="Buy Gift Cards" />
        <footerSubtitle title="Ways to Watch" />
        <footerSubtitle title="Terms of Use" />
        <footerSubtitle title="Privacy" />
        <footerSubtitle title="Cookie Preferences" />
        <footerSubtitle title="Impressum" />
        <footerSubtitle title="Contact Us" />
        <footerSubtitle title="Speed Test" />
        <footerSubtitle title="Legal Guarantee" />
        <footerSubtitle title="Legal Notices" />
        <footerSubtitle title="Only on Netflix" />
      </ul>
    </div>
    <div>
      <div>
        <select
          class="mt-6 bg-black text-sm text-gray-500 py-3 px-10 cursor-pointer border-solid border-[1px] border-gray-500"
          name="English"
        >
          <option value="english">English</option>
          <option value="deutsch">Deutsch</option>
        </select>
      </div>
      <p class="text-gray-500 text-[13px] mt-6 mb-3">Netflix Germany</p>
    </div>
  </footer>
</template>

<script setup>
import header from "../components/page-2/Header.vue";
import footerSubtitle from "../components/page-2/FooterSubtitle.vue";
import movieCard from "../components/page-2/MovieCard.vue";
import image03 from "../assets/page-2-images/03.jpg";
import image04 from "../assets/page-2-images/04.jpg";
import image05 from "../assets/page-2-images/05.jpg";
import image06 from "../assets/page-2-images/06.jpg";
import image07 from "../assets/page-2-images/07.jpg";
import image08 from "../assets/page-2-images/08.jpg";
import image09 from "../assets/page-2-images/09.jpg";
import image10 from "../assets/page-2-images/10.jpg";
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
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
    url(../assets/page-2-images/01.jpg);
  background-size: cover;
}

.gradient-bg {
  @apply mx-14 flex relative items-center py-2 px-6 mb-8 justify-between;
  margin-top: -120px;
  background-image: linear-gradient(90deg, #333 5%, #181818 95%);
  box-shadow: 8px 5px 16px 0 rgba(0, 0, 0, 0.37);
}

.gradient-line {
  background: linear-gradient(90deg, #777 0, rgba(51, 51, 51, 0.5) 50%, #777);
  height: 1px;
  margin-bottom: 25px;
}

.horizontal-item-container {
  @apply mr-3;
}

.movies-like-this {
  @apply w-[300px] h-[200px] flex-1 object-cover mr-3 cursor-pointer transition-all duration-300 ease-in-out hover:scale-90;
}

.link-items {
  @apply hover:underline cursor-pointer;
}

.footer-items {
  @apply box-border inline-block mb-4 min-w-[100px] align-top w-[25%];
}
</style>
