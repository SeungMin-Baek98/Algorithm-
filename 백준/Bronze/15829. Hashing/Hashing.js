const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const length = Number(input.shift());
const str = input[0].split("").map((el) => el.charCodeAt(0) - 96);

const r = 31;
const M = 1234567891;
let sum = 0;

for (let i = 0; i < length; i++) {
  sum += str[i] * Math.pow(r, i);
}

console.log(sum % M);
