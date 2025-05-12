// 백준 2164
// 카드2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const N = Number(input);
const arr = Array.from({ length: N }, (_, i) => i + 1);


let front = 0;

while (arr.length - front > 1) {
  front++;
  arr.push(arr[front]);
  front++;
}

console.log(arr[front]);
