const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

// 최대공약수
const getGCM = (a, b) => {
  return b === 0 ? a : getGCM(b, a % b);
};

// 최소공배수
const getLCM = (a, b) => {
  return (a * b) / getGCM(a, b);
};

console.log(getGCM(input[0], input[1]));
console.log(getLCM(input[0], input[1]));
