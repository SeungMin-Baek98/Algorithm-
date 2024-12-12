const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n, m, board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 0;
  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        queue.push([i, j]);
        board[i][j] = 0;
        answer++;

        while (queue.length > 0) {
          const [x, y] = queue.shift();

          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            // 유효 범위 및 방문 여부 확인
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return answer;
}

const T = Number(input.shift());
let index = 0;
const result = [];

for (let t = 0; t < T; t++) {
  // M 가로, N 세로
  const [M, N, K] = input[index++].split(" ").map(Number);

  // 2차원 배열 생성
  const board = Array.from({ length: N }, () => Array(M).fill(0));

  // 배추 위치 설정
  for (let i = 0; i < K; i++) {
    const [x, y] = input[index++].split(" ").map(Number);
    board[y][x] = 1;
  }

  result.push(solution(N, M, board));
}

console.log(result.join("\n"));
