
const array_data = ['one', 'two', 'three', 'four', 'five'];



/**
 * Method that applies left-to-right rotation to an array
 * 
 * @method applyRotationLeftToRight
 * @param  {array} inputArray [input Array]
 * @param  {number} numberOfRotations [N rotations]
 * @return {array} array processed
 */
const applyRotationLeftToRight = (inputArray, numberOfRotations) => {
  const copyOfInputArray = JSON.parse(JSON.stringify(inputArray))
  for (var i = 0; i <= numberOfRotations; i++) {
    if (i <= numberOfRotations - 1) {
      let lastElement = copyOfInputArray.pop();
      copyOfInputArray.unshift(lastElement);
    } else {
      return copyOfInputArray;
    }

  }
};

/**
 * Method that applies right-to-left rotation to an array
 * 
 * @method applyRotationRightToLeft
 * @param  {array} inputArray [input Array]
 * @param  {number} numberOfRotations [N rotations]
 * @return {array} array processed
 */
const applyRotationRightToLeft = (inputArray, numberOfRotations, direction) => {
  const copyOfInputArray = JSON.parse(JSON.stringify(inputArray))
  for (var i = 0; i <= numberOfRotations; i++) {
    if (i <= numberOfRotations - 1) {
      let firstElement = copyOfInputArray.shift();
      copyOfInputArray.push(firstElement);
    } else {
      return copyOfInputArray;
    }

  }
};

console.log('Array original:', array_data);
console.log('left-to-right rotation to an array:', applyRotationLeftToRight(array_data, 2));
console.log('right-to-left rotation to an array:', applyRotationRightToLeft(array_data, 2));