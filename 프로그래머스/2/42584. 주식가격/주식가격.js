
function solution(prices) {
  const n = prices.length;
  const arr = Array.from({ length: n }).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      arr[i]++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
  }

  return arr;
}