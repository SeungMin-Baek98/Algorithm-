// 백준 11866
// 요세푸스 문제 0

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, K] = input.map(Number);
const arr = Array.from({ length: N }, (_, i) => i + 1);
const result = [];

while (arr.length) {
  for (let i = 0; i < K - 1; i++) {
    arr.push(arr.shift());
  }

  result.push(arr.shift());
}

console.log(`<${result.join(", ")}>`);
