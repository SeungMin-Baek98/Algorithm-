// 백준 10026
// 적록색약

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const graph = input.map((line) => line.split("")); // 적록색약이 아닌 사람
// 적록색약인 사람
// G이란 R를 구분못하니간 애초에 그래프를 변경해준다.
const colorBlindGraph = graph.map((row) =>
  row.map((color) => (color === "G" ? "R" : color))
);

// 4방향 탐색 좌표 -> 상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// BFS 탐색함수
function BFS(graph, visited, x, y) {
  //초기값 세팅
  let queue = [[x, y]];
  visited[x][y] = true;
  const color = graph[x][y];

  // 큐 탐색
  while (queue.length) {
    let [dirX, dirY] = queue.shift();

    // 4방향 탐색
    for (let i = 0; i < 4; i++) {
      const nx = dirX + dx[i];
      const ny = dirY + dy[i];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        graph[nx][ny] === color
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

// 적록색약이 아닌 경우.
let notColorSection = 0;
let notColorSectionVisited = Array.from({ length: N }, () =>
  Array(N).fill(false)
);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!notColorSectionVisited[i][j]) {
      BFS(graph, notColorSectionVisited, i, j);
      notColorSection++;
    }
  }
}

// 적록색약인 경우.
let colorSection = 0;
let colorSectionVisited = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!colorSectionVisited[i][j]) {
      BFS(colorBlindGraph, colorSectionVisited, i, j);
      colorSection++;
    }
  }
}

console.log(`${notColorSection} ${colorSection}`);
