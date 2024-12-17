const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input.shift());
const result = [];

for (let i = tryCount; i > 0; i--) {
  const stars = "*".repeat(2 * i - 1);
  const space = " ".repeat(tryCount - i);
  result.push(space + stars);
}

for (let i = 2; i <= tryCount; i++) {
  const stars = "*".repeat(2 * i - 1);
  const space = " ".repeat(tryCount - i);
  result.push(space + stars);
}

console.log(result.join("\n"));
