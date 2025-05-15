// 백준 9012
// 괄호

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

for (let strs of input) {
  const stack = [];
  let isValid = true;

  for (let x of strs) {
    if (x === "(") {
      stack.push(x);
    } else if (x === ")") {
      if (stack.length === 0) {
        isValid = false;
        break;
      }

      stack.pop();
    }
  }

  if (isValid && stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
