<template>
    <div>
        <!-- <form> -->
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="name" required>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="email" required>
            </div>
            <button type="submit" @click="createUser">Create User</button>
        <!-- </form> -->
    </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
// the firestore instance
// import db from '../firebase/init.js'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
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
  measurementId: "G-8VHJH6LDSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default {
//   created() {
//     this.createUser()
//   },
  data () {
      return {
          
      }
  },
  methods: {
    async createUser() {
      // 'users' collection reference
      const colRef = collection(db, 'users')
      // data to send
      const dataObj = {
        // firstName: "maria",
        // email: "hello@gmail.com",
        firstName: this.name,
        email: this.email,
      }

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj)

      // access auto-generated ID with '.id'
      console.log('Document was created with ID:', docRef.id)
    }
  },
  // created() {
  //   this.createUser()
  // },
}
</script>