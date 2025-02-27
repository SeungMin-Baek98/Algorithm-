const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "O") {
      count++;
      sum += count;
    } else if (arr[i] === "X") {
      count = 0;
    }
  }
  return sum;
}

const testCase = Number(input.shift());

for (let i = 0; i < testCase; i++) {
  console.log(solution(input[i]));
}
