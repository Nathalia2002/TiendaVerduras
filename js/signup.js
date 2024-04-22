
import { ManageAccount } from './firebaseconfig.js';

window.addEventListener('DOMContentLoaded', (event) => {
    const formElement = document.getElementById("create-account-link");
    if(formElement) {
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const userType = document.getElementById("userType").value;

            const account = new ManageAccount();
            account.register(name,email,password,userType);

             /* para controlar el cache*/
              res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
        });
    }
});

console.log('Formulario de Registro');



window.addEventListener('DOMContentLoaded', (event) => {
  const createAccountLink = document.getElementById('create-account-link');
  if(createAccountLink) {
      createAccountLink.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = 'crear-cuenta.html';
      });
  }

  const forgotPasswordLink = document.getElementById('forgot-password-link');
  if(forgotPasswordLink) {
      forgotPasswordLink.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = 'olvidar-contrasena.html';
      });
  }
});


/*import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
  
  // signup.js
  
  document.getElementById('create-account-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'crear-cuenta.html';
  });
  
  document.getElementById('forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'olvidar-contrasena.html';
  });
  
  
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
  
    // Capturar los valores de los campos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Ejemplo de solicitud con fetch
    fetch('url_del_servidor/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            // La cuenta se creó exitosamente
            alert('¡Cuenta creada exitosamente!');
            // Redirigir a la página de inicio de sesión u otra página
            window.location.href = 'login.html';
        } else {
            // Hubo un error al crear la cuenta
            alert('Hubo un error al crear la cuenta. Por favor, inténtelo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
        alert('Hubo un error al crear la cuenta. Por favor, inténtelo de nuevo.');
    });
  });
  
  
  document.getElementById('forgot-password-link').onclick = (event) => {
    event.preventDefault(); // Evita que el enlace redireccione
    // Aquí puedes redirigir a la página de recuperación de contraseña
    // Por ejemplo:
    window.location.href = 'recuperar-contrasena.html';
  };
 
  // Para diferenciar un administrador de un comprador 
  function register() {
    var userType = document.getElementById('userType').value;
    if (userType === 'administrador') {
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'comprador.html';
    }
}

// Función para agregar una persona a la base de datos
function agregarPersona(usuario) {
  // Obtener una referencia a la colección "personas" en la base de datos
  const db = firebase.firestore();
  const personasRef = db.collection('Usuarios');

  // Agregar la persona a la colección "personas"
  personasRef.add({
    nombre: usuario.nombre,
    contrasena : usuario.contrasena,
    correo : usuario.correo,
    tipo_usuario: usuario.tipo_usuario,
    
  })
 .then(() => {
    // Mostrar un mensaje de éxito
    console.log('Persona agregada exitosamente');
  })
 .catch((error) => {
    // Mostrar un mensaje de error
    console.error('Error al agregar la persona:', error);
  });
}

agregarPersona(persona);




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/