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

// Seleccionar elementos del DOM
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.querySelector('.shopping-cart');
const cartTotal = document.querySelector('.total');

// Array para almacenar los elementos del carrito
let cartItems = [];

// Función para actualizar el carrito
function updateCart() {
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <h5>$${item.price.toFixed(2)}</h5>
                <span class="remove-item" data-id="${item.id}">Eliminar</span>
            </div>
            <div>
                <button class="increase-quantity" data-id="${item.id}">+</button>
                <span class="quantity">${item.quantity}</span>
                <button class="decrease-quantity" data-id="${item.id}">-</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Calcular y mostrar el total del carrito
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Event listener para añadir un producto al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        const productContainer = button.closest('.box');
        const product = {
            id: Date.now(), // ID único, puedes generar uno mejor
            name: productContainer.querySelector('h3').textContent,
            price: parseFloat(productContainer.querySelector('.price').textContent.replace('$', '').split('-')[0]),
            image: productContainer.querySelector('img').src,
            quantity: 1
        };
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push(product);
        }
        updateCart();
    });
});

// Event listener para eliminar un producto del carrito
cartItemsContainer.addEventListener('click', event => {
    if (event.target.classList.contains('remove-item')) {
        const itemId = parseInt(event.target.dataset.id);
        cartItems = cartItems.filter(item => item.id !== itemId);
        updateCart();
    }
});

// Event listener para aumentar/disminuir la cantidad de un producto en el carrito
cartItemsContainer.addEventListener('click', event => {
    if (event.target.classList.contains('increase-quantity')) {
        const itemId = parseInt(event.target.dataset.id);
        const item = cartItems.find(item => item.id === itemId);
        item.quantity++;
        updateCart();
    }
    if (event.target.classList.contains('decrease-quantity')) {
        const itemId = parseInt(event.target.dataset.id);
        const item = cartItems.find(item => item.id === itemId);
        if (item.quantity > 1) {
            item.quantity--;
        }
        updateCart();
    }
});

// Llamar a updateCart() al cargar la página para mostrar los elementos del carrito si hay alguno
updateCart();



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