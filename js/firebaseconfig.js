
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
  register(name, email, password,userType) {
    createUserWithEmailAndPassword(auth, name, email, password, userType)
      .then((_) => {
        window.location.href = "crear-cuenta.html";
        // Mostrar alerta de registro exitoso
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
        console.log(name, email, password,userType);
        console.log(auth.currentUser.uid);
        console.log("se realizo la accion pero no se registro..")
      })
      .catch((error) => {
        console.error(error.message);
            // Mostrar alerta de error de registro
            alert("Error al registrar: " + error.message);
            console.log(name, email, password,userType);
            console.log("se realizo la accion pero di error..")
      });
  }

  authenticate(name, email, password, userType) {
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "crear-cuenta.html";
        // Mostrar alerta de inicio de sesión exitoso
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
      })
      .catch((error) => {
        console.error(error.message);
                // Mostrar alerta de error de inicio de sesión
                alert("Error al iniciar sesión: " + error.message);
      });
  }

  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}