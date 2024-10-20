const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const tryCount = Number(input[0]);
let result = [];

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

for (let i = 1; i <= tryCount; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  result.push(getLCM(x, y));
}
console.log(result.join("\n"));
