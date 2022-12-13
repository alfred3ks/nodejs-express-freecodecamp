/*
Vamos a ver el modulo os de Node.js

Viene del ingles Operating System. Sitema operativo.
Nos permite optener informacion del ssitema operativo donde se ejecuta Node.js

No es un modulo que se encuentre de manera global asi que hay que importarlo con require()
*/

let os = require('os');

// Vemos el tipo de SO
console.log(os.type());

// Vemos la direccion del directorio principal:
console.log(os.homedir());

// Cuento tiempo se ha estado ejecutando el SO:
console.log(os.uptime());

// Vemos la informacion del usuario:
console.log(os.userInfo());