const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const words = input.slice(1);
const mostWords = new Map();

for (let i = 0; i < words.length; i++) {
  if (mostWords.has(words[i])) {
    mostWords.set(words[i], mostWords.get(words[i]) + 1);
  } else {
    mostWords.set(words[i], 1);
  }
}

let maxKey = null;
let maxValue = -Infinity;

for (const [key, value] of mostWords) {
  if (value > maxValue) {
    maxKey = key;
    maxValue = value;
  } else if (value === maxValue) {
    if (key < maxKey) {
      maxKey = key;
    }
  }
}
console.log(maxKey);
