const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, B] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(" ").map(Number));
let minTime = Number.MAX_SAFE_INTEGER;
let maxHeight = Number.MIN_SAFE_INTEGER;

for (let height = 0; height <= 256; height++) {
  let time = 0;
  let block = B;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let diff = board[i][j] - height;
      // 블록을 깎아서 높이를 맞추는 경우
      if (diff > 0) {
        time += diff * 2;
        block += diff;
      }
      // 블록을 쌓는 경우
      else if (diff < 0) {
        time -= diff;
        block += diff;
      }
    }
  }

  if (block < 0) break;

  if (time <= minTime) {
    minTime = time;
    maxHeight = height;
  }
}

console.log(minTime, maxHeight);
