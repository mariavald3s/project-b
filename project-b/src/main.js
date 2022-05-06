import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './index.css'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAIanrnnerrizslf9zSDjkxUYwbDnTDTa0",
  authDomain: "project-b-a3f82.firebaseapp.com",
  projectId: "project-b-a3f82",
  storageBucket: "project-b-a3f82.appspot.com",
  messagingSenderId: "550718394524",
  appId: "1:550718394524:web:8923b556a0bac089e41d59",
  measurementId: "G-8VHJH6LDSX"
  };

  const app = initializeApp(firebaseConfig);

const app = createApp(App)

AOS.init();

app.use(router)

app.mount('#app')
