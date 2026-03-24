// function solution(topping) {
//   let answer = 0;
//   // 1. topping길이가 1이면은 나눌수가 없으니간 바로 0 반환
//   if (topping.length === 1) return 0;
//   for (let i = 0; i < topping.length; i++) {
//     // 2. 정렬 x , 배열의 idx를 기준으로해서 그 idx를 기준으로 해서 왼쪽 오른쪽 분리
//     // 3. new Set()으로 중복된 숫자 제거
//     const left = new Set(topping.slice(0, i)).size;
//     const right = new Set(topping.slice(i)).size;

//     // 4. left right 같으면 ++
//     if (left === right) answer++;
//   }

//   return answer;
// }


function solution(topping) {
  let answer = 0;
  const right = new Map();
  const left = new Set();
  for (const t of topping) {
    right.set(t, (right.get(t) || 0) + 1);
  }

  for (let i = 0; i < topping.length; i++) {
    const t = topping[i];

    left.add(t); // 왼쪽 추가

    right.set(t, right.get(t) - 1); // 오른쪽 그 요소 -1

    if (right.get(t) === 0) right.delete(t); // 오른쪽 해당 요소가 value가 0이라면 객체에서 삭제

    if (left.size === right.size) answer++;
  }

  return answer;
}
