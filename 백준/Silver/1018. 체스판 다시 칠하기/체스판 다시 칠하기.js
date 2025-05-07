// 백준 1018
// 체스판 다시 칠하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const whiteBoard = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];

const blackBoard = [
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
];

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(""));

let min = Number.MAX_SAFE_INTEGER;

for (let startRow = 0; startRow <= N - 8; startRow++) {
  for (let startCol = 0; startCol <= M - 8; startCol++) {
    let whitePaint = 0;
    let blackPaint = 0;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[startRow + i][startCol + j] !== whiteBoard[i][j]) {
          whitePaint++;
        }

        if (board[startRow + i][startCol + j] !== blackBoard[i][j]) {
          blackPaint++;
        }
      }
    }
    min = Math.min(min, whitePaint, blackPaint);
  }
}

console.log(min);
