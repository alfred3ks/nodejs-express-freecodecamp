// Con el desestructurin podemos usar las funciones directamente: {} -> tomamos solo las propiedades que queremos o necesitemos.
// importamos el modulo saludo.js: Asignandolo a una ctte.
const { saludar, suma, resta, producto } = require('./saludo');

// Podemos usar la funcion:
console.log(saludar('Laika'));

// Usamos la suma:
console.log(suma(3, 5));

// Usamos la resta:
console.log(resta(3, 5));

// Usamos el producto:
console.log(producto(3, 5));