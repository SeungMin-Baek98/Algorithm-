const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

// graph 생성
let graph = input.map((line) => line.split(" ").map(Number));

// 방문 여부 배열
let isVisited = Array.from({ length: N }, () => Array(M).fill(false));

// X, Y 방향 벡터
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

// BFS 함수
function BFS(startPoints) {
  let queue = startPoints;

  while (queue.length) {
    let [startX, startY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = startX + dx[i];
      const ny = startY + dy[i];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        graph[nx][ny] === 1 && // 땅(1)일 때만 이동 가능
        !isVisited[nx][ny]
      ) {
        graph[nx][ny] = graph[startX][startY] + 1;
        isVisited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

// 시작점 찾기
let startPoints = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 2) {
      graph[i][j] = 0;
      isVisited[i][j] = true;
      startPoints.push([i, j]);
    }
  }
}

// BFS 실행
if (startPoints.length) {
  BFS(startPoints);
}

// BFS가 끝난 후, 갈 수 없는 1만 -1로 변경
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === 1 && !isVisited[i][j]) {
      graph[i][j] = -1;
    }
  }
}

// 결과 출력
for (let i = 0; i < N; i++) {
  console.log(graph[i].join(" "));
}
