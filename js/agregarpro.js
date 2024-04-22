// Inicializar la base de datos de Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// Crear una función para agregar un producto a la lista de productos
function agregarProducto(producto) {
    // Guardar el producto en la base de datos de Firebase
    db.collection('productos').add({
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: producto.cantidad,
        imagen: producto.imagen
    })
   .then(() => {
        // Mostrar un mensaje de éxito
        console.log('Producto agregado con éxito');
    })
   .catch((error) => {
        // Mostrar un mensaje de error
        console.log('Error al agregar el producto:', error);
    });
}
 // Obtener el botón con el ID 'Productos'
 const botonProductos = document.getElementById('Productos');

 // Agregar un evento click al botón con el ID 'Productos'
 botonProductos.addEventListener('click', () => {
     // Mostrar el formulario HTML
     document.getElementById('formulario-producto').style.display = 'block';
    });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
