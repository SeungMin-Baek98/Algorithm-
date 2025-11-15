function isValid(str) {
  const stack = [];
  const letters = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of str) {
    if (letters[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      // 짝이 맞지 않는 경우
      if (letters[last] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function solution(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    const rotated = s.slice(i) + s.slice(0, i);

    if (isValid(rotated)) {
      answer++;
    }
  }

  return answer;
}
