const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numberCards = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
const M = Number(input[2]);
const findNumbers = input[3].split(" ").map(Number);

const numberCountMap = new Map();
numbers.forEach((num) => {
  if (numberCountMap.has(num)) {
    numberCountMap.set(num, numberCountMap.get(num) + 1);
  } else {
    numberCountMap.set(num, 1);
  }
});

let output = "";
for (let i = 0; i < M; i++) {
  const target = findNumbers[i];
  output += (numberCountMap.get(target) || 0) + " ";
}

console.log(output.trim());
