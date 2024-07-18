let numero = 0;

let botonSumar = document.getElementById("btn-sumar");
let contador = document.getElementById("contador");
contador.innerText = numero;

// botonSumar.onclick = () => {
//   alert("sumando...");
// };

botonSumar.addEventListener("click", () => {
  numero++;
  contador.innerText = numero;
});

let textoEventos = document.getElementById("eventos");

// textoEventos.addEventListener("click", () => {
//   alert("di click en el h3");
// });

// textoEventos.addEventListener("dblclick", () => {
//   alert("dobleClick");
// });

// textoEventos.addEventListener("mouseenter", () => {
//   console.log("entro el mouse");
// });

// textoEventos.addEventListener("mouseleave", () => {
//   console.log("sale el mouse");
// });

// textoEventos.addEventListener("mousedown", () => {
//   console.log("apreto el click");
// });

// textoEventos.addEventListener("mouseup", () => {
//   console.log("suelto el click");
// });

let inputNombre = document.getElementById("input-nombre");
// inputNombre.addEventListener("keydown", () => {
//   console.log("aprete una tecla");
// });

// inputNombre.addEventListener("keyup", () => {
//   console.log("suelto una tecla");
// });

inputNombre.addEventListener("keypress", (e) => {
  console.log("tecleando");
});

let inputName = document.getElementById("nombre");
let nombreProducto = "";
inputName.addEventListener("input", () => {
  nombreProducto = inputName.value;
});

let inputDescripcion = document.getElementById("descripcion");
let descripcionDelProducto = "";
inputDescripcion.addEventListener("input", () => {
  descripcionDelProducto = inputDescripcion.value;
});

let inputPrecio = document.getElementById("precio");
let precioProducto = "";
inputPrecio.addEventListener("input", () => {
  precioProducto = inputPrecio.value;
});

let productos = [];

let miFormulario = document.querySelector("form");

miFormulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let producto = {
    nombre: nombreProducto,
    precio: Number(precioProducto),
    descripcion: descripcionDelProducto,
  };

  productos.push(producto);
  let miTarjeta = document.createElement("div");
  miTarjeta.innerHTML = `<div class="card">
    <h2>${producto.nombre}</h2>
    <h3>${producto.descripcion}</h3>
    <h4>${producto.precio}</h4>
</div>`;

  contenedorProductos.appendChild(miTarjeta);
});

let contenedorProductos = document.querySelector(".container-productos");
console.log(contenedorProductos);
