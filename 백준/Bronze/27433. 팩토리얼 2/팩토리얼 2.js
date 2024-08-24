const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = 1;
for (let i = 1; i <= input[0]; i++) {
  result = result * i;
}
console.log(result);
