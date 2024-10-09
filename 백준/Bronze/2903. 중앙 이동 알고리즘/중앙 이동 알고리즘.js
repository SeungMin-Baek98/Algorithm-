const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const num = Number(input[0]);
let dot = 2;
for (let i = 0; i < num; i++) {
  dot += Math.pow(2, i);
}

console.log(Math.pow(dot, 2));
