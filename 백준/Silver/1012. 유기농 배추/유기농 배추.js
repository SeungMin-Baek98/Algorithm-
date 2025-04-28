// 백준 1012
// 유기농 배추

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());
const results = [];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input.shift().split(" ").map(Number);

  const board = Array.from({ length: M }, () => Array(N).fill(0)); // 2차원보드 생성
  const isVisited = Array.from({ length: M }, () => Array(N).fill(false)); // 2차원보드 생성

  // 상 하 좌 우
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let i = 0; i < K; i++) {
    const [x, y] = input.shift().split(" ").map(Number);
    board[x][y] = 1;
  }

  function DFS(x, y) {
    isVisited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        board[nx][ny] === 1 &&
        !isVisited[nx][ny]
      ) {
        DFS(nx, ny);
      }
    }
  }

  let count = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 1 && !isVisited[i][j]) {
        DFS(i, j);
        count++;
      }
    }
  }
  results.push(count);
}

console.log(results.join("\n"));
