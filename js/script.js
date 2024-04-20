let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
  // Agregar producto al carrito
  $(".btn-agregar").on("click", function () {
      var producto = $(this).closest(".box");
      var precio = parseFloat(producto.find(".price").text().replace("$", "").split("-")[0]); // Tomar solo el precio más bajo si hay un rango
      var total = parseFloat($(".total").text().replace("total : $", ""));
      total += precio;
      $(".total").text("total : $" + total.toFixed(2));
  });

  // Eliminar producto del carrito
  $(".fa-trash").on("click", function () {
      var producto = $(this).closest(".box");
      var precio = parseFloat(producto.find(".price").text().replace("$", "").split("-")[0]); // Tomar solo el precio más bajo si hay un rango
      var total = parseFloat($(".total").text().replace("total : $", ""));
      total -= precio;
      producto.remove();
      $(".total").text("total : $" + total.toFixed(2));
  });
});


// Selecciona todos los botones "añadir al carrito"
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Itera sobre cada botón y agrega un event listener para el clic
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtén el contenedor del producto actual
        const productContainer = button.closest('.box');

        // Extrae la información del producto desde el contenedor
        const productName = productContainer.querySelector('h3').innerText;
        const productPrice = productContainer.querySelector('.price').innerText;

        // Crea un nuevo elemento para representar el producto en el carrito
        const cartItem = document.createElement('div');
        cartItem.classList.add('box');
        cartItem.innerHTML = `
            <i class="fas fa-trash"></i>
            <img src="image/${productName.toLowerCase().replace(' ', '-')}.png" alt="${productName}">
            <div class="content">
                <h3>${productName}</h3>
                <span class="price">${productPrice}</span>
                <span class="quantity">cantidad: 1</span>
            </div>
        `;

        // Agrega el nuevo elemento al contenedor del carrito
        const cartContainer = document.querySelector('.shopping-cart');
        cartContainer.insertBefore(cartItem, cartContainer.lastElementChild.previousElementSibling);
    });
});


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

//sesioniniciada
// Escucha el evento de estado de autenticación de Firebase
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // El usuario ha iniciado sesión
      var email = user.email;
      document.getElementById('welcome-message').innerText = 'Bienvenido, ' + email;
      document.getElementById('user-email').innerText = 'Correo electrónico: ' + email;
      document.getElementById('sign-out').addEventListener('click', function() {
          firebase.auth().signOut().then(function() {
              // Se cerró sesión exitosamente
              window.location.href = 'iniciar-sesion.html'; // Redirigir a la página de inicio de sesión
          }).catch(function(error) {
              // Hubo un error al cerrar sesión
              console.error('Error al cerrar sesión:', error);
          });
      });
  } else {
      // No hay usuario iniciado sesión
      // Redirigir a la página de inicio de sesión
      window.location.href = 'iniciar-sesion.html';
  }
});