const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryNumbers = Array.from(new Set(input[1].split(" ").map(BigInt)));

let primes = [];

for (let i = 0; i < tryNumbers.length; i++) {
  let num = tryNumbers[i];
  let isPrime = true;

  if (num < 2n) continue;

  for (let j = 2n; j * j <= num; j++) {
    if (num % j === 0n) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primes.push(num);
  }
}

const getGCD = (a, b) => {
  return b === 0n ? a : getGCD(b, a % b);
};

const getLCM = (num1, num2) => {
  return (num1 * num2) / getGCD(num1, num2);
};

const getMultipleLCM = (numbers) => {
  if (numbers.length === 0) return 1n;
  return numbers.reduce((accumulator, currentValue) => {
    return getLCM(accumulator, currentValue);
  });
};

if (primes.length === 0) {
  console.log(-1);
} else if (primes.length === 1) {
  console.log(primes[0].toString());
} else {
  console.log(getMultipleLCM(primes).toString());
}
