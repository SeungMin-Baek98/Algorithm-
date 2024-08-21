const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let countNum = Number(input[0]); // 숫자의 개수
let listNums = input[1].split(" ").map(Number);
let findNum = Number(input[2]); // 찾을 숫자
let count = 0; // 같은 숫자가 있을떄 count할 변수

for (let i = 0; i < listNums.length; i++) {
  if (listNums[i] === findNum) {
    count = count + 1;
  }
}
console.log(count);
