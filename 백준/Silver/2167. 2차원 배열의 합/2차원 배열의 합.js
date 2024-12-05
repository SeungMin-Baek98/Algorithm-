const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const nums = input.slice(0, n).map((v) => v.split(" ").map(Number));

const result = [];

for (let i = n + 1; i < input.length; i++) {
  const [a, b, c, d] = input[i].split(" ").map(Number);
  let sum = 0;

  for (let x = a - 1; x < c; x++) {
    for (let y = b - 1; y < d; y++) {
      sum += nums[x][y];
    }
  }
  result.push(sum);
}
console.log(result.join("\n"));
