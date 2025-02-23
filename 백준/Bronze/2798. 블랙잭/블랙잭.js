const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const cards = input.toString().split(" ").map(Number);

let result = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= M) {
        result = Math.max(result, sum);
      }
    }
  }
}

console.log(result);
