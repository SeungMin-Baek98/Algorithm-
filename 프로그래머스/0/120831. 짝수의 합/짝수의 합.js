function solution(n) {
  const oddNums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      oddNums.push(i);
    }
  }
  let result = 0;
  for (let i = 0; i < oddNums.length; i++) {
    result += oddNums[i];
  }
  return result;
}