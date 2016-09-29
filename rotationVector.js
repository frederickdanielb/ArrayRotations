let inputString = require('yargs').default({s: null}).argv;

const becual = {
    /**
     * @method applyRotation
     * @param  {string}   stringData [Cadena de datos a procesar]
     * @return {[array]}             [Salida segun evaluacion del metodo]
     */
    applyRotation: (stringData)=> {
        let check = becual.checkData(stringData);
        if (check.error) {
            return check;
        }
        let inputArray = stringData.split(';');
        let numberOfRotations = inputArray[1];
        inputArray.splice(0, 2);

        for (var i = 0; i <= numberOfRotations; i++) {
            if (i <= numberOfRotations - 1) {
                inputArray = becual.arrayRotation(inputArray);
            } else {
                return inputArray;
            }

        }
    },
    /**
     * Metodo que aplica a rotación al vector
     *
     * @method arrayRotation
     * @param  {array}   array [Arreglo que se le aplicara Rotacion]
     * @return {[array]}       [Si es el caso,retorna el arreglo con rotación aplicada]
     */
    arrayRotation: (array)=> {
        let firstPosition = array.shift();
        array.push(firstPosition);
        return array;
    },
    /**
     * Verifica si la cadena de entrada cumple con las condiciones (Validaciones)
     *
     * @method checkData
     * @param  {string}   stringData [Cadena de entrada a evaluar]
     * @return {[array]}             [Retorna un arreglo con el resultado de las validaciones]
     */
    checkData: (stringData)=> {
        let arrayData = stringData.split(';');
        let sizeArray = arrayData[0];
        if (arrayData.length>0) {
            for (var i = arrayData.length - 1; i >= 0; i--) {
                if (!Number.isInteger(parseInt(arrayData[i]))){
                    return {
                        error: true,
                        msg: 'Todos los elementos de la cadena separados por punto y coma deben ser números enteros!'
                    };
                }
            }
        }
        if (arrayData[2] == undefined) {
            return {
                error: true,
                msg: 'La cadena debe estra compuesta por 3 posiciones o más separadas por punto y coma!'
            };
        } else if (arrayData[2] != undefined) {
            arrayData.splice(0, 2);
            if (parseInt(sizeArray) != arrayData.length) {
                return {
                    error: true,
                    msg: ' El primer parametro en la cadena(Dimensión Arrreglo), no coincide con la cantidad de parametros a partir del tercer valor!'
                };
            }
        }
        return {error: false};
    }
}

if (inputString.s == null) {
    console.log('Debe agregar el parametro -s con el string a evaluar!')
    return false;
}
console.log(becual.applyRotation(inputString.s));