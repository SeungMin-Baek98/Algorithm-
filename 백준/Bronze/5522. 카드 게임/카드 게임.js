const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

let sum = 0;

input.map((item) => {
  return (sum = sum + item);
});

console.log(sum);
