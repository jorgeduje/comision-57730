const products = [
  {
    id: 1,
    title: "Smartphone",
    price: 699.99,
    description:
      "Un smartphone de última generación con pantalla OLED y cámara de 108 MP.",
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 2,
    title: "Laptop",
    price: 1299.99,
    description: "Una laptop potente con procesador Intel i7 y 16 GB de RAM.",
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 3,
    title: "Auriculares Inalámbricos",
    price: 199.99,
    description:
      "Auriculares con cancelación de ruido y hasta 20 horas de autonomía.",
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 4,
    title: "Reloj Inteligente",
    price: 299.99,
    description:
      "Reloj inteligente con monitor de ritmo cardíaco y GPS integrado.",
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 5,
    title: "Tablet",
    price: 499.99,
    description:
      "Tablet con pantalla de 10 pulgadas y 64 GB de almacenamiento.",
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/30",
  },
];

console.log(products);

let containerProduct = document.createElement("div");
document.body.append(containerProduct);

// for (let i = 0; i < products.length; i++) {
//   const productCard = document.createElement("div");
//   productCard.innerHTML = `<h2>${products[i].title}</h2> <h3>${products[i].description}</h3>
//       <h4>${products[i].price}</h4> <img src="" alt="" />`;
//   productCard.className = "card";

//   containerProduct.appendChild(productCard);
// }

products.forEach((elemento) => {
  const productCard = document.createElement("div");
  productCard.innerHTML = ` <div>
      <h2>${elemento.title}</h2>
      <h2>${elemento.description}</h2>
      <h2>${elemento.price}</h2>
      <img src=${elemento.imageUrl} />
    </div>`;
  productCard.className = "card";
  containerProduct.appendChild(productCard);
});
