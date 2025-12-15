function solution(s) {
  var answer = 0;
  const length = s.length;

  const isPair = (str) => {
    const stack = [];
    const pair = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (const s of str) {
      if (s === "(" || s === "[" || s === "{") {
        stack.push(s);
      } else {
        if (stack.pop() !== pair[s]) return false;
      }
    }

    return stack.length === 0;
  };

  for (let i = 0; i < length; i++) {
    const rotate = s.slice(i) + s.slice(0, i);
    if (isPair(rotate)) answer++;
  }

  return answer;
}