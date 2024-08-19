const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sum1 = input[0] * input[1];
const sum2 = input[2] * input[3];
const totalSum = sum1 + sum2;
console.log(totalSum);
