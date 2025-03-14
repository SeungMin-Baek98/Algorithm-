const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);

numbers.sort((a, b) => a - b);

console.log(numbers.join(" "));
