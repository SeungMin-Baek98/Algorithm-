// 백준 2562
// 최댓값

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const maxNum = Math.max(...input);
const maxIdx = input.indexOf(maxNum);

console.log(maxNum);
console.log(maxIdx + 1);
