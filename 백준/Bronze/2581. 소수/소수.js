const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const startNum = Number(input[0]);
const endNum = Number(input[1]);
let prime = [];
let primeTotalSum = 0;

for (let i = startNum; i <= endNum; i++) {
  let currentNum = i;

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
    prime.push(currentNum);
    primeTotalSum += currentNum;
  }
}

if (prime.length === 0) {
  console.log(-1);
} else {
  console.log(primeTotalSum);
  console.log(Math.min(...prime));
}
