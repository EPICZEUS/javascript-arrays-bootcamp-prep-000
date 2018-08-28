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

function destructivelyRemoveElementsFromBeginningOfArray(array) {
  array.shift();
  return array;
}