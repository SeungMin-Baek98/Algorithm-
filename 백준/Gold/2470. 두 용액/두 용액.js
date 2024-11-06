const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input.shift());
const numbers = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = tryCount - 1;
let closeSum = Infinity;
let result = [numbers[left], numbers[right]];

while (left < right) {
  const sum = numbers[left] + numbers[right];

  if (Math.abs(sum) < Math.abs(closeSum)) {
    closeSum = sum;
    result = [numbers[left], numbers[right]];
  }
  if (sum > 0) {
    right--;
  } else {
    left++;
  }
}

console.log(result.join(" "));
