// function solution(n, left, right) {
//   const arr = Array.from({ length: n }, () =>
//     Array.from({ length: n }).fill(0),
//   );

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       arr[i][j] = i + 1;
//       arr[j][i] = i + 1;
//     }
//   }

//   const result = arr.reduce((acc, cur) => acc.concat(cur));

//   return result.slice(left, right + 1);
// }

function solution(n, left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;

    result.push(Math.max(row, col) + 1);
  }

  return result;
}
