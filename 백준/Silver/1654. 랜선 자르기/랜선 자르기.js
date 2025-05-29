// 백준 1654
// 랜선 자르기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input.shift().split(" ").map(Number);
const lines = input.map(Number).sort((a, b) => a - b);

let max = Math.max(...lines);
let min = 1;
let result = 0;

while (min <= max) {
  let mid = Math.floor((max + min) / 2);
  let count = lines.reduce((acc, cur) => {
    return acc + Math.floor(cur / mid); // 정수 나눗셈
  }, 0);

  if (count >= N) {
    result = mid; // 가능한 길이를 저장
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(result);
