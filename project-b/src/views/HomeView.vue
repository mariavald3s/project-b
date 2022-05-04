<template>
  <div
    class="bg-[#0B0C10] pt-28 pb-36 px-16 text-[#C4C4C4] flex justify-evenly items-center"
  >
    <div
      class="border-8 border-[#FC66A5] rounded-lg box-border pl-3 pr-28 py-5 items-center"
    >
      <p class="py-2 pl-2 pr-28 text-[#FC66A5] font-bold text-2xl">
        Company Name
      </p>
      <p class="px-4 pb-2">Slogan Here</p>
    </div>
    <p class="p-28 bg-slate-700">Image goes here</p>
  </div>
  <div class="bg-[#202833] p-6">
    <RouterLink to="/products" class="">
      <div class="p-6 bg-[#C4C4C4] rounded-lg hover:bg-[#a7a6a6]">
        <p class="text-center text-xl font-bold text-[#202833] pb-6">
          Our Products
        </p>
        <ProductCards />
      </div>
    </RouterLink>
  </div>
  <div class="bg-[#202833] p-6">
    <RouterLink to="/contact-us" class="">
      <div class="py-6 px-12 bg-[#C4C4C4] rounded-lg flex justify-between hover:bg-[#a7a6a6]">
        <img src="" alt="photo here" class="self-center">
        <div class="">
        <p class="text-xl font-bold text-[#202833] pb-6">
          Contact Us
        </p>
        <p class="">insert descript here</p>
        </div>
      </div>
    </RouterLink>
  </div>
  <div class="bg-[#202833] p-6">
    <RouterLink to="/about-us" class="">
      <div class="py-6 px-12 bg-[#C4C4C4] rounded-lg flex justify-between hover:bg-[#a7a6a6]">
        <div>
        <p class="text-xl font-bold text-[#202833] pb-6">
          About Us
        </p>
        <p>insert descript here</p>
        </div>
        <img src="" alt="photo here" class="self-center">
      </div>
    </RouterLink>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import ProductCards from "../components/ProductCards.vue";

export default {
  components: { Footer, ProductCards },
};
</script>
