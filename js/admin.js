function mostrarCategoria(categoria) {
    var categorias = document.getElementsByClassName('categoria');
    for (var i = 0; i < categorias.length; i++) {
        categorias[i].style.display = 'none';
    }
    document.getElementById(categoria).style.display = 'block';
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);