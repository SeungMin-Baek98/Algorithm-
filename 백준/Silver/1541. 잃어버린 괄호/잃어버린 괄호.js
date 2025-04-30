// 백준 1541
// 팩토리얼 0의 개

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("-");

const result = [];
input.forEach((item) => {
  if (item.includes("+")) {
    const numbers = item.split("+").map(Number);
    const add = numbers.reduce((acc, cur) => acc + cur);

    result.push(add);
  } else {
    result.push(+item);
  }
});

console.log(result.reduce((acc, cur) => acc - cur));
