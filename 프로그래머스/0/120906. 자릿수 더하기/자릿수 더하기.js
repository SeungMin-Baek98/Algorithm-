function solution(n) {
  const strNum = String(n).split("");
  let sum = 0;
  for (let num of strNum) {
    sum += Number(num);
  }
  return sum;
}