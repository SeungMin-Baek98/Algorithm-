const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const [[N], ...R] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

console.log(R.map((v) => v[0] * (v[2] - 1) + v[1]).join("\n"));
