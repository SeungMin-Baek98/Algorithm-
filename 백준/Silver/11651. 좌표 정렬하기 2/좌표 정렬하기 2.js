// 백준 11651
// 좌표 정렬하기 2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

const dots = input.map((item) => item.split(" ").map(Number));

dots.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

dots.forEach((item) => console.log(item.join(" ")));
