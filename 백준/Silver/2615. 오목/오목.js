const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const board = input.map((line) => line.split(" ").map(Number));

// 상 하 좌 우
const dx = [1, 0, 1, 1];
const dy = [0, 1, 1, -1];

// 바둑판 범위 벗어나면 않된다.
function isValid(x, y) {
  return x >= 0 && x < 19 && y >= 0 && y < 19;
}

function checkWin(x, y, player) {
  // 상 하 좌 우 탐색
  for (let i = 0; i < 4; i++) {
    let count = 1;
    let nx = x + dx[i];
    let ny = y + dy[i];

    // 정방향인 경우
    while (isValid(nx, ny) && board[nx][ny] === player) {
      count++;
      nx += dx[i];
      ny += dy[i];
    }

    // 역방향으로도 5개가 되야한다.

    let prevX = x - dx[i];
    let prevY = y - dy[i];

    // 역방향 탐색
    while (isValid(prevX, prevY) && board[prevX][prevY] === player) {
      count++;
      prevX -= dx[i];
      prevY -= dy[i];
    }

    // 정확하게 5목이 되야한다. <-- 기존코드는 6목인경우에도 승리로 판단.
    if (count === 5) {
      // 6번째 돌이 있는지 검사 (육목 방지)
      let nextX = nx;
      let nextY = ny;
      if (
        (isValid(prevX, prevY) && board[prevX][prevY] === player) ||
        (isValid(nextX, nextY) && board[nextX][nextY] === player)
      ) {
        continue;
      }
      return true;
    }
  }

  return false;
}

for (let j = 0; j < 19; j++) {
  for (let i = 0; i < 19; i++) {
    if (board[i][j] !== 0 && checkWin(i, j, board[i][j])) {
      console.log(board[i][j]);
      console.log(i + 1, j + 1);
      return;
    }
  }
}

console.log(0);