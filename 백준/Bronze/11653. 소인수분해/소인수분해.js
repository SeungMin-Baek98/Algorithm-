const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

let num = input[0];
let prime = [];

for (let i = 2; i <= num; i++) {
  while (num % i === 0) {
    num = num / i;
    prime.push(i);
  }
  if (num === 1) break;
}

console.log(prime.join("\n"));
