let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let burguer = document.querySelector('.menu');
let menuMobile = document.querySelector('.mobile-menu');
let carrito = document.querySelector('.navbar-shopping-cart');
let menuCarrito = document.querySelector('.product-detail');
let listaProductos = [{nombre:'bike',precio:210,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
{nombre:'pantalla',precio:239,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
{nombre:'movil',precio:300,imagen:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}]

listaProductos.forEach(producto => {
    const contenedorCards = document.querySelector('.cards-container');
 let divCard = document.createElement('div');
  divCard.classList.add('product-card');
  let imgProducto = document.createElement('img');
  imgProducto.setAttribute('src',producto.imagen);
  let divInfo = document.createElement('div');
  divInfo.classList.add('product-info');
  let divproduct = document.createElement('div');
  let parraPrecio = document.createElement('p');
  let parraNombre = document.createElement('p');
  let figura = document.createElement('figure');
  let imgIcono = document.createElement('img');
  imgIcono.setAttribute('src', './icons/bt_add_to_cart.svg');
  parraNombre.innerHTML = producto.nombre;
  parraPrecio.innerHTML = '$' + producto.precio;
  figura.appendChild(imgIcono);
  divproduct.appendChild(parraNombre);
  divproduct.appendChild(parraPrecio);
  divInfo.appendChild(divproduct);
  divInfo.appendChild(figura);
  divCard.appendChild(imgProducto);
  divCard.appendChild(divInfo);
  contenedorCards.appendChild(divCard);



});
menuEmail.addEventListener('click', toggleMenu);
burguer.addEventListener('click', toggleMobile);
carrito.addEventListener('click', toggleCarrito);


function toggleMenu(){
    const carritoClosed = menuCarrito.classList.contains('inactive');

    if(!carritoClosed){
        menuCarrito.classList.add('inactive');
    }
desktopMenu.classList.toggle('inactive');
}

function toggleMobile(){
    const carritoClosed = menuCarrito.classList.contains('inactive');

    if(!carritoClosed){
        menuCarrito.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}

function toggleCarrito(){
    
    const menuClosed = menuMobile.classList.contains('inactive');
    const desktopClosed = desktopMenu.classList.contains('inactive');

    if(!menuClosed){
        menuMobile.classList.add('inactive');
    }
    if(!desktopClosed){
        desktopMenu.classList.add('inactive');
    }
    menuCarrito.classList.toggle('inactive');
}

