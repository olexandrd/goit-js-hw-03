function filterArray(array, number) {
  result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log('Task 3');
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
