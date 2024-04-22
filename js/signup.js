
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

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;

     // Verificar si el correo electrónico ya está en uso
     db.collection("users").where("email", "==", email).get()
     .then((querySnapshot) => {
         if (!querySnapshot.empty) {
             // Si hay usuarios con el mismo correo electrónico, mostrar mensaje de error
             console.error("El correo electrónico ya está en uso.");
             // Mostrar mensaje de error al usuario
             document.getElementById('signup-error').style.display = 'block';
             return;
         }
 
         // Si el correo electrónico no está en uso, proceder con el registro
         // Generar un ID único para el nuevo usuario
         var userId = db.collection('users').doc().id;
 
         db.collection("users").doc(userId).set({
             name: name,
             email: email,
             password: password
         })
         .then(() => {
             console.log("Document successfully written!");
             // Mostrar mensaje de éxito
             document.getElementById('signup-success').style.display = 'block';
         })
         .catch((error) => {
             console.error("Error writing document: ", error);
         });
     })
     .catch((error) => {
         console.error("Error getting documents: ", error);
     });
 });
