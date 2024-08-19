const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = input[0];
const b = input[1];

if (b.length > a.length) {
  console.log("no");
} else {
  console.log("go");
}
