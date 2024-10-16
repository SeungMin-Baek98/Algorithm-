const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [x, y] = input[0].toString().split(" ").map(Number);
input.shift();

let scores = input[0].split(" ").map(Number);
scores.sort((a, b) => a - b);
scores.reverse();
console.log(Math.max(scores[y - 1]));
