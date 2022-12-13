/*
Comenzamos una nueva parte del curso.
Vamos a ver npm y Node.js.
Veamos unos conceptos.

npm es el compendio de software mas grande del mundo que constiene paquetes que puedes instalar y usar con Node.js.

Paquete:
Un paquete es un archivo o directorio descrito por un archivo package.json

Modulo:
Cualquier archivo o directorio en el directorio node_modules que puede ser importado con la directiva require().

node_modules:
Es una carpeta que se va a crear automaticamente al instalar un paquete de npm. Ahi se agrupan todos los paquetes.
Solo los modulos que tienen un archivo package.json son paquetes.

Dependencia:
Paquete que otro paquete necesita para poder funcionar.
paquete A
paquete B

A ----> B

A es una dependencia de B
B depende de A

Vamos a hacer nuestro primer paquete con npm.
Lo vemos en la carpeta mi-primer-paquete

Con la terminal:

  npm init

Damos enter a cada uno de los valores por defecto:
Podemos usar el comando que lo hace todo de golpe:

  npm init -y

Ahora vamos a ver que es .json
Esta basado en la sintaxis de JS para la transmision de datos.

*/