<template>
  <div class="bg-[#0B0C10] text-[#C4C4C4] flex justify-between p-3">
      
    <div class="text-lg text-[#C4C4C4] flex flex-col pt-3">
      <RouterLink to="/" class="px-2">Home</RouterLink>
      <RouterLink to="/products" class="px-2">Products</RouterLink>
      <RouterLink to="/about-us" class="px-2">About Us</RouterLink>
      <RouterLink to="/contact-us" class="px-2">Contact Us</RouterLink>
      <RouterLink to="/cart" class="px-2 justify-self-end">Cart</RouterLink>
    </div>
    <div class="text-right">
      <p class="text-[#FC66A5] font-bold">Operating Hours</p>
      <p>
        Weekdays 18:00 - 22:00 <br />
        Weekends 9:00 - 22:00
      </p>
      <p class="text-[#FC66A5] font-bold">Our Contacts</p>
      <p>
        ouremail@email.ca <br />
        (123) 456-7890
      </p>
      <div class="flex justify-end p-1">
          <p class="text-[#FC66A5] font-bold">Check us out on social media!</p>
          <div class="flex px-2">
            <a href="https://instagram.com"><img src="../assets/instagram-free-icon-font.png" alt="instagram" class="px-1"></a>
              <a href="https://twitter.com"><img src="../assets/twitter-free-icon-font.png" alt="twitter" class="px-1"></a>
              <a href="https://youtube.com"><img src="../assets/youtube-free-icon-font.png" alt="youtube" class="pl-1"></a>
              
          </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
