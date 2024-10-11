const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const str = input[0].split(""); // 문자열을 배열로 변환
const base = Number(input[1]); // 진법

let totalSum = 0;

for (let i = 0; i < str.length; i++) {
  let value;

  if ("0" <= str[i] && str[i] <= "9") {
    value = str[i].charCodeAt(0) - "0".charCodeAt(0);
  } else if ("A" <= str[i] && str[i] <= "Z") {
    value = str[i].charCodeAt(0) - "A".charCodeAt(0) + 10;
  }

  totalSum = totalSum * base + value;
}

console.log(totalSum);
