var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, ele) {
  return [ele, ...array];
}

function destructiveAddElementToBeginningOfArray(array, ele) {
  array.unshift(ele);
  return array;
}

function addElementToEndOfArray(array, ele) {
  return [...array, ele];
}

function destructiveAddElementToEndOfArray(array, ele) {
  array.push(ele);
  return array;
}

function accessElementInArray(array, i) {
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

