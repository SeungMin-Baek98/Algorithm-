function solution(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        result = 0;
      }
    }
  }

  return result;
}
