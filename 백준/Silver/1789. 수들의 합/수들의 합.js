const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const S = Number(input);

let sum = 0;
let count = 0;

for (let i = 1; ; i++) {
  sum += i;
  if (sum > S) break;
  count++;
}

console.log(count);
