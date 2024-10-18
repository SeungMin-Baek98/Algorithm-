const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = new Set(input[1].split(" ").map(Number));
const findNumbers = input[3].split(" ").map(Number);

let result = [];

for (let i = 0; i < findNumbers.length; i++) {
  if (numbers.has(findNumbers[i])) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join("\n"));
