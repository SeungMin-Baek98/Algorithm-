// 최대공약수 구하기 (재귀)
function getGCM(a, b) {
  return a % b === 0 ? b : getGCM(b, a % b);
}

// 최소공배수 구하기
function getLCM(a, b) {
  return (a * b) / getGCM(a, b);
}

function solution(n, m) {
  return [getGCM(n, m), getLCM(n, m)];
}