const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let strs = [];
let findStrs = [];

for (let i = 1; i <= N; i++) {
  strs.push(input[i]);
}

for (let i = strs.length + 1; i < input.length; i++) {
  findStrs.push(input[i]);
}

const S = new Map();
let count = [];

strs.forEach((word) => {
  if (S.has(word)) {
    S.set(word, S.get(word) + 1);
  } else {
    S.set(word, 1);
  }
});

for (let i = 0; i < findStrs.length; i++) {
  const target = findStrs[i];
  count.push(S.get(target) || 0);
}

let result = 0;

for (let i = 0; i < count.length; i++) {
  result += count[i];
}

console.log(result);
