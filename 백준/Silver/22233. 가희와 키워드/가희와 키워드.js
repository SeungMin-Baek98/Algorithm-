const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const words = new Map();

for (let i = 0; i < n; i++) {
  words.set(input[i], 0);
}

const result = [];
for (let i = n; i < input.length; i++) {
  const keywords = input[i].split(",");
  for (const keyword of keywords) {
    if (words.has(keyword)) {
      words.delete(keyword);
    }
  }
  result.push(words.size);
}

console.log(result.join("\n"));
