const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const num = input[0];
let result = 0;
let cub = 0;
for (let i = 1; i <= num; i++) {
  result = result + i;
  cub = cub + i * i * i;
}
console.log(result);
console.log(result * result);
console.log(cub);
