const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.pop(); // 마지막 0 0 제거

const result = [];
input.forEach(([first, seconds]) => {
  result.push(first > seconds ? "Yes" : "No");
});

console.log(result.join("\n")); // \n을 기준으로 출력값들을 줄 바꿈하여 새로운값으로 출력.
