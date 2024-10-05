const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const num = Number(input[0]);
const findNum = Number(input[1]);
let divide = [];

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divide.push(i);
  }
}

if (divide.length < findNum) {
  console.log(0);
} else {
  console.log(divide[findNum - 1]);
}
