// function solution(n) {
//   let answer = 0;

//   for (let i = 1; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += j;

//       if (sum === n) {
//         answer++;
//         break;
//       }

//       if (sum + j > n) {
//         break;
//       }
//     }
//   }
//   return answer + 1;
// }


function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i += 2) {
    if (n % i === 0) answer++;
  }

  return answer;
}