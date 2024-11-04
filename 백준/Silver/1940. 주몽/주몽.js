const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const M = Number(input[1]);
const numbers = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
let left = 0;
let right = numbers.length - 1;

while (left < right) {
  const sum = numbers[right] + numbers[left];
  if (sum === M) {
    result++;
    left++;
    right--;
  } else if (sum < M) {
    left++;
  } else {
    right--;
  }
}

console.log(result);
