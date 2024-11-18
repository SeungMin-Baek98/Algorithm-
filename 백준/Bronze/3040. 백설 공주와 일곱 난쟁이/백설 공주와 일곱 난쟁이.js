const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result = input;
const sum = result.reduce((a, b) => a + b, 0);
let flag = 0;
for (let i = 0; i < result.length; i++) {
  for (let j = i + 1; j < result.length; j++) {
    if (sum - (result[i] + result[j]) === 100) {
      result.splice(j, 1);
      result.splice(i, 1);
      flag = 1;
      break;
    }
  }
  if (flag === 1) break;
}

console.log(result.sort((a, b) => a - b).join("\n"));
