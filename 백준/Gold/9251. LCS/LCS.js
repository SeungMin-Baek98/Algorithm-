// 백준 9251
// LCS

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str1 = input[0].split("");
const str2 = input[1].split("");

let dp = Array.from({ length: str1.length + 1 }, () =>
  Array(str2.length + 1).fill(0)
);

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    // 문자열 동일시
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[str1.length][str2.length]);
