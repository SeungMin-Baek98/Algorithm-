const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((value) => value.split(""));

// 8 * 8 체스판 하얀색이 먼저시작하는 경우
const whiteFirst = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];

// 8  * 8 체스판 검은색이 먼저 시작하는 경우
const blackFirst = [
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
];

let minimum = Number.MAX_SAFE_INTEGER;

// 8 * 8 체스판을 검사하는 함수
const checkBoard = (x, y, board) => {
  let whiteFirstCount = 0;
  let blackFirstCount = 0;

  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (board[i][j] !== whiteFirst[i - x][j - y]) {
        whiteFirstCount++;
      }
      if (board[i][j] !== blackFirst[i - x][j - y]) {
        blackFirstCount++;
      }
    }
  }
  return Math.min(whiteFirstCount, blackFirstCount);
};

// 8 * 8 체스판이 들어갈 수 있는 범위를 설정해야한다.
for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    minimum = Math.min(minimum, checkBoard(i, j, board));
  }
}

console.log(minimum);
