const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 세로, 가로
const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(" ").map(Number));

function solution(w, h, board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];

  let maxArea = 0;
  let answer = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (board[i][j] === 1) {
        let area = 1;
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;

        while (queue.length) {
          const [x, y] = queue.shift();

          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (nx >= 0 && nx < h && ny >= 0 && ny < w && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              area++;
              queue.push([nx, ny]);
            }
          }
        }
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  console.log(answer);
  console.log(maxArea);
}

solution(m, n, board);
