const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

const num = input[0];
let count = 0;
for (let i = 5; i <= num; i *= 5) {
  count += Math.floor(num / i);
}

console.log(count);
