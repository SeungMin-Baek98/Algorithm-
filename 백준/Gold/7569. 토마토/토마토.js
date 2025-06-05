// 백준 7569
// 토마토

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// M : 가로 N : 세로 H : 높이
const [M, N, H] = input.shift().split(" ").map(Number);
const box = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array(M).fill(0))
);

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];
const queue = [];
let unripeT = 0;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    box[i][j] = input.shift().split(" ").map(Number);
    for (let k = 0; k < M; k++) {
      if (box[i][j][k] === 0) {
        unripeT++;
      } else if (box[i][j][k] === 1) {
        queue.push([i, j, k, 0]); // (z, x, y, days)
      }
    }
  }
}

function BFS() {
  let maxDays = 0;
  let head = 0;
  while (head < queue.length) {
    const [z, x, y, days] = queue[head++];

    for (let i = 0; i < 6; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nz = z + dz[i];

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        nz >= 0 &&
        nz < H &&
        box[nz][nx][ny] === 0
      ) {
        box[nz][nx][ny] = 1;
        queue.push([nz, nx, ny, days + 1]);
        unripeT--;
        maxDays = Math.max(maxDays, days + 1);
      }
    }
  }

  if (unripeT === 0) {
    console.log(maxDays);
  } else {
    console.log(-1);
  }
}

BFS();
