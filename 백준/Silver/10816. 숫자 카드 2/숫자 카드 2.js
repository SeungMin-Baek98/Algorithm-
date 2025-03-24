// 백준 10816
// 숫자 카드 2
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const haveNums = input[1].split(" ").map(Number);
const findNum = input[3].split(" ").map(Number);
const findNumMap = new Map();

for (let i = 0; i < findNum.length; i++) {
  findNumMap.set(findNum[i], 0);
}

for (let i = 0; i < haveNums.length; i++) {
  const num = haveNums[i];
  if (findNumMap.has(num)) {
    findNumMap.set(num, findNumMap.get(num) + 1);
  }
}

const result = [];
for (let i = 0; i < findNum.length; i++) {
  result.push(findNumMap.get(findNum[i]));
}

console.log(result.join(" "));
