const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
const sections = input.slice(2).map((line) => line.split(" ").map(Number));
const result = [];

const prefixSum = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  prefixSum[i] = prefixSum[i - 1] + numbers[i - 1];
}

for (const [a, b] of sections) {
  const sum = prefixSum[b] - prefixSum[a - 1];
  result.push(sum);
}

console.log(result.join("\n"));
