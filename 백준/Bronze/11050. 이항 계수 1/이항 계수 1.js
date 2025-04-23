// 백준 11050
// 이항 계수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function factorial(n) {
  let mul = 1;

  for (let i = n; i >= 1; i--) {
    mul *= i;
  }
  return mul;
}

const [N, K] = input.map(Number);
const result = factorial(N) / (factorial(K) * factorial(N - K));

console.log(result);
