// 백준 17070
// 파이프 옮기기1

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map((line) => line.split(" ").map(Number));

let dp = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => Array(N).fill(0))
);

// dp[x][y][dir] = 기준
// dir : 0 -> 왼쪽
// dir : 1 -> 오른쪽
// dir : 2 -> 대각선
dp[0][1][0] = 1; // 초기값 (가로 방향 0 , 1 시작)

// 탐색
for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (board[x][y] === 1) {
      continue;
    }

    // 가로
    if (y - 1 >= 0 && board[x][y - 1] === 0) {
      dp[x][y][0] += dp[x][y - 1][0] + dp[x][y - 1][2];
    }

    // 세로
    if (x - 1 >= 0 && board[x - 1][y] === 0) {
      dp[x][y][1] += dp[x - 1][y][1] + dp[x - 1][y][2];
    }

    // 대각선
    if (
      x - 1 >= 0 &&
      y - 1 >= 0 &&
      board[x - 1][y] === 0 &&
      board[x][y - 1] === 0 &&
      board[x - 1][y - 1] === 0
    ) {
      dp[x][y][2] +=
        dp[x - 1][y - 1][0] + dp[x - 1][y - 1][1] + dp[x - 1][y - 1][2];
    }
  }
}

const result = dp[N - 1][N - 1][0] + dp[N - 1][N - 1][1] + dp[N - 1][N - 1][2];
console.log(result);
