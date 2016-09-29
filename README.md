# Rotación de Arreglo a la Izquierda #
___________________________________________
Rota un arreglo de dimensión dinámica(N), N veces a la izquierda:

**rotationVector.js:** Este archivo contiene toda la lógica de la aplicación.

**package.json:** Contiene la inicialización de la utilidad **npm** para el manejo de módulos de node que necesita la aplicación.

### Requerimientos ###
____________________
* node 6.2.2 o superior
* nmp
### Instalación ###
____________________
1. Descarga el repositorio o clonalo en tu equipo.
2. Una vez descargado navegue hasta la raíz del proyecto **'$cd ArrayRotations'** , luego ejecute el comando **'$npm install'** y asi obtener los módulos necesarios para el correcto funcionamiento.
### Modo de Uso ###
____________________
1. Debe posicionarse en la raíz del proyeco con la terminal de su preferencia.
2. Haciendo uso de **node** puede ejecutar el archivo **rotationVector.js** como se explica en la siguiente opción (3).
3. **$node rotationVector.js -s '5;4;1;2;3;4;5'**
4. **-s** de string.
5. **'5;4;1;2;3;4;5'**  en esta cadena la **primera posición(5)** indica la dimensión del arreglo a rotar, la **segunda posición(4)** indica 
la cantidad de rotaciones que se le aplicara al arreglo y el resto de la cadena a partir de la **tercera posición(1;2;3;4;5)** es el arreglo que se le aplicará la rotación.

**NOTA:** Debe tener en cuenta que todos los elementos de la cadena separados por punto y coma deben ser números enteros.
Si la  entrada es correctamente valida obtendrá algo como esto **[ '5', '1', '2', '3', '4' ]**, en caso contrario obtendrá un mensaje así **{ error: true, msg: 'Mensaje pertinente a la validación aplicada!' }**



Saludos...

***Chick sat in the pool and drowned =)***

