// 백준 2178
// 숫자 카드2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[1].split(" ").map(Number);
const map = new Map();

for (let i = 0; i < N.length; i++) {
  if (map.has(N[i])) {
    map.set(N[i], map.get(N[i]) + 1);
  } else {
    map.set(N[i], 1);
  }
}

const M = input[3].split(" ").map(Number);
const result = [];
for (let i = 0; i < M.length; i++) {
  if (map.has(M[i])) {
    result.push(map.get(M[i]));
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));
