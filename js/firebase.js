// Inicializar Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAItmFdlQs3BuOCCL28gfJbQ4i5PI3IooM",
  authDomain: "sistema-de-pedidos-5115c.firebaseapp.com",
  databaseURL: "https://sistema-de-pedidos-5115c-default-rtdb.firebaseio.com",
  projectId: "sistema-de-pedidos-5115c",
  storageBucket: "sistema-de-pedidos-5115c.appspot.com",
  messagingSenderId: "440969900412",
  appId: "1:440969900412:web:0ece71691cfa130d8bf4f9",
  measurementId: "G-YWRJDH7MBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Conexión a Firebase establecida correctamente.");