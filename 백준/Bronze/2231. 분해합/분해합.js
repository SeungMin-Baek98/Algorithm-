const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const num = input[0];
let result = 0;
for (let i = 1; i <= num; i++) {
  let sum = i;
  const newNum = i.toString().split("").map(Number);

  for (let j = 0; j < newNum.length; j++) {
    sum += newNum[j];
  }

  if (sum === num) {
    result = i;
    break;
  }
}

console.log(result === 0 ? 0 : result);
