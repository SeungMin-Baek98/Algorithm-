const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

const originWord = input.join("");
const reversedWord = input.reverse().join("");

let result = 0;
if (originWord === reversedWord) {
  result = 1;
} else {
  result = 0;
}
console.log(result);
