<template>
  <div class="text-[#0B0C10] bg-[#C4C4C4] rounded-lg overflow-hidden">
    <img :src="image" alt="product image" />
    <p class="p-2">
      {{name}}
    </p>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "image"
  ]

};
</script>
