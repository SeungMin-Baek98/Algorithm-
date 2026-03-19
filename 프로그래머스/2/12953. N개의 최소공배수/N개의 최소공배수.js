
// 최대공약수 구하기
function getGCM(a, b) {
  return a % b === 0 ? b : getGCM(b, a % b);
}

// 최소공배수 구하기
function getLCM(a, b) {
  return (a * b) / getGCM(a, b);
}

function solution(arr) {
  // 1. 첫번째 요소  * 두번째 요소 최소공배수 -> result
  let answer = arr[0];

  // 2. result * 세번째 요소 최소공배수 -> 결과값도출 (이걸 배열 길이 -1만큼반복)
  for (let i = 1; i < arr.length; i++) {
    answer = getLCM(answer, arr[i]);
  }

  return answer;
}
