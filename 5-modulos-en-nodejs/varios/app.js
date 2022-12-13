// importamos el modulo saludo.js: Asiganandolo a una ctte.
const saludo = require('./saludo');
console.log(saludo); // { saludar: [Function: saludar] } un objeto

// Podemos usar la funcion:
console.log(saludo.saludar('Laika'));

// Usamos la suma:
console.log(saludo.suma(3, 5));

// Usamos la resta:
console.log(saludo.resta(3, 5));

// Usamos el producto:
console.log(saludo.producto(3, 5));