document.getElementById('login-form').addEventListener('submit', function(event) {
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
