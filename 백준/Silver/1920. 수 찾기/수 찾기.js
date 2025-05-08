// 백준 1018
// 체스판 다시 칠하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const numbers = input.shift().split(" ").map(Number);

const map = new Map();
for (let i = 0; i < N; i++) {
  map.set(numbers[i], 1);
}

const M = Number(input.shift());
const findNums = input.shift().split(" ").map(Number);

for (let i = 0; i < M; i++) {
  findNums[i] = map.get(findNums[i]) ? 1 : 0;
}

console.log(findNums.join("\n"));
