const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [n, k] = input;
let numbers = Array.from({ length: n }, (_, i) => i + 1);
let result = [];

while (numbers.length > 0) {
  for (let i = 0; i < k - 1; i++) {
    numbers.push(numbers.shift());
  }
  result.push(numbers.shift());
}
console.log(`<${result.join(", ")}>`);
