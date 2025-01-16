function solution(n) {
  const answer = [];
  const str = n.toString().split("");
  for (let i = str.length - 1; i >= 0; i--) {
    answer.push(parseInt(str[i]));
  }
  return answer;
}

console.log(solution(12345));
