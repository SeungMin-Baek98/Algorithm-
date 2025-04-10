// 백준 2798
// 블랙잭

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [cardCounts, totalSum] = input.shift().split(" ").map(Number);
const cards = input.shift().split(" ").map(Number);
let result = 0;

for (let i = 0; i < cardCounts; i++) {
  for (let j = i + 1; j < cardCounts; j++) {
    for (let k = j + 1; k < cardCounts; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= totalSum) {
        result = Math.max(result, sum);
      }
    }
  }
}

console.log(result);
