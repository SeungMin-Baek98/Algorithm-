function solution(a, b) {
  const answer = [];
  for (let i = 0; i < a.length; i++) {
    answer.push(a[i] * b[i]);
  }
  return answer.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
