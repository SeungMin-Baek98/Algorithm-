function solution(n) {
  const arr = Array.from({ length: n }, () =>
    Array.from({ length: n }).fill(0)
  );

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}