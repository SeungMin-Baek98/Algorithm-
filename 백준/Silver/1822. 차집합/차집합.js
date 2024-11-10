const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const b = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const setA = [...new Set(a)];
const setB = new Set(b);

const result = setA.filter((value) => !setB.has(value));
if (result.length === 0) {
  console.log(0);
} else {
  console.log(result.length);
  console.log(result.join(" "));
}
