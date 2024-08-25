const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let num1 = input[0];
let num2 = input[1];
let num3 = input[2];
let result = 0;

if (num1 === num2 && num2 === num3) {
  // 세 숫자가 모두 같은 경우
  result = 10000 + num1 * 1000;
} else if (num1 === num2 || num2 === num3 || num1 === num3) {
  // 두 숫자가 같은 경우
  if (num1 === num2 || num1 === num3) {
    result = 1000 + num1 * 100;
  } else {
    result = 1000 + num2 * 100;
  }
} else {
  // 세 숫자가 모두 다른 경우
  result = Math.max(num1, num2, num3) * 100;
}

console.log(result);
