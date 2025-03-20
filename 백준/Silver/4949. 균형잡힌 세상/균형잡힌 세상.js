const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "[") {
      result.push(arr[i]);
    } else if (arr[i] === ")") {
      if (result.length === 0 || result.pop() !== "(") {
        return "no";
      }
    } else if (arr[i] === "]") {
      if (result.length === 0 || result.pop() !== "[") {
        return "no";
      }
    }
  }

  return result.length === 0 ? "yes" : "no";
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") break;
  console.log(solution(input[i]));
}
