const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const words = input.slice(1);
let arr = [];
for (const word of words) {
  arr.push(word.split("").sort().join(""));
}
const set = [...new Set(arr)];
console.log(set.length);
