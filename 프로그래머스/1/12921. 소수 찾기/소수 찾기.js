// 시간 초과
// function solution(n) {
//   let answer = 0;

//   for (let i = 0; i <= n; i++) {
//     const currentNum = i;

//     if (i < 2) continue; // 0. 0,1은 소수아님 패스

//     let prime = true; // 1. 소수 플래그 변수

//     for (let j = 2; j <= Math.sqrt(currentNum); j++) {
//       if (currentNum % j === 0) {
//         prime = false; // 2. 값이 나누어떨어지면 소수가 아니므로 false로 변경
//         break; // 3. 바로 반복문 종료
//       }
//     }

//     if (prime) answer++;
//   }

//   return answer;
// }

// 에라토스테네스의 체
function solution(n) {
  const isPrime = Array.from({ length: n + 1 }).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    // 2부터는 true
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        // 2의 배수 만큼 (+=i) 한 값은 false로 제거
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter(Boolean).length;
}