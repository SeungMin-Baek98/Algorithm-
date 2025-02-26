const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 테스트케이스 : 2
const testCase = Number(input.shift());

const dp = Array.from({ length: 15 }, () => Array(15).fill(0));

// 0층 1호 ~ 15호 초기화

for (let j = 1; j < 15; j++) {
  dp[0][j] = j;
}

for (let floor = 1; floor < 15; floor++) {
  for (let room = 1; room < 15; room++) {
    dp[floor][room] = dp[floor - 1][room] + dp[floor][room - 1];
  }
}

for (let i = 0; i < testCase; i++) {
  const k = Number(input.shift());
  const n = Number(input.shift());
  console.log(dp[k][n]);
}
