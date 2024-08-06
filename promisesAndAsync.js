// ASINCRONIA Y PROMESAS

// SINCRONICO

// let a = 2;

// console.log("hola");

// // tarea pesada

// const sumar = () => {
//   return 1 + 5;
// };

// let resultado = sumar();
// console.log(resultado);

// console.log(a);

const saludar = () => {
  alert("hola pepito");
};

console.log("iniciar");

let saludarAsincrono = setTimeout(() => {
  // asincrona
  saludar();
}, 3000);

let user = null;

if (!user) {
  clearTimeout(saludarAsincrono);
}

console.log("finalizar");

let contador = 0;

// let intervalo = setInterval(() => {
//   console.log("se ejecuta cada 2 segundos");
//   contador++;
//   console.log(contador);
//   if (contador === 5) {
//     clearInterval(intervalo);
//   }
// }, 2000);

// como crear promesas
// las promesas son el resultado de algo --> fetching

// crear ---> esto no lo van hacer
// manejar ---> esto siempre

// let x = dame los productos
// let x = crear y simular la promesa

// 2 funciones ( primero lo bueno, segundo lo malo)

let obtenerProductos = new Promise((resolve, reject) => {
  let rol = "user";
  if (rol === "admin") {
    resolve([{}, {}, {}]);
  } else {
    reject({ message: "algo salio mal" });
  }
});

// manejar ---> .then y .catch

// obtenerProductos
//   .then((respuesta) => {
//     console.log("entra en el then");
//     console.log(respuesta);
//   })
//   .catch((error) => {
//     console.log("entra en el catch");
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("se termino el manejo de la promesa");
//   });

// let numeros = [1, 2, 5, 7, 1]

// numeros.filter().map().reduce()

const obtenerUsuarios = new Promise((resolve, reject) => {
  //   resolve("todo salio okey");
  reject("todo salio mal");
});

// obtenerUsuarios
//   .then((respuesta) => {
//     alert(respuesta);
//   })
//   .catch((error) => {
//     alert(error);
//   });

// async - await

const obtenerCategorias = new Promise((resolve, reject) => {
  let estaLogeado = true;
  if (estaLogeado) {
    resolve([{}, {}, {}, {}]);
  } else {
    reject("primero inicia sesion");
  }
});

// const manejarCategorias = async () => {
//   let categorias = await obtenerCategorias;
// };

const manejarCategorias = async () => {
  try {
    let categorias = await obtenerCategorias;
    console.log("salio bien", categorias);
  } catch (error) {
    console.log("salio mal", error);
  }
};

// manejarCategorias();

// dame algo ---> de donde
// endpoint -->https://mibackend.com/products/1
// endpoint -->https://mibackend.com/users
// endpoint -->https://mibackend.com/orders

const obtenerPosts = fetch("https://jsonplaceholder.typicode.com/posts");

let products = [];

const manejarPosts = async () => {
  try {
    let res = await obtenerPosts;
    let posts = await res.json();
    products = posts;
  } catch (error) {
    console.log(error);
  }
};

manejarPosts();

// VERBOS HTTP
// GET ---> obtener
// POST --> CREAR
// PUT / PATCH --> actualizar
// DELETE ---> eliminar

// obtenerPosts
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
