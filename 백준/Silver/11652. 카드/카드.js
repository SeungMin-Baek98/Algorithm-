const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = input.slice(1).map(BigInt);
const findNum = new Map();

for (const number of numbers) {
  if (findNum.has(number)) {
    findNum.set(number, findNum.get(number) + 1n); //기존의 있는 숫자에 + 1
  } else {
    findNum.set(number, 1n); // 배열안에 있는 숫자를 1로 초기설정
  }
}

let maxKey = 0n;
let maxValue = -Infinity;

for (const [key, value] of findNum) {
  if (value > maxValue) {
    maxValue = value;
    maxKey = key;
  } else if (value === maxValue) {
    if (maxKey > key) {
      maxKey = key;
    }
  }
}

console.log(maxKey.toString());
