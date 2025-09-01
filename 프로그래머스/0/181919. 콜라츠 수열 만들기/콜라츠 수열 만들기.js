function solution(n) {
  const result = [];
  while (n !== 1) {
    result.push(n);
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
  }
  result.push(1);
  return result;
}