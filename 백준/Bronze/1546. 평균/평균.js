const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const scoreNum = Number(input[0]);
const scoreArr = input[1].toString().trim().split(" ").map(Number);

let maxNum = Math.max(...scoreArr);
let average = 0;

for (i = 0; i < scoreNum; i++) {
  const newScore = (scoreArr[i] / maxNum) * 100;
  average = average + newScore;
}

console.log(average / scoreNum);
