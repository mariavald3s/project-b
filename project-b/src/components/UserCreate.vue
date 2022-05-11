<template>
    <div>
        <form>
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="name" required>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="email" required>
            </div>
            <button type="submit" @click="createUser">Create User</button>
        </form>
    </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
// the firestore instance
import db from '../firebase/init.js'

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
        firstName: this.name,
        email: this.email,
      }

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj)

      // access auto-generated ID with '.id'
      console.log('Document was created with ID:', docRef.id)
    }
  }
}
</script>