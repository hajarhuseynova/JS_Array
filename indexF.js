function reverseArray(arr) {
  let array = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i]);
  }
  return array;
}
console.log(reverseArray([1, 2, 3]));
