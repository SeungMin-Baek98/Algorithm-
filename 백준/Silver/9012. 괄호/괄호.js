const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(arr[i]);
    } else if (arr[i] === ")") {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

const testCase = Number(input.shift());

for (let i = 0; i < testCase; i++) {
  console.log(solution(input[i]));
}
