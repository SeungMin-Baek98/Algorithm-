const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const length = input.length;

let average = 0;
let sum = 0;
let middleNum = 0;

input.sort();

for (let i = 0; i < length; i++) {
  sum += input[i];
  average = sum / input.length;
  middleNum = Math.floor(length / 2);
}

console.log(average);
console.log(input[middleNum]);
