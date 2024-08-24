const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const width = input[0];
const height = input[1];

const result = width * height * 0.5;
console.log(result.toFixed(1));
