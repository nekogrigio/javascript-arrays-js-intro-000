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

// TODO: Define a function in arrays.js called removeElementFromBeginningOfArray that takes an array as its only argument and removes the first element. Your function should then return the entire array, and it should not mutate the underlying array.
//
function removeElementFromBeginningOfArray(array) {
  return [...array(slice)];
}
