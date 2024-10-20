const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input[0]);
let result = [];

for (let i = 1; i <= tryCount; i++) {
  let numbers = Number(input[i]);
  let minPrime = numbers;

  while (true) {
    let isPrime = true;

    if (minPrime < 2) {
      minPrime++;
      continue;
    }

    if (minPrime === 2) {
      result.push(minPrime);
      break;
    }

    if (minPrime % 2 === 0) {
      isPrime = false;
    } else {
      for (let j = 3; j <= Math.sqrt(minPrime); j += 2) {
        if (minPrime % j === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      result.push(minPrime);
      break;
    }

    minPrime++;
  }
}

console.log(result.join("\n"));
