// localStorage.setItem(
//   "usuario",
//   JSON.stringify({ email: "jorge@gmail.com", nombre: "pepe" })
// ); // previamente convierto a string

// JSON.parse(localStorage.getItem("usuario"));

// Operador &&
// Operador ||
// Operador ?? (Nullish )

// los falsy y truthy

// boolean
console.log(false);
console.log(true);

// undefined- null - NaN - 0 - "" ---> falsy
// "dsadsa" - {} - [] -  15 - true ---> truthy

if ([]) {
  console.log("entro");
}

let numero = 15;
let nombre = "juan";

let seCumpleElAnd = numero > 5 && nombre === "juan" && "pepe" && true;

if (seCumpleElAnd) {
  console.log(seCumpleElAnd);
} else {
  console.log("no", seCumpleElAnd);
}

let x = NaN || "" || 0 || null;

if (x) {
  console.log(x);
} else {
  console.log("no", x);
}

// console.log(0 || null || "casa" || {} || 15 || "juancito" || []);
// console.log(0 || null || NaN || 0 || "" || undefined);

// && ---> devuelve el ultimo truthy o el primer falsy
// || ---> devuelve el ultimo falsy o el primer truthy

// admin || dueño || comprador
let rol = "admin";

// Dar acceso a modificar mis productos
let letDoyAcceso = rol === "dueño" || rol === "admin";

if (letDoyAcceso) {
  console.log("te doy acceso a modificar los productos");
} else {
  console.log("no te doy acceso");
}

let tieneEntrada = false;
let edad = 21;

// dar acceso a una discoteca

let puede = tieneEntrada === true && edad >= 18;

if (puede) {
  console.log("entraste");
} else {
  console.log("no entraste");
}

// Operador ?? (Nullish )

let a = NaN;
let b = "pepe";

let z = a || b; // siempre y cuando lo de la izquieda sea falsy , muestro derecha
let nullish = a ?? b; // siempre y cuando lo de la izquieda sea null o undefined ,
// muestro derecha
console.log(z);
console.log(nullish);

// optional chaining

// let persona = { nombre: "pepe" };
let persona = null;

let numeros = [12, 15, 11];
// let numeros = undefined;

let numerosNuevos = numeros?.map((elemento) => elemento * 2) || [];
console.log(numerosNuevos);

console.log("aca sigue el codigo");

// desestructuración de objetos
// no importa el orden pero si importa el nombre
let usuario = {
  nombre: "pepe",
  apellido: "perez",
  edadDeLaPersona: 24,
};

let { edadDeLaPersona, apellido: uno } = usuario;
// console.log(usuario.apellido);
console.log(uno);

let usuarioDos = {
  nombre: "carmen",
  apellido: "del valle",
  edadDeLaPersona: 22,
};

let { apellido: dos } = usuarioDos;
console.log(dos);

// alias
// desestructuración de arrays
// si importa el orden pero no importa el nombre

let usuarios = ["pepe", "juan", "carmen", "maria"];

// console.log(usuarios[1]);
// console.log(usuarios[3]);
// console.log(usuarios[1]);

let [u3, u1, u4, u2] = usuarios;

console.log(u4);

const personasUsuarios = [
  {
    email: "pepe",
    password: "1234",
  },
  {
    email: "juan@gmail.com",
    password: "2222",
  },
  {
    email: "maria",
    password: "333",
  },
];

let [, userDos, userTres] = personasUsuarios;
let { email } = userDos;
console.log(personasUsuarios);
// console.log(email);

let auto = {
  color: "rojo",
  modelo: 2022,
  marca: "audi",
};
let autoDos = {
  color: "azul",
  modelo: 2022,
  marca: "vw",
};

const mostrarCarac = ({ color, marca, modelo }, palabra) => {
  // undefined.color

  console.log(color);
  console.log(modelo);
  console.log(marca);
  console.log(palabra);
};

mostrarCarac(
  {
    color: "azul",
    modelo: 2022,
    marca: "vw",
  },
  "hola"
);
mostrarCarac(auto, "chau");
