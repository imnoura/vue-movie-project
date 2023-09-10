<template>
  <Header />
  <div class="mx-14 mt-10">
    <movieBackground />
  </div>
  <navbar />
  <navDescription />
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
    <SubTitle title="More Details" />

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
    <SubTitle title="More Like This" />

    <div class="my-4 mx-0 flex w-full justify-center">
      <movieCard :image="image07" />
      <movieCard :image="image08" />
      <movieCard :image="image09" />
      <movieCard :image="image10" />
    </div>
  </section>
  <section class="mx-14 py-6 leading-5">
    <SubTitle title="Coming soon" />
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
import Header from "../components/page-2/Header.vue";
import movieBackground from "../components/page-2/MovieBackground.vue";
import navbar from "../components/page-2/Navbar.vue";
import navDescription from "../components/page-2/NavDescription.vue";
import movieCard from "../components/page-2/MovieCard.vue";
import subTitle from "../components/page-2/SubTitle.vue";
import footerSubtitle from "../components/page-2/FooterSubtitle.vue";
import image03 from "../assets/page-2-images/03.jpg";
import image04 from "../assets/page-2-images/04.jpg";
import image05 from "../assets/page-2-images/05.jpg";
import image06 from "../assets/page-2-images/06.jpg";
import image07 from "../assets/page-2-images/07.jpg";
import image08 from "../assets/page-2-images/08.jpg";
import image09 from "../assets/page-2-images/09.jpg";
import image10 from "../assets/page-2-images/10.jpg";
import SubTitle from "../components/page-2/SubTitle.vue";
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
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
