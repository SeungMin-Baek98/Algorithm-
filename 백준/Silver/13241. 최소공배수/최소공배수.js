const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const getGCD = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getLCM = (num1, num2) => {
  const gcd = getGCD(num1, num2);
  return (num1 * num2) / gcd;
};

console.log(getLCM(input[0], input[1]));
