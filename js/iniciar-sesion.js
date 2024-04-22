import { ManageAccount } from './firebaseconfig.js';

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userType = document.getElementById("userType").value;

  const account = new ManageAccount();
  account.authenticate(email, password);
  /* para controlar el cache*/
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
});
console.log('Formulario de Inicio de Sesión');

/*document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Capturar los valores de los campos del formulario
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Ejemplo de solicitud con fetch
    fetch('url_del_servidor/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            // Inicio de sesión exitoso
            alert('¡Inicio de sesión exitoso!');
            // Redirigir a la página principal u otra página
            window.location.href = 'index.html';
        } else {
            // Error al iniciar sesión
            alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
        alert('Hubo un error al iniciar sesión. Por favor, inténtelo de nuevo.');
    });
});



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Agregar el listener al formulario de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Capturar los valores de los campos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar las credenciales con Firebase
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
            // Inicio de sesión exitoso
            const user = userCredential.user;
            alert('¡Inicio de sesión exitoso!');
            // Redirigir a la página principal u otra página
            window.location.href = 'index.html';
        })
       .catch((error) => {
            // Error al iniciar sesión
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error al iniciar sesión: ${errorMessage}`);
        });
});*/
