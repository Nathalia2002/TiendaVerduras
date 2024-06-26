// Inicializar Firebase, reemplaza esto con tu configuración
const firebaseConfig = {
    apiKey: "AIzaSyAkf7_W2fbdm6aSpgsl9k13rHOm4ZMkXHg",
    authDomain: "pedidospuravida-1665d.firebaseapp.com",
    projectId: "pedidospuravida-1665d",
    storageBucket: "pedidospuravida-1665d.appspot.com",
    messagingSenderId: "168211900848",
    appId: "1:168211900848:web:94f1e23b1c9f66f404ce75"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Obtener una referencia a la base de datos
  var db = firebase.firestore();
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      // Buscar el usuario en Firestore
   db.collection("users").where("email", "==", email).get()
   .then((querySnapshot) => {
       let userFound = false; // Variable para rastrear si se encuentra el usuario
       querySnapshot.forEach((doc) => {
           // doc.data() is never undefined for query doc snapshots
           var user = doc.data();
           if (user.password === password) {
               console.log("User logged in successfully!");
               window.location.href = "index.html";
               userFound = true; // Marcar que se encontró el usuario
           }
       });
       if (!userFound) { // Si el usuario no se encuentra, muestra el mensaje de error
        document.getElementById('login-error').innerText = 'Contraseña incorrecta';
           document.getElementById('login-error').style.display = 'block';
       }
   })
   .catch((error) => {
       console.log("Error getting documents: ", error);
   });
});

  