/*
Vamos a ver como instalar paquetes externos. Muy necesario para cuando vayamos a instalar y trabajar con express.

- Creamos nuestro package.json:

npm init -y

Vamos a npm cuando necesitemos uno, y ahi lo vemos como lo podemos instalar.

Vamos a instalar express.

  npm i express

Vemos como se instala en la terminal junto con todos sus dependencias. Vemos la carpeta node_modules, donde se instalan los paquetes y las dependencias. No se suele tocar. Vemos el archivo package-lock-json:

Este archivo da informacion del paquete y de las dependencias de las dependencias.

Ahora vemos el comando para desistalar ese paquete.

  npm uninstall express

Veremos como instalar una version especifica de un paquete, por ejemplo la version 4.15.1 de express:

  npm i express@4.15.1

Si borramos la carpeta node_modules podemos volver a instalar las dependencias de la aplicacion que relejan en el package.son, usaremos el comando:

  npm install

Ahora podemos instalar dependencias de varias formas, las hay que son dependencias de desarrollo y otras que son necesarias para el funcionamiento de la app en produccion. Para las de desarrollo las llamamos DevDependencies.

Veamos como hacerlo: Instalamos nodemon:

  npm i nodemon -D

Si el paquete es necesario para el funcionamiento de la app simplemente la instalamos:

  npm i express

Ahora veamos el concepto de que es packege-lock.json:

Este se genera automaticamente cuando npm modifica el arbol de node_modules p package.json. Este describe el arbol generado para que futras instalaciones puedan generar exactamente el mismo arbol. Asi otros desarrolladores pueden instalar las mismas dependencias.

*/