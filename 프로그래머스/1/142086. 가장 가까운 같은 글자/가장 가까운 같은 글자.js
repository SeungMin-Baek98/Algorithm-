function solution(s) {
  const answer = [];
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    const str = s[i];

    if (obj[str] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - obj[str]);
    }

    obj[str] = i;
  }

  return answer;
}
