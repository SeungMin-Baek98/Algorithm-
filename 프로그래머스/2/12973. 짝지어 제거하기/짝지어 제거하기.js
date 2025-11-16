function solution(s) {
  let answer = 0;

  const stack = [];
  for (const char of s) {
    if (char !== stack[stack.length - 1]) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  answer = stack.length === 0 ? 1 : 0;
  return answer;
}