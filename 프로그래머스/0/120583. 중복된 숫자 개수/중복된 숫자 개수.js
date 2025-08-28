function solution(array, n) {
  let count = 0;
  for (let x of array) {
    if (x === n) {
      count++;
    }
  }
  return count;
}
