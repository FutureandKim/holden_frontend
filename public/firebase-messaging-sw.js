import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyCnFX6fbIbpY9cLVoq-4q86MRgGEun_ufw",
    authDomain: "holden-fcbe7.firebaseapp.com",
    projectId: "holden-fcbe7",
    storageBucket: "holden-fcbe7.appspot.com",
    messagingSenderId: "423786453099",
    appId: "1:423786453099:web:d44ff27867439543d3b92e",
    measurementId: "G-993BJ8JXTS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);