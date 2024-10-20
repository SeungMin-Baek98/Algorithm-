// 입력 받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input[0]);
let numbers = [];
for (let i = 1; i <= tryCount; i++) {
  numbers.push(Number(input[i])); // 각 가로수의 위치
}

let gaps = [];
for (let i = 1; i < numbers.length; i++) {
  gaps.push(numbers[i] - numbers[i - 1]); // 가로수 사이의 간격
}

const getGCD = (a, b) => {
  return b === 0 ? a : getGCD(b, a % b);
};

let gcd = gaps[0];
for (let i = 1; i < gaps.length; i++) {
  gcd = getGCD(gcd, gaps[i]);
}

let result = 0;
for (let i = 0; i < gaps.length; i++) {
  result += gaps[i] / gcd - 1; // 각 간격에서 추가로 심어야 하는 가로수 수
}
console.log(result);
