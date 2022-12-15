/*

Promesas en JavaScript.
Vamos a hablar como escribir JS asincrono, porque como hemos visto Node.js usa eventos asincronos.

Una promesa es un objeto que representa el evento resultado(o error) de una operacion asincrona.
Cuando iniciamos una operacion asincrona no sabemos cuando va a terminar ni como va a terminar.
Solo lo sabremos cuando se complete el proceso asincrono, osea cuando se complete la promesa.

Promise = promesa.

Promesa -> pendiente(pending):

Pueden pasar dos cosas:

Cumplida(fulfilled)
Rechazada(rejected)

Estos son los tres estados posibles de una promesa.
Una promesa es un objeto de JavaScript. Ese objeto se asocia a lo que denominamos una callback function. Una funcion que se ejecuta cuando se completa el proceso asincrono para ejecutar el resultado.

Function callback:
Es una funcion que s epasa a otra funcion como argumento y luego se ejcutara dentro de la funcion que se le ha pasado.

Las promesas tiene un metodo:
.then()
Con el cual podemos decidir que ocurre cuando se completa. Bien sea cumplida o rechazada (exito o error).

.catch()
Meodo d epromesa que solo se ejecuta si la promesa es rechazada.

Veamos a continuacion un ejemplo:

*/
const cumplida = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (cumplida) {
      // Funcion:
      resolve('¡¡¡Promesa cumplida!!!');
    } else {
      // Funcion:
      reject('Promesa rechazada -> KO...');
    }
  }, 3000)
});

// Manejamos la promesa:
miPromesa
  .then((valor) => {
    console.log(valor);
  })
  .catch((err) => {
    console.log('Error:', err);
  })

// Tenemos otro ejemplo: Tienda de pizzas que maneja pedido asincronos.
const statusPedido = () => {
  const status = Math.random() < 0.8;
  console.log(status);
  return status;
}

const miPedidoPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statusPedido()) {
      resolve('Pedido existoso Pizza en camino.')
    } else {
      reject('Ocurrio un error, intentelo de nuevo...')
    }
  }, 1000)
})

const aceptarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
}

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
}

// Otra forma de manejar la promesa.
miPedidoPizza
  .then(aceptarPedido, rechazarPedido);

// Usando la sintaxis then() catch()
miPedidoPizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .catch((err) => {
    console.log(err);
  })

