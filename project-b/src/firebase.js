import firebase from 'firebase'
import { ref, onUnmounted } from "vue"

// import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAIanrnnerrizslf9zSDjkxUYwbDnTDTa0",
    authDomain: "project-b-a3f82.firebaseapp.com",
    projectId: "project-b-a3f82",
    storageBucket: "project-b-a3f82.appspot.com",
    messagingSenderId: "550718394524",
    appId: "1:550718394524:web:8923b556a0bac089e41d59",
    measurementId: "G-8VHJH6LDSX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const getUser = async id => {
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
    const users = ref([])
    usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map (doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
}