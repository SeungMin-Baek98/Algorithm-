// 백준 12865
// 평범한 배낭

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const items = input.map((line) => line.split(" ").map(Number));

let dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const [weight, value] = items[i - 1];

  for (let j = 0; j <= K; j++) {
    if (j < weight) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
    }
  }
}

console.log(dp[N][K]);
