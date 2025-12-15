function solution(s) {
  const stack = [];

  for (const str of s) {
    if (str !== stack[stack.length - 1]) {
      stack.push(str);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}