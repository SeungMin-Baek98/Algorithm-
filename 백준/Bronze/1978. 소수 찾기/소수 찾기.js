const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");


const num = Number(input[0]);
let nums = input[1].split(" ").map(Number);
let count = 0;

for (let i = 0; i < num; i++) {
  let currentNum = nums[i];

  if (currentNum < 2) {
    continue;
  }

  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(currentNum); j++) {
    if (currentNum % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    count++;
  }
}

console.log(count);
