<template>
  <div
    class="bg-[#0B0C10] pt-28 pb-36 px-16 text-[#C4C4C4] flex justify-evenly items-center "
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
    <RouterLink
      to="/products"
      class=""
      data-aos="fade-right"
     data-aos-duration="500"
      data-aos-anchor-placement="center-bottom"
    >
      <div class="p-6 bg-[#C4C4C4] rounded-lg ">
        <p class="text-center text-xl font-bold text-[#202833] pb-6">
          Our Products
        </p>
        <div class="m-2 grid grid-cols-5 auto-cols-min items-start gap-4">
    <ProductCards v-for="product in products" :key="product.id" :name="product.name" :image="product.image" />
    </div>
      </div>
    </RouterLink>
  </div>
  <div class="bg-[#202833] p-6">
    <RouterLink
      to="/contact-us"
      class=""
      data-aos="fade-right"
     data-aos-duration="500"
      data-aos-anchor-placement="center-bottom"
    >
      <div
        class="py-6 px-12 bg-[#C4C4C4] rounded-lg flex justify-between hover:bg-[#a7a6a6]"
      >
        <img src="../assets/splashWeb/cards/softcopy/Christmas/CuteBears/OriginalScanCuteBear.jpg" alt="photo here" class="self-center rounded-md" width="400" height="400"/>
        <div class="pl-20 grid grid-cols-1 content-center">
          <p class="text-xl font-bold text-[#202833] pb-6">Contact Us</p>
          <p class="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            lacinia quam ac nisl lobortis auctor. Suspendisse vulputate ligula
            eu mi pulvinar laoreet. Praesent ante diam, interdum id volutpat
            vel, porta ac nunc. Vestibulum ut luctus enim, ut venenatis tellus.
            Donec vitae pretium velit. In auctor, velit nec condimentum
            ullamcorper, velit quam malesuada tortor, sit amet accumsan nulla
            mauris vitae tortor. Sed sed elit volutpat quam tempus ornare.
            Integer quis magna risus. In porta nisl ante, feugiat rutrum nibh
            pharetra at. Nam posuere suscipit feugiat. Mauris condimentum
            suscipit volutpat. Donec sem sem, rutrum eu dictum at, consequat ac
            odio. Nulla non augue interdum, efficitur tortor sit amet, venenatis
            felis. Pellentesque id porttitor orci. Nam a mi non sem convallis
            lobortis et imperdiet dolor. Nullam bibendum odio volutpat orci
            placerat elementum quis sed elit. Fusce ut volutpat erat, mollis
            lobortis quam. In finibus ante sit amet odio lobortis ultricies.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nam malesuada sit amet odio at eleifend. Sed
            vitae metus quis neque consequat facilisis. Pellentesque ex risus,
            iaculis ac mi ut, luctus finibus mauris. Pellentesque nec blandit
            massa, eget tristique libero. Proin egestas bibendum sagittis.
            Phasellus pulvinar volutpat lectus, sit amet imperdiet leo interdum
            at. Vivamus nec imperdiet lectus.
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
  <div class="bg-[#202833] p-6">
    <RouterLink
      to="/about-us"
      class=""
      data-aos="fade-right"
     data-aos-duration="500"
      data-aos-anchor-placement="center-bottom"
    >
      <div
        class="py-6 px-12 bg-[#C4C4C4] rounded-lg flex justify-between hover:bg-[#a7a6a6]"
      >
        <div class="pr-20 grid grid-cols-1 content-center">
          <p class="text-xl font-bold text-[#202833] pb-6">About Us</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            lacinia quam ac nisl lobortis auctor. Suspendisse vulputate ligula
            eu mi pulvinar laoreet. Praesent ante diam, interdum id volutpat
            vel, porta ac nunc. Vestibulum ut luctus enim, ut venenatis tellus.
            Donec vitae pretium velit. In auctor, velit nec condimentum
            ullamcorper, velit quam malesuada tortor, sit amet accumsan nulla
            mauris vitae tortor. Sed sed elit volutpat quam tempus ornare.
            Integer quis magna risus. In porta nisl ante, feugiat rutrum nibh
            pharetra at. Nam posuere suscipit feugiat. Mauris condimentum
            suscipit volutpat. Donec sem sem, rutrum eu dictum at, consequat ac
            odio. Nulla non augue interdum, efficitur tortor sit amet, venenatis
            felis. Pellentesque id porttitor orci. Nam a mi non sem convallis
            lobortis et imperdiet dolor. Nullam bibendum odio volutpat orci
            placerat elementum quis sed elit. Fusce ut volutpat erat, mollis
            lobortis quam. In finibus ante sit amet odio lobortis ultricies.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nam malesuada sit amet odio at eleifend. Sed
            vitae metus quis neque consequat facilisis. Pellentesque ex risus,
            iaculis ac mi ut, luctus finibus mauris. Pellentesque nec blandit
            massa, eget tristique libero. Proin egestas bibendum sagittis.
            Phasellus pulvinar volutpat lectus, sit amet imperdiet leo interdum
            at. Vivamus nec imperdiet lectus.
          </p>
        </div>
        <img src="../assets/splashWeb/cards/softcopy/Christmas/BlessingHug/OriginalScanBlessingHug.jpeg" alt="photo here" class="self-center rounded-md" width="400" height="400" />
      </div>
    </RouterLink>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import ProductCards from "../components/ProductCards.vue";
import AOS from "aos";
import "aos/dist/aos.css";


// the firestore instance
// import db from '../firebase/init.js'
// import {  } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDoc, getDocs, query, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIanrnnerrizslf9zSDjkxUYwbDnTDTa0",
  authDomain: "project-b-a3f82.firebaseapp.com",
  databaseURL: "https://project-b-a3f82-default-rtdb.firebaseio.com",
  projectId: "project-b-a3f82",
  storageBucket: "project-b-a3f82.appspot.com",
  messagingSenderId: "550718394524",
  appId: "1:550718394524:web:8923b556a0bac089e41d59",
  measurementId: "G-8VHJH6LDSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  components: { Footer, ProductCards },
  data() {
    return {
      products: [
        // {identity: "skatingCard"}
      ],
    };
  },
  async mounted() {
    AOS.init();
     
      const querySnap = await getDocs(query(collection(db, 'products')));

      querySnap.forEach((doc) => {
        this.products.push(doc.data())
      })

  },
};
</script>
