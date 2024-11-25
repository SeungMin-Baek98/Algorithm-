const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split("").map(Number));

function solution(board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [[0, 0]];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  visited[0][0] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    // 도착 지점에 도달하면 거리 반환
    if (x === n - 1 && y === m - 1) {
      return board[x][y];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        board[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        board[nx][ny] = board[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return -1;
}

console.log(solution(board));
