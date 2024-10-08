const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

input.sort((a, b) => a - b);

const a = input[0];
const b = input[1];
let c = input[2];

if (a + b <= c) {
  c = a + b - 1;
}

console.log(a + b + c);
