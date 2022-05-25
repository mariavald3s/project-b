<template>
  <div
    class="text-[#C4C4C4] bg-[#202833] rounded-lg overflow-hidden hover:bg-[#39485c]"
  >
   <img :src="image" alt="product image" class="h-full w-full"/>
    <p class="p-2">{{name}}</p>
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
};
</script>
