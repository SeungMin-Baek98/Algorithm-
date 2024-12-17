const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(s) {
  let answer = "YES";
  let stack = [];

  //괄호 반복
  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else {
      //닫는 괄호가 더 많을 경우
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  //여는 괄호가 더 많을 경우
  if (stack.length > 0) answer = "NO";

  return answer;
}

const tryCount = Number(input.shift());

for (let i = 0; i < tryCount; i++) {
  console.log(solution(input[i]));
}
