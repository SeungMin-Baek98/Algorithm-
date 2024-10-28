const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

let result = [];

for (let length = 1; length <= input.length; length++) {
  for (let i = 0; i <= input.length - length; i++) {
    result.push(input.slice(i, i + length).join(""));
  }
}

const uniqueWord = [...new Set(result)];

console.log(uniqueWord.length);
