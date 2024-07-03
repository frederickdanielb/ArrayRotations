const arrayData = ['one', 'two', 'three', 'four', 'five'];

/**
 * Rotates an array to the left a given number of times.
 * 
 * @param {array} array - The input array.
 * @param {number} rotations - The number of rotations.
 * @return {array} - The rotated array.
 */
const rotateLeft = (array, rotations) => {
  if (!array.length || rotations <= 0) return array;
  const len = array.length;
  const normalizedRotations = rotations % len;
  return array.slice(normalizedRotations).concat(array.slice(0, normalizedRotations));
};

/**
 * Rotates an array to the right a given number of times.
 * 
 * @param {array} array - The input array.
 * @param {number} rotations - The number of rotations.
 * @return {array} - The rotated array.
 */
const rotateRight = (array, rotations) => {
  if (!array.length || rotations <= 0) return array;
  const len = array.length;
  const normalizedRotations = rotations % len;
  return array.slice(-normalizedRotations).concat(array.slice(0, -normalizedRotations));
};

console.log('Original Array:', arrayData);
console.log('Left Rotation:', rotateLeft(arrayData, 2));
console.log('Right Rotation:', rotateRight(arrayData, 2));