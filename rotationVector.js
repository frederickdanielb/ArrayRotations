let inputString = require('yargs')
    .default({p: config.get('apiPort')})
    .argv;

let inputString = "5;4;2;7;9;3;8";
let inputArray = inputString.split(';');
let sizeVector = inputArray[0];
let numRotation = inputArray[1];
inputArray.splice(0, 2);

const becual = {
    applyRotation: (array, numberOfRotations)=> {
        var currentArray = array;
        for (var i = 0; i <= numberOfRotations; i++) {
            if (i <= numberOfRotations-1) {
                currentArray = becual.arrayRotation(currentArray);
            } else {
                return currentArray;
            }

        }
    },
    arrayRotation: (array)=> {
        var firstPosition;
        firstPosition = array[0];
        array.splice(0, 1);
        array.push(firstPosition)
        return array;
    }

}
console.log(becual.applyRotation(inputArray, numRotation));