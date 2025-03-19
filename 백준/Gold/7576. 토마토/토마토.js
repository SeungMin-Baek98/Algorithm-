const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const graph = input.map((line) => line.split(" ").map(Number));

// 상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const queue = [];

// 그래프 탐색 하면서 1인지역 찾으면 queue배열에 push
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

//BFS 탐색
let idx = 0;
while (idx < queue.length) {
  let [x, y] = queue[idx++]; // x : 3 y : 5

  // 4방향 탐색
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] === 0) {
      graph[nx][ny] = graph[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

// 결과 계산
let maxDays = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 0) {
      console.log(-1); // 익지 않은 토마토가 남아 있는 경우 -1 출력
      return;
    }
    maxDays = Math.max(maxDays, graph[i][j]);
  }
}

console.log(maxDays - 1);
