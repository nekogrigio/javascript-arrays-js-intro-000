// TODO: In arrays.js, define a variable called chocolateBars. Its value should be an array of the strings snickers, hundred grand, kitkat, and skittles.

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return [...array(slice)];
}

//Define a function in arrays.js called destructivelyRemoveElementFromEndOfArray that takes an array as its only argument and removes the last element. Your function should return the entire array, and it should mutate the array.

function destructivelyRemoveElementFromEndOfArray(array) {
  array.push();
  return array;
}
