const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(" ").map(Number));

function solution(n, m, board) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];
  let queueStart = 0; // 큐의 시작점
  let unripeCount = 0; // 익지 않은 토마토의 개수

  let day = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      //토마토의 익은 위치를 queue배열에 push
      //그게 시작점이 될것이다.

      if (board[i][j] === 1) {
        queue.push([i, j, 0]);
      } else if (board[i][j] === 0) {
        unripeCount++;
      }
    }
  }

  while (queueStart < queue.length) {
    const [x, y, currentDay] = queue[queueStart++];
    day = Math.max(day, currentDay);

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 0) {
        //토마토 기준 상우하좌 익음으로 전파 / board격자판 길이만큼 순회.
        board[nx][ny] = 1;
        unripeCount--;
        queue.push([nx, ny, currentDay + 1]);
      }
    }
  }

  return unripeCount > 0 ? -1 : day;
}

console.log(solution(n, m, board));
