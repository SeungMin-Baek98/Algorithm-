// 백준 1932
// 정수 삼각형

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

const triangleMap = input.map((line) => line.split(" ").map(Number));

let dp = Array.from({ length: N }, (_, i) => Array(i + 1).fill(0));
dp[0][0] = triangleMap[0][0];

for (let i = 1; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + triangleMap[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + triangleMap[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangleMap[i][j];
    }
  }
}
console.log(Math.max(...dp[N - 1]));
