<template>
  <div
    @click="showDescript"
    class="text-[#0B0C10] bg-[#C4C4C4] rounded-lg overflow-hidden hover:bg-[#a7a6a6] m-3"
  >
    <img :src="image" alt="product image"/>
    <p class="p-2 flex justify-center font-bold">
      {{ name }}
    </p>
    <div v-if="clicked" class="px-5 pb-3 flex justify-center flex-col">
      <p>Insert descript here</p>
      <button class="m-3 p-2 bg-[#FC66A5] rounded-full">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "image"],
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    showDescript() {
      this.clicked = !this.clicked;
    },
  },
};
</script>
