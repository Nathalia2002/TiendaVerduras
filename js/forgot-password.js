document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
  
    // Capturar el valor del campo de correo electrónico
    var email = document.getElementById('email').value;
  
    // Ejemplo de solicitud con fetch para restablecer la contraseña
    fetch('url_del_servidor/restablecer-contrasena', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email
        })
    })
    .then(response => {
        if (response.ok) {
            // El correo electrónico para restablecer la contraseña se envió con éxito
            alert('Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.');
            // Redirigir a la página de inicio de sesión u otra página
            window.location.href = 'login.html';
        } else {
            // Hubo un error al enviar el correo electrónico para restablecer la contraseña
            alert('Hubo un error al enviar el correo electrónico para restablecer la contraseña. Por favor, inténtelo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
        alert('Hubo un error al enviar el correo electrónico para restablecer la contraseña. Por favor, inténtelo de nuevo.');
    });
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
