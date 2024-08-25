const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//1

// const idImpar = pizzas.filter((impares) => {
//   console.log("Id Impar:");
//   return impares.id % 2 === 1;
// });

// console.log(idImpar);

//2

// const menorValor = pizzas.filter((menor) => {
//   console.log(`Claro que si, tenemos esta opcion por menos de $600:`);
//   return menor.precio < 600;
// });

// console.log(menorValor);

//3

// pizzas.forEach((pizza) => {
//   const { nombre, precio } = pizza;

//   console.log(`Nombre: ${nombre}, Precio ${precio}`);
// });

//4
// pizzas.forEach((pizza) => {
//   console.log(`Los ingredientes de la ${pizza.nombre} son:`);

//   pizza.ingredientes.forEach((ingrediente) => {
//     console.log(`- ${ingrediente}`);
//   });

//   console.log("");
// });
