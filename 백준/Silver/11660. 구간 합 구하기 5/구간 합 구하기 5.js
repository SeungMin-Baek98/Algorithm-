const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const sumRange = input.slice(1, n + 1).map((v) => v.split(" ").map(Number));

let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    dp[i][j] =
      sumRange[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
  }
}

const answer = [];

for (let i = n + 1; i < input.length; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  const sum =
    dp[x2][y2] - (dp[x1 - 1][y2] + dp[x2][y1 - 1]) + dp[x1 - 1][y1 - 1];

  answer.push(sum);
}

console.log(answer.join("\n"));
