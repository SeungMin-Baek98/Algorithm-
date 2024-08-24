const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = input[0] * 100; // 100원짜리 동전 개수
const b = input[1]; // 초콜릿 가격
let result = "";
if (a >= b) {
  result = "Yes";
} else {
  result = "No";
}

console.log(result);
