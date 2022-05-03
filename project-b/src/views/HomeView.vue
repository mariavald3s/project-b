<template>
  <div class="bg-[#0B0C10] pt-28 pb-36 px-16 text-[#C4C4C4] flex justify-evenly items-center">
    <div class="border-8 border-[#FC66A5] rounded-lg box-border pl-3 pr-28 py-5 items-center">
    <p class="py-2 pl-2 pr-28 text-[#FC66A5] font-bold text-2xl">Company Name</p>
    <p class="px-4 pb-2">Slogan Here</p>
    </div>
    <p class="p-28 bg-slate-700">Image goes here</p>
  </div>
  <div class="bg-[#202833]">
    <p class="p-80">Hello world</p>
  </div>
  <Footer />
</template>

<script>
import Footer  from "../components/Footer.vue";

export default {
  components: {Footer}
};
</script>
