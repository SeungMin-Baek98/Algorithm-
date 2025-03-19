// 백준 16234
// 인구 이동

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, L, R] = input.shift().split(" ").map(Number);
const graph = input.map((line) => line.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let days = 0;

while (true) {
  let isVisited = Array.from({ length: N }, () => Array(N).fill(false));
  let isMoved = false; // 인구 이동 발생 플래그

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (isVisited[i][j]) continue;

      let queue = [[i, j]];
      let union = [[i, j]];
      let population = graph[i][j];
      isVisited[i][j] = true;

      let idx = 0;
      while (queue.length > idx) {
        let [x, y] = queue[idx++];

        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          if (nx >= 0 && nx < N && ny >= 0 && ny < N && !isVisited[nx][ny]) {
            let diff = Math.abs(graph[x][y] - graph[nx][ny]);

            if (L <= diff && diff <= R) {
              queue.push([nx, ny]);
              union.push([nx, ny]);
              population += graph[nx][ny];
              isVisited[nx][ny] = true;
            }
          }
        }
      }

      // 연합배열의 크기가 1보다 크다면 연합이 있다는 뜻
      // 인구수 새로 설정
      if (union.length > 1) {
        isMoved = true;
        let newPopulation = Math.floor(population / union.length);
        for (let [x, y] of union) {
          graph[x][y] = newPopulation;
        }
      }
    }
  }

  // 인구 이동이 더 이상 없으면 종료
  if (!isMoved) break;
  days++;
}

console.log(days);
