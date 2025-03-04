const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, K] = input.map(Number);
function factorial(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer *= i;
  }

  return answer;
}

const result = factorial(N) / (factorial(N - K) * factorial(K));
console.log(result);
