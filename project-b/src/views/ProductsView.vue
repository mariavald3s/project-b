<template>
  <div class="bg-[#0B0C10] px-2 pb-2 pt-20">
    <div class="mt-2 mb-6 mx-28 rounded-lg border-8 border-[#FC66A5] p-3">
      <p class="py-2 text-center text-[#FC66A5] font-bold text-2xl">Products</p>
    </div>
    <p class="text-center text-[#C4C4C4] pb-4 pt-2">insert descript here</p>
  </div>
  <div class="bg-[#202833] p-3">
      <div class="m-2 grid grid-cols-3 auto-cols-min items-start">
    <ProductCards v-for="product in products" :key="product.id" :name="product.name" :image="product.image" :price="product.price" :descript="product.descript"/>
    </div>
  </div>
  <Footer />
</template>

<script>
import ProductCards from "../components/ProductCardsGrey.vue";
import Footer from "../components/Footer.vue";

// the firestore instance
// import db from '../firebase/init.js'
// import {  } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDoc, getDocs, query, doc } from "firebase/firestore";

import { getApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// Get a non-default Storage bucket
const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "gs://project-b-a3f82.appspot.com");

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
  components: { ProductCards, Footer },

  data() {
    return {
      products: [
        // {identity: "skatingCard"}
      ],
    };
  },
  async mounted() {
  //   for (let index = 0; index < this.products.length; index++) {
  //   const docRef = doc(db, "products", `${this.products[index].identity}`);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //       this.products[index].image = docSnap.data().image;
  //       this.products[index].name = docSnap.data().name;
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     console.log("No such document!" + docSnap);
  //   }
  //  }

  
      // query to get all docs in 'countries' collection
      const querySnap = await getDocs(query(collection(db, 'products')));

      // add each doc to 'countries' array
      querySnap.forEach((doc) => {
        this.products.push(doc.data())
      })

  },
};
</script>
