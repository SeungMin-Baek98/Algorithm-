const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input.shift());
const result = [];

for (let i = 1; i <= tryCount; i++) {
  const stars = "*".repeat(i);
  const space = " ".repeat(2 * (tryCount - i));

  result.push(stars + space + stars);
}

for (let i = tryCount - 1; i >= 1; i--) {
  const stars = "*".repeat(i);
  const space = " ".repeat(2 * (tryCount - i));

  result.push(stars + space + stars);
}

console.log(result.join("\n"));
