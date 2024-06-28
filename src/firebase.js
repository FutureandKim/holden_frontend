import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCnFX6fbIbpY9cLVoq-4q86MRgGEun_ufw",
  authDomain: "holden-fcbe7.firebaseapp.com",
  projectId: "holden-fcbe7",
  storageBucket: "holden-fcbe7.appspot.com",
  messagingSenderId: "423786453099",
  appId: "1:423786453099:web:d44ff27867439543d3b92e",
  measurementId: "G-993BJ8JXTS"

};

// Initialize Firebase
let firebaseApp;

// Check if Firebase has already been initialized
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}

const messaging = firebase.messaging();

export const requestForToken = () => {
  return messaging.getToken({ vapidKey: 'YOUR_PUBLIC_VAPID_KEY' }) // Replace with your public VAPID key
    .then((currentToken) => {
      if (currentToken) {
        console.log('FCM Token:', currentToken);
        // 서버로 토큰을 전송하는 로직 추가
        sendTokenToServer(currentToken);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

const sendTokenToServer = (token) => {
  fetch('/user/firebase/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
  });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
