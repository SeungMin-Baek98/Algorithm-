const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let newArr = [];
for (let i = 0; i < input.length; i++) {
  newArr.push(input[i] % 42);
}

let result = [];
for (let j = 0; j < newArr.length; j++) {
  if (!result.includes(newArr[j])) {
    result.push(newArr[j]);
  }
}

console.log(result.length);
