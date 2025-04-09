const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N) {
  let dp = Array.from({ length: N }, () => [0, 0]);

  dp[0] = [1, 0]; // f(0) -> 1 f(1) -> 0
  dp[1] = [0, 1]; // f(0) -> 0 f(1) -> 1

  for (let i = 2; i <= N; i++) {
    dp[i] = [
      dp[i - 2][0] + dp[i - 1][0], // 0의 호출 횟수
      dp[i - 2][1] + dp[i - 1][1], // 1의 호출 횟수
    ];
  }

  return dp[N];
}

const testCase = Number(input.shift());

for (let i = 0; i < testCase; i++) {
  console.log(solution(input[i]).join(" "));
}
