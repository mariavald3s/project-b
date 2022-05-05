<template>
  <div class="bg-[#0B0C10] p-2">
    <div class="mt-2 mb-6 mx-28 rounded-lg border-8 border-[#FC66A5] p-3">
      <p class="py-2 text-center text-[#FC66A5] font-bold text-2xl">
        Contact Us
      </p>
    </div>
    <p class="text-center text-[#C4C4C4] pb-4 pt-2">insert descript here</p>
  </div>
  <div class="bg-[#0B0C10] p-6 flex justify-center">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160599.78805852387!2d-114.227916847512!3d51.02775550737476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1651778949543!5m2!1sen!2sca"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: { Footer },
};
</script>
