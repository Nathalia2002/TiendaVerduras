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
  const db = firebase.firestore();
  
  document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
  
      // Verificar si el correo electrónico existe en la base de datos
      db.collection("users").where("email", "==", email).get()
          .then((querySnapshot) => {
              if (!querySnapshot.empty) {
                  // Si el correo electrónico existe, enviar un enlace de restablecimiento de contraseña
                  console.log("Correo electrónico encontrado. Se enviará un enlace de restablecimiento de contraseña.");
                  // Aquí podrías enviar un correo electrónico al usuario con un enlace para restablecer la contraseña
                  alert("Se enviará un enlace de restablecimiento de contraseña a tu correo electrónico.");
              } else {
                  // Si el correo electrónico no existe en la base de datos
                  console.log("Correo electrónico no encontrado.");
                  alert("El correo electrónico proporcionado no está registrado.");
              }
          })
          .catch((error) => {
              console.error("Error al buscar el correo electrónico en la base de datos: ", error);
              alert("Ocurrió un error. Por favor, inténtalo de nuevo más tarde.");
          });
  });
