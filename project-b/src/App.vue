<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="p-6 bg-[#C4C4C4]">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/about-us">About Us</RouterLink>
        <RouterLink to="/contact-us">Contact Us</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>
