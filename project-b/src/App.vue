<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="p-6 bg-[#0B0C10] text-[#C4C4C4] font-[32px] font-[600] flex justify-between">
        <div>
        <RouterLink to="/" class="px-2 hover:text-[#e4e4e4]">Home</RouterLink>
        <RouterLink to="/products" class="px-2 hover:text-[#e4e4e4]">Products</RouterLink>
        <RouterLink to="/about-us" class="px-2 hover:text-[#e4e4e4]">About Us</RouterLink>
        <RouterLink to="/contact-us" class="px-2 hover:text-[#e4e4e4]">Contact Us</RouterLink>
        </div>
        <div class="flex">
        <RouterLink to="/cart" class="px-2 justify-self-end">Cart</RouterLink>
        <RouterLink to="/" class="px-2 justify-self-end"><img src="" alt="logo"></RouterLink>
        </div>
      </nav>
  </header>

  <RouterView />
</template>
