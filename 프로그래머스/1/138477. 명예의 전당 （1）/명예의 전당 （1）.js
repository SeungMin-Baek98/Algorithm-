function solution(k, score) {
  const answer = [];
  const honorArr = [];

  for (let i = 0; i < score.length; i++) {
    honorArr.push(score[i]);
    honorArr.sort((a, b) => a - b);

    if (honorArr.length > k) {
      honorArr.shift();
    }

    answer.push(honorArr[0]);
  }

  return answer;
}
