function solution(s) {
  const centerNumber = Math.floor(s.length / 2);
  let answer = "";

  if (s.length % 2 === 0) {
    answer += s.slice(centerNumber - 1, centerNumber + 1);
  } else {
    answer += s[centerNumber];
  }
  return answer;
}