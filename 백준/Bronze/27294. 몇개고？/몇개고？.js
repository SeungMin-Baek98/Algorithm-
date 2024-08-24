const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const time = input[0]; // 시간
const icol = input[1]; // 술 유무
let rices;

// case 1. 술하고 같이 초밥을 먹음 or
if (icol === 1 || time <= 11 || time > 16) {
  rices = 280;
} // case 2. 점심 식사이면서 술과 같이 먹지 않을떄
else if (time >= 12 || (time <= 16 && icol === 0)) {
  rices = 320;
}

console.log(rices);
