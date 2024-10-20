const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const getGCD = (a, b) => {
  return b === 0 ? a : getGCD(b, a % b);
};

const getLCM = (num1, num2) => {
  return (num1 * num2) / getGCD(num1, num2);
};

console.log(getLCM(input[0], input[1]));
