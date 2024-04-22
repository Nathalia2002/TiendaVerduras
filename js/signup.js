
  
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);