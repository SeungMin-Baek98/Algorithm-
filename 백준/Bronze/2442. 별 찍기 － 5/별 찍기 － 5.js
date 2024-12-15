const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input.shift());
const result = [];

for (let i = 1; i <= tryCount; i++) {
  const star = "*".repeat(2 * i - 1);
  const space = " ".repeat(tryCount - i);

  result.push(space + star);
}

console.log(result.join("\n"));
