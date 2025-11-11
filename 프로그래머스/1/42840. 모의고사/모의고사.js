function solution(answers) {
  // 반복되는 처음과 끝을 기준 배열을 생성하여
  // answers 배열을 순회하면서
  // 각각의 맞춘 score를 일치하면은 ++ 해서
  // Math.max()를 하면된다.
  const vesicle1 = [1, 2, 3, 4, 5];
  const vesicle2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const vesicle3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const answer = [];

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === vesicle1[i % vesicle1.length]) count1++;
    if (answers[i] === vesicle2[i % vesicle2.length]) count2++;
    if (answers[i] === vesicle3[i % vesicle3.length]) count3++;
  }
  const maxScore = Math.max(count1, count2, count3);

  if (count1 === maxScore) answer.push(1);
  if (count2 === maxScore) answer.push(2);
  if (count3 === maxScore) answer.push(3);

  return answer;
}