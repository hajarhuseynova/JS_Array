function compareArray(firstArr, secondArr) {
  if (firstArr.length != secondArr.length) {
    return false;
  }
  firstArr.sort();
  secondArr.sort();
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] != secondArr[i]) {
      return false;
    }
  }
  return true;
}
console.log(compareArray([1, 2, 3], [1, 3, 2]));
