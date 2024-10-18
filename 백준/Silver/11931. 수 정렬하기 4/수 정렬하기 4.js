const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input[0]);
let result = [];

for (let i = 1; i <= tryCount; i++) {
  result.push(input[i]);
}

result.sort((a, b) => b - a);

console.log(result.join("\n"));
