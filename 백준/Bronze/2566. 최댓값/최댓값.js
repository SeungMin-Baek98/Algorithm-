const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let arr = new Array(9).fill().map(() => new Array(9).fill(0));

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    arr[i][j] = input[i][j];
  }
}

let maxNum = -Infinity;
let x = 0,
  y = 0;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (arr[i][j] > maxNum) {
      maxNum = arr[i][j];
      x = i + 1;
      y = j + 1;
    }
  }
}

console.log(maxNum);
console.log(x, y);
