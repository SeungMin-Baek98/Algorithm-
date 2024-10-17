const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input[0]);
const newInput = input[1].split(" ").map(Number);

newInput.sort((a, b) => a - b);

let count = 0;
let totalSum = 0;

for (let i = 0; i < tryCount; i++) {
  count += newInput[i];
  totalSum += count;
}

console.log(totalSum);
