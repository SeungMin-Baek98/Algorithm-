const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let nums = input.map(Number);

const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
const average = sum / nums.length;

const map = new Map();
nums.forEach((num) => {
  map.set(num, (map.get(num) || 0) + 1);
});

let maxFrequency = 0;
let mode = null;

map.forEach((count, num) => {
  if (count > maxFrequency) {
    maxFrequency = count;
    mode = num;
  }
});

console.log(average);
console.log(mode);
