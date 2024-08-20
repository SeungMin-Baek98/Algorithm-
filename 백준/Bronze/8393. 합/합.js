const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let sum = 0;
for (let i = 1; i <= input; i++) {
  sum = sum + i;
}

console.log(sum);
