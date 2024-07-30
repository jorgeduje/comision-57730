console.log("Operadores avanzados II");

// spread operator
let persona = {
  nombre: "pepe",
  edad: 22,
};

let persona2 = { ...persona, nombre: "fulanito" };

let numeros = [1, 5, 2, 3];
let numerosDos = [...numeros, 8, 10];
console.log(numerosDos);

// rest operator

const sumar = (...varios) => {
  let total = varios.reduce((acc, elemento) => acc + elemento, 0);
  return total;
};

let totalSuma = sumar(5, 2);
console.log(totalSuma);
