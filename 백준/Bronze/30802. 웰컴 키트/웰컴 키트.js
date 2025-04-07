// 백준 30802
// 웰컴 키트

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const proposer = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);
let count = 0;

for (let i = 0; i < proposer.length; i++) {
  count += Math.ceil(proposer[i] / T);
}

const getPencil = Math.floor(N / P);
const pencilN = N % P;

console.log(count);
console.log(`${getPencil} ${pencilN}`);
