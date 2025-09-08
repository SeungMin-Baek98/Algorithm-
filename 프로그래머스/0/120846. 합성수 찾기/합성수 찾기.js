function solution(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let count = 0; // 각 i마다 0으로 초기화
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count >= 3) {
      result.push(i);
    }
  }

  return result.length;
}