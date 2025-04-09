// 백준 1149
// RGB거리

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const costs = input.map((line) => line.split(" ").map(Number));

let dp = Array.from({ length: N }, () => Array(3).fill(0));

dp[0] = costs[0]; // 1번집은 고정

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
}

console.log(Math.min(...dp[N - 1]));
