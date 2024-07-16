// documento

console.log(document.body);

//ANCHOR ---> RECUPERAR ELEMENTOS DEL DOM

// id
let subTitle = document.getElementById("sub-title");
console.log(subTitle);
// class
let title = document.getElementsByClassName("title");
console.log(title);

let miH3 = document.getElementsByTagName("h3");
console.log(miH3);

let miElemento = document.querySelector(".title");
console.log(miElemento);

let misElementosTitles = document.querySelectorAll(".title");
console.log(misElementosTitles);

miElemento.innerText = "Este es mi nuevo titulo";

let contenedorDeProductos = document.querySelector(".container");
contenedorDeProductos.innerHTML = `<div>
<div>
<h3>algo</h3>
</div>
</div>
`;

//ANCHOR ---> CREAR ELEMENTOS EN EL DOM
let categorias = document.createElement("div");

document.body.append(categorias);

let categoriaUno = document.createElement("h3");
categoriaUno.innerText = "Esta es mi primer tarjeta";
categorias.appendChild(categoriaUno);
