function general(arr, a) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
      count++;
    }
  }
  return count;
}
console.log(general([1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4], 2));
