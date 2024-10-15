const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];
const numbers = input.slice(1).map(Number);

numbers.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  console.log(numbers[i]);
}
