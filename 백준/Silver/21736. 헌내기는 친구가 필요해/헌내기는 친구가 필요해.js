const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(""));
const visited = Array.from({ length: N }).map(() => new Array(M).fill(false));

// 상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let answer = 0;

function dfs(x, y) {
  visited[x][y] = true;

  // 만약 도연이가 있는 곳이라면 답++
  if (board[x][y] === "P") answer++;

  // 상 하 좌 우 탐색
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    // 범위를 벗어나거나 방문한 곳이거나 벽이라면 continue
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    // 방문한 곳이거나 벽이라면 continue
    if (!visited[nx][ny] && board[nx][ny] !== "X") {
      dfs(nx, ny);
    }
  }
}

// 도연이 위치 찾기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === "I") {
      dfs(i, j);
      break;
    }
  }
}

console.log(answer === 0 ? "TT" : answer);
