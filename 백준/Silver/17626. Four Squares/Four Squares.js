// 백준 17626
// Four Squares

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const N = Number(input);
let dp = Array.from({ length: N + 1 }, () => 0);

dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= N; i++) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let j = 1; j * j <= i; j++) {
    min = Math.min(min, dp[i - j * j] + 1);
  }
  dp[i] = min;
}
console.log(dp[N]);
