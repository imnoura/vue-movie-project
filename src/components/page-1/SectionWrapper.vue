<template>
  <div
    class="h-[92vh] flex flex-col items-center justify-center"
    :style="{
      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515), url(${isTopImage ? f1 : f2})`,
      backgroundSize: 'cover',
    }"
  >
    <h1 class="font-poppins sm:w-[500px] text-center font-bold text-white text-3xl sm:text-5xl">{{ text }}</h1>
    <p class="font-poppins text-center text-white text-xl sm:text-2xl mt-[25px]">
      {{ subText }}
    </p>
    <Button :title="buttonText" :isLarge="true" />
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import f1 from "../../assets/page-1-images/f-1.jpg";
import f2 from "../../assets/page-1-images/f-2.jpg";

defineProps({
  bgImage: String,
  text: String,
  subText: String,
  buttonText: String,
  isTopImage: Boolean,
});
</script>
