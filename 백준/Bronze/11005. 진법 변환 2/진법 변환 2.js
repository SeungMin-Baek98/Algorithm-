const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const base = Number(input[1]); // 진법
let num = Number(input[0]); // 변환할 숫자
let result = [];

while (num > 0) {
  let remainder = num % base;
  num = Math.floor(num / base);

  if (remainder < 10) {
    result.push(remainder);
  } else {
    result.push(String.fromCharCode("A".charCodeAt(0) + (remainder - 10)));
  }
}

console.log(result.reverse().join(""));
