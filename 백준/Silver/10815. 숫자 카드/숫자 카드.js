const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

const M = Number(input[2]);
const findNumbers = input[3].split(" ").map(Number);

const countNumbers = new Map();

numbers.forEach((num) => {
  if (countNumbers.has(num)) {
    countNumbers.set(num, countNumbers.get(num) + 1);
  } else {
    countNumbers.set(num, 1);
  }
});

let result = [];

for (let i = 0; i < M; i++) {
  const target = findNumbers[i];
  result.push(countNumbers.get(target) || 0);
}

console.log(result.join(" "));
