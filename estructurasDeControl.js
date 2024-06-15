// UNA RESPUESTA A UNA PREGUNTA

let n1 = 12;
let n2 = "12";

// console.log(n1 > n2); // false
// console.log(n1 < n2); // true
// console.log(n1 >= n2); // false
// console.log(n1 <= n2); // true
// console.log(n1 == n2); // comparacion simple
// console.log(n1 === n2); // comparacion estricta
// console.log(n1 != n2); // ---> cuando sean iguales da true
// console.log(n1 !== n2); // ---> cuando sean iguales da true

let id = "dsadasd";

// console.log(id === "xd123jk");

let esCasado = false;

// console.log(esCasado !== false);

// let nombre = prompt("ingresa tu nombre");
// let edad = Number(prompt("ingresa tu edad"));

// Un sistema para una app web que puedan sacar entradas para un recital
// que tiene que ser mayor de edad ---> 18 o mas

// console.log("inicio");

// if (edad >= 18) {
//   // bloque de codigo
//   console.log("gracias por tu compra");
// } else {
//   // bloque de codigo
//   console.log("debes ser mayor de edad");
// }

// console.log("fin");

// let estaLogeado = false;

// if (estaLogeado) {
//   // true
//   console.log("Tienes acceso");
// } else {
//   console.log("no tienes acceso");
// }

// // 18 o + ---> puedo entrar
// // 13 o +  ---> puedo entrar con un adulto
// // -13 ---> no puedo entrar

// let edad = 17.5;

// if (edad >= 18) {
//   console.log("puede entrar");
// } else if (edad >= 13) {
//   console.log("puede entrar con un adulto");
// } else {
//   console.log("no puede entrar");
// }

// 18 o + ---> puedo entrar
// -18 y vengo con un adulto ---> puedo entrar con un adulto
// -18 y no vengo con un adulto ---> no puedo entrar

let edad = 12;
let siVieneConUnAdulto = true;
// OPERADORES LOGICOS ---> && - ||

if (edad >= 18) {
  console.log("puedo entrar");
} else if (edad < 18 && siVieneConUnAdulto) {
  console.log("puede entrar con el adulto");
} else {
  console.log("no puede entrar");
}

// and ---> && ---> evaluar que ambas condiciones se cumplan
// or ---> ||  ---> evalauar que por lo menos una condicion se cumpla

console.log(true || true || false || true);

// el operador and se queda con el primer falsy o con el ultimo truthy

let x = true && true && "pepe" && true && "casa" && "juancito";

console.log(x);

// el operador or se queda con el primer truthy o con el ultimo falsy
let y = false || 0 || 0 || "" || false || 0;

console.log(y);

// "" ---> falsy
// 0 ---> falsy
// "dsadas" --> truthy
// 125 ---> truthy
