function solution(answers) {
  const answer = [0, 0, 0]; // 점수 score를 담을 배열

  // 수포자들의 찍는 방식
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === supo1[i % supo1.length]) answer[0]++;
    if (answers[i] === supo2[i % supo2.length]) answer[1]++;
    if (answers[i] === supo3[i % supo3.length]) answer[2]++;
  }

  // 가장 많이 맞춘 사람을 찾는다.
  const maxScore = Math.max(...answer);
  const result = [];

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === maxScore) {
      result.push(i + 1); // 1부터 시작하므로.
    }
  }

  return result;
}
