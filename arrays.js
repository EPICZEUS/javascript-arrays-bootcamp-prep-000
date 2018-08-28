var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, ele) {
  array.unshift(ele);
}

function destructiveAddElementToBeginningOfArray(array, ele) {
  return [ele, ...array];
}

function addElementToEndOfArray(array, ele) {
  array.push(ele);
}

function destructiveAddElementToEndOfArray(array, ele) {
  return [...array, ele];
}

function accessElementInArray(array, i) {
  return array[i];
}