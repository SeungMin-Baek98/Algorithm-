// 백준 2579
// 계단 오르기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const stairs = input.map(Number);

let dp = Array.from({ length: N + 1 }).fill(0);
dp[1] = stairs[0]; // 1계단 올랐을 때 최대값
dp[2] = stairs[0] + stairs[1]; // 2계단 올랐을 때 최대값.

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i - 1], // 한 게단 오를 경우
    dp[i - 3] + stairs[i - 2] + stairs[i - 1] // 두 계단 오를 경우
  );
}

console.log(dp[N]);
