<template>
  <div class="text-[#C4C4C4] bg-[#202833] rounded-lg overflow-hidden">
    <img src="" alt="product image" />
    <p class="p-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia
      quam ac nisl lobortis auctor. Suspendisse vulputate ligula eu mi pulvinar
      laoreet. Praesent ante diam, interdum id volutpat vel, porta ac nunc.
      Vestibulum ut luctus enim, ut venenatis tellus. Donec vitae pretium velit.
      In auctor, velit nec condimentum ullamcorper, velit quam malesuada tortor,
      sit amet accumsan nulla mauris vitae tortor. Sed sed elit volutpat quam
      tempus ornare. Integer quis magna risus. In porta nisl ante, feugiat
      rutrum nibh pharetra at. Nam posuere suscipit feugiat. Mauris condimentum
      suscipit volutpat. Donec sem sem, rutrum eu dictum at, consequat ac odio.
      Nulla non augue interdum, efficitur tortor sit amet, venenatis felis.
      Pellentesque id porttitor orci. Nam a mi non sem convallis lobortis et
      imperdiet dolor. Nullam bibendum odio volutpat orci placerat elementum
      quis sed elit. Fusce ut volutpat erat, mollis lobortis quam. In finibus
      ante sit amet odio lobortis ultricies. Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Nam malesuada
      sit amet odio at eleifend. Sed vitae metus quis neque consequat facilisis.
      Pellentesque ex risus, iaculis ac mi ut, luctus finibus mauris.
      Pellentesque nec blandit massa, eget tristique libero. Proin egestas
      bibendum sagittis. Phasellus pulvinar volutpat lectus, sit amet imperdiet
      leo interdum at. Vivamus nec imperdiet lectus.
    </p>
  </div>
</template>

// <script>
// // the firestore instance
// // import db from '../firebase/init.js'
// // import {  } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAIanrnnerrizslf9zSDjkxUYwbDnTDTa0",
//   authDomain: "project-b-a3f82.firebaseapp.com",
//   databaseURL: "https://project-b-a3f82-default-rtdb.firebaseio.com",
//   projectId: "project-b-a3f82",
//   storageBucket: "project-b-a3f82.appspot.com",
//   messagingSenderId: "550718394524",
//   appId: "1:550718394524:web:8923b556a0bac089e41d59",
//   measurementId: "G-8VHJH6LDSX",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default {
//   data() {
//     return {
//       products: ["skatingCard"],

//     };
//   },
//   async mounted() {
//     for (let index = 0; index < this.products.length; index++) {
//       // const cityRef = db.collection("products").doc(`${this.products[index]}`);
//       // const doc = await cityRef.get();
//       // if (!doc.exists) {
//       //   console.log("No such document!");
//       // } else {
//       //   console.log("Document data:", doc.data());
//       // }
//       const querySnapshot = await getDocs(collection(db, "products"));
//       querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//       });
//     }
//   },
// };
</script>
