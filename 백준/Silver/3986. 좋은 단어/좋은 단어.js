const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function soltuion(s) {
  let answer = 0;
  let stack = [];

  for (let x of s) {
    if (stack.length > 0 && stack[stack.length - 1] === x) {
      stack.pop();
    } else {
      stack.push(x);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

const tryCount = Number(input.shift());
let answer = 0;
for (let i = 0; i < tryCount; i++) {
  answer += soltuion(input[i]);
}

console.log(answer);
