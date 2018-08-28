var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray(array, ele) {
  array.unshift(ele);
}

function destructiveAddElementToBeginningOfArray(array, ele) {
  return [ele, ...array];
}