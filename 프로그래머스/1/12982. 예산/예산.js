function solution(d, budget) {
  let answer = 0;
  const arr = d.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= budget) {
      answer++;
      budget -= d[i];
    } else {
      break;
    }
  }
  return answer;
}
