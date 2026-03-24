// function solution(n, m, section) {
//   let answer = 0;
//   // 1.크기가 n인 배열 생성
//   const arr = Array.from({ length: n }).map((_, i) => i + 1);

//   for (let i = 0; i < arr.length; i++) {
//     // 2.배열을 순회하면서 section배열의 첫번째 요소부터 시작
//     let el = section[i - 1];

//     // 3. 그 요소에서 + m을 한 값이 배열의 길이를 넘지않으면 answer++
//     if (el + m <= arr.length) answer++;

//     // 4. m길이가 1이면은 section 길이를 반환
//     if (m === 1) return section.length;
//   }
//   return answer;
// }
function solution(n, m, section) {
  let answer = 0;
  let painted = 0;

  for (const pos of section) {
    if (pos > painted) {
      answer++;
      painted = Math.min(n, pos + m - 1);
    }
  }

  return answer;
}
