const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input[0]);

let numbers = [];

for (let i = 1; i <= tryCount; i++) {
  numbers.push(Number(input[i]));
  if (numbers[numbers.length - 1] === 0) {
    numbers.pop();
    numbers.pop();
  }
}

let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}

console.log(result);
