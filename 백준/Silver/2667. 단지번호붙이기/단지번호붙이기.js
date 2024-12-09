const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

//DFS
function solution(board) {
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let n = board.length;
  let queue = [];

  let isVisited = Array.from(Array(n), () => Array(n).fill(false));
  let apartCount = 0;
  let apartSize = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1 && !isVisited[i][j]) {
        isVisited[i][j] = true;
        queue.push([i, j]);
        apartCount++;

        let apart = 0;

        while (queue.length) {
          let [x, y] = queue.shift();
          apart++;

          for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];

            if (
              nx >= 0 &&
              nx < n &&
              ny >= 0 &&
              ny < n &&
              board[nx][ny] === 1 &&
              !isVisited[nx][ny]
            ) {
              isVisited[nx][ny] = true;
              queue.push([nx, ny]);
            }
          }
        }
        apartSize.push(apart);
      }
    }
  }
  apartSize.sort((a, b) => a - b);
  return [apartCount, apartSize];
}

input.shift();
const board = input.map((v) => v.split("").map(Number));
const [apartCount, apartSize] = solution(board);
const result = [];

result.push(apartCount, [...apartSize].join("\n"));

console.log(result.join("\n"));
