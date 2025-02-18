const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const num = Number(input);
let count = 1;
let range = 1;

while (range < num) {
  range += count * 6;
  count++;
}

console.log(count);
