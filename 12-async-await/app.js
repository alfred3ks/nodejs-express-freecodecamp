/*

async - await
Vamos a ver como hacer codigo asincrono usando async await, que internamente usa promesas.
Veremos como podemos encadenar promesas:

*/

// Tenemos 2 funciones asyncronas:
function pedirProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Producto pedido: ${producto}`);
    setTimeout(() => {
      if (producto === 'taza') {
        resolve(`El producto pedido es una ${producto}.`);
      } else {
        reject('Este producto no esta disponible actualmente.')
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue "${respuesta}"`);
    setTimeout(() => {
      resolve('Gracias por tu compra, disfruta tu producto.')
    }, 4000);
  })
}

// Ahora vamos hacer los dos procesos asincronos en orden: Encadenamos las promesas:
// Ordenamos el producto:
pedirProducto('taza')
  .then((resp) => {
    console.log(resp);
    return procesarPedido(resp);
  })
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((err) => {
    console.log(err);
  })

// Ahora vamos a ver como hacer lo mismo pero con async await: Vamos a hacer codigo asincrono como si fuera codigo sincrono.
async function realizarPedido(producto) {
  try {
    const respuesta = await pedirProducto(producto);
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (err) {
    console.log('Error:', err);
  }
}
realizarPedido('taza');
