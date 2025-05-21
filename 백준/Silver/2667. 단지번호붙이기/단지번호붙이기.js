// 백준 2677
// 단지 번호 붙이기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const map = input.map((line) => line.split("").map(Number));
const isVisited = Array.from({ length: N }, () => Array(N).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function DFS(x, y) {
  isVisited[x][y] = true;
  let people = 1;

  for (let d = 0; d < 4; d++) {
    const nx = x + dx[d];
    const ny = y + dy[d];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      !isVisited[nx][ny] &&
      map[nx][ny] === 1
    ) {
      people += DFS(nx, ny);
    }
  }

  return people;
}

const arr = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!isVisited[i][j] && map[i][j] === 1) {
      arr.push(DFS(i, j));
    }
  }
}

arr.sort((a, b) => a - b);
console.log(arr.length);
console.log(arr.join("\n"));
