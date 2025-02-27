const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const board = Array.from({ length: N }, () => Array(N).fill(0));

//방문 여부를 체크하기 위한 배열
const isVisited = Array.from({ length: N }, () => Array(N).fill(false));

// 상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 입력값을 2차원 배열ㄹ 전환
for (let i = 0; i < N; i++) {
  board[i] = input[i].split("").map(Number);
}

const dfs = (x, y) => {
  let count = 1; // 단지 내 집의 수
  isVisited[x][y] = true; // 방문 처리를 하여 중복 방문을 방지한다.

  // 상 하 좌 우 탐색
  for (let k = 0; k < 4; k++) {
    const nx = x + dx[k];
    const ny = y + dy[k];

    // board 범위를 벗어나지 않고, 방문하지 않은 집이라면(isVisited === false)
    // 해당 집을 기준으로 다시 DFS 탐색을 진행한다.
    // 이 때, count를 증가시켜 단지 내 집의 수를 증가시킨다.
    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < N &&
      ny < N &&
      !isVisited[nx][ny] &&
      board[nx][ny] === 1
    ) {
      count += dfs(nx, ny);
    }
  }

  return count;
};

// 단지 내 집의 수를 저장할 배열
const result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1 && !isVisited[i][j]) {
      result.push(dfs(i, j));
    }
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join("\n"));
