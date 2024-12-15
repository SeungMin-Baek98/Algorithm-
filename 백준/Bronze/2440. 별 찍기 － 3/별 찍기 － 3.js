const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input.shift());
const result = [];

for (let i = tryCount; i >= 1; i--) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  result.push(star);
}

console.log(result.join("\n"));
